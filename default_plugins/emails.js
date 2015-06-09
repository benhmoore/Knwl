/* Email Parser */
function Emails(knwl) {
    
    this.languages = {
        'english': true,
    };

    this.test = /\b[A-Z0-9._%+-]+@([A-Z0-9.-]+\.[A-Z]{2,4}|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\b/i;

    this.calls = function() {
        var results = [], match = "";
        var words = knwl.words.get('linkWordsCasesensitive');
        for (var i = 0; i < words.length; i++) {
            var word = words[i].split(/[\,\|\(\)\?]/g);
            for (var j = 0; j < word.length; j++) {
            	var temp = word[j].replace(/[()!]/g, '');
                temp = temp.replace(/[,]/g, '');
                if (emails.test.test(temp)) {
                    match = temp.match(emails.test)[0];
                    var emailObj = {
                        address: match,
                        preview: knwl.tasks.preview(i),
                        found: i
                    };
                    results.push(emailObj);
               }
            }
        }
        return results;
    };
    var emails = this;
};
module.exports = Emails;