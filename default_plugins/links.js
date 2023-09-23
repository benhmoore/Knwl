/* Link Parser */
function Links(knwl) {
    
    this.languages = {
        'english': true,
    };

    this.calls = function() {
        var results = [];
        var words = knwl.words.get('linkWordsCasesensitive');

        for (var i = 0; i < words.length; i++) {
            var word = words[i].replace(/[\(\)!]/g, ""); // replaces every bracket ')' or '(' and every '!' with an empty character
            
            // https://stackoverflow.com/a/3809435
            var expression =
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
            
            var regex = new RegExp(expression)

            if (regex.test(word)) {
                var link = word;
                if (link[link.length - 1].search(/[?.!,]/g) !== -1) {
                    link = link.substr(0, link.length-1);
                }
                var linkObj = {
                    link: link,
                    preview: knwl.tasks.preview(i),
                    found: i
                };

                results.push(linkObj);
            }
        }
        return results;
    };
};

module.exports = Links;
