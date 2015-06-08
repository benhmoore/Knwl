var knwl = new Knwl();

var demo = {};
demo.resultBoxes = {};
demo.input = null;
demo.resultsDiv = null;
demo.setup = function() {
	var resultsDiv = document.getElementById('results');
	demo.resultsDiv = resultsDiv;
	for (var el in demo.resultBoxes) {
		if (demo.resultsDiv.contains(demo.resultBoxes[el])) {
			demo.resultsDiv.removeChild(demo.resultBoxes[el]);
		}
	}
	demo.resultBoxes = {};
	demo.input = document.getElementById('input');
	for (var key in knwl.plugins) {

		var resultBox = document.createElement('div');
		resultBox.setAttribute('class', 'resultBox');
		resultBox.innerHTML += '<p class = "title">' + key + '</p>';

		demo.resultBoxes[key] = resultBox;
		resultsDiv.appendChild(resultBox);

	}
};
demo.startParse = function() {
	demo.parse();
};
demo.parse = function() {
	demo.setup();
	knwl.init(demo.input.value);
	for (var parser in knwl.plugins) {
		var data = knwl.get(parser);
		for (var ii = 0; ii < data.length; ii++) {
			var resultDiv = document.createElement('div');
			resultDiv.setAttribute('class', 'result');
			for (var key in data[ii]) {
				if (key !== 'found') {
					var p = document.createElement('p');
					if (key !== 'preview') {
						p.innerHTML = key + ': <span class = "val">' + data[ii][key] + '</span>';
					} else {
						p.innerHTML = data[ii][key];
						p.setAttribute('class', 'preview');
					}
					resultDiv.appendChild(p);
				}
			}
			demo.resultBoxes[parser].appendChild(resultDiv);
		}
		if (data.length === 0) {
			demo.resultsDiv.removeChild(demo.resultBoxes[parser]);
		}
	}
};
window.onload = function() {
	demo.setup();
	if (localStorage.getItem('knwlDemoText') !== '')
        demo.input.value = localStorage.getItem('knwlDemoText');
	demo.input.onkeydown = function() {
		setTimeout(function() {
			localStorage.setItem('knwlDemoText', demo.input.value);
		},10);
	};
};
console.info('This is a demo of knwl.js using a few of the plugins available by default. Website: http://loadfive.com/os/knwl');
console.info('Feel free to use this demo to test your own Knwl.js parser plugins. Just add them to the header of index.html, and the demo will recognize them automatically.');
