knwl.units = {};
knwl.units.numbers = [
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
	'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
];

knwl.units.list = {
	'g': {
		name: 'grams'
	},
	'lbs': {
		name: 'pounds'
	},
	'mg': {
		name: 'mg'
	},
	'kg': {
		name: 'kg'
	},
	'cal': {
		name: 'calories'
	},
	'oz' : {
		name: 'ounces'
	},
	"°C": {
		name: 'celcius'
	},
	'm': {
		name: 'meters'
	},
	'ft': {
		name: 'feet'
	},
	'mL': {
		name: 'mL'
	},
	'ms': {
		name: 'miliseconds'
	},
	's': {
		name: 'seconds'
	},
	'min': {
		name: 'minutes'
	},
	'hrs': {
		name: 'hours'
	},
	'wks': {
		name: 'weeks'
	},
	'yrs': {
		name: 'years'
	},
	'bpm': {
		name: 'beats per minute'
	},
	'in': {
		name: 'inches'
	}
};

knwl.units.findUnits = function() {
	var units = [];
	var words = knwl.words.linkWordsCasesensitive;
	
	/*
	# Data Respresentation Format
	
	{
		unit: 'g',
		value: 20
	}
	*/
	
	for (var ii = 0; ii < words.length; ii++) {
		var word = words[ii].replace(/[?!.,\(\)\[\]]/g, '');
		var shouldAdd = false;
		var unitName = '';
		if (knwl.units.list[word] !== undefined) {
			shouldAdd = true;
			unitName = knwl.units.list[word].name;
		} else {
			for (var key in knwl.units.list) {
				if (knwl.units.list[key].name === word || knwl.units.list[key].name + 's' === word) {
					shouldAdd = true;
					unitName = knwl.units.list[key].name;
					break;
				}
			}
		}
		if (shouldAdd === true) {
			var unitObj = {
				unit: unitName,
				value: 0,
				preview: knwl.tasks.preview(ii),
				found: ii
			};
			
			if (words[ii - 1] !== undefined) {
				if (!(parseInt(words[ii - 1])) === false) {
					unitObj.value = parseInt(words[ii - 1]);
					units.push(unitObj);
				}
			}
			
		}
	}
	return units;
};
knwl.parserList.units = {
	calls: knwl.units.findUnits
};