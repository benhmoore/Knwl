function Knwl(language) {
	this.language = 'unknown';
	if (language !== undefined)
		this.language = language;
	
	this.tasks = {};
	
	this.tasks.escapeRegExp = function(str) {
		return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
	};
	
	this.tasks.removeCharacters = function(charArray, str) {
		for (var ii = 0; ii < charArray.length; ii++)
            str = str.replace(new RegExp(knwl.tasks.escapeRegExp(charArray[ii]), 'g'), '');
        return str;
	};
	
	this.tasks.search = function(terms, words) {
		var results = [];
        for (var i = 0; i < words.length; i++) {
            for (var e = 0; e < terms.length; e++) {
                var curHol = terms[e];
                var pos = i;
                if (words[pos] === curHol[0]) {
                    for (var x = 0; x < curHol.length; x++) {
                        if (words[pos] === curHol[x]) {
                            if (x === curHol.length - 1) {
                                results.push(curHol);
                            }
                        }
                        pos++;
                    }
                }
            }
        }
        return results;
	};
	
	this.tasks.preview = function(position) { // used to get the entire sentence or a portion of it (depending on size), in a human-readable format, from a position
		var words = knwl.words.linkWordsCasesensitive;
		var sentence = '';
		
		var startPos = position;
		var endPos = position;
		
		for (var ii = position; ii > -1; ii--) {
			startPos = ii;
			if (words[ii][words[ii].length - 1] !== undefined) {
				if (words[ii][words[ii].length - 1].search(/[?!.]/g) !== -1) {
					if (position - startPos > 0)
						startPos = ii + 1;
					break;
				} else if (position - startPos > 10) {
					break;
				}
			}
		}
		
		for (var ii = position; ii < words.length; ii++) {
			endPos = ii;
			if (words[ii][words[ii].length - 1] !== undefined) {
				if (words[ii][words[ii].length - 1].search(/[?!.]/g) !== -1) {
					break;
				} else if (endPos - position > 10) {
					break;
				}
			}
		}
		
		sentence += words[startPos];
		for (var ii = startPos + 1; ii <= endPos; ii++) {
			sentence += ' ' + words[ii];
		}
		return sentence;
	};
	
	this.words = {
		words: [],
		linkWords: [],
		linkWordsCasesensitive: []
	};
	this.words.get = function(typeStr) { //retrieve words from database
        if (knwl.words[typeStr] !== undefined) {
            return knwl.words[typeStr].concat([]);
        }
    };
	this.words.getSentence = function(pos, typeStr) { //used to get the entire sentence a position occurs in, in a specific format
		var fullWords = knwl.words.get('linkWordsCasesensitive');
		var typeWords = knwl.words.get(typeStr);
		
		var startPos = pos;
		var begin = 0;
		var sentence = [];
		for (var ii = startPos; ii > -1; ii--) {
			if (fullWords[ii][fullWords[ii].length - 1].search(/[?!.]/g) !== -1) {
				if (startPos - begin > 0)
					begin = ii + 1;
				break;
			}
		}
		var end = 0;
		for (var ii = startPos; ii < fullWords.length; ii++) {
			end = ii;
			if (fullWords[ii][fullWords[ii].length - 1].search(/[?!.]/g) !== -1) {
				break;
			}
		}
		
		for (var ii = begin; ii <= end; ii++) {
			sentence.push(typeWords[ii]);
		}
		console.log(sentence);
	};
	
	this.init = function(str) {
		var lowercase = str.toLowerCase();
		var linkWords = lowercase.split(/[ \n]+/);
		var linkWordsCaseSensitive = str.split(/[ \n]+/);
		lowercase = lowercase.split(/[\n ]+/);
		
		for (var ii = 0; ii < lowercase.length; ii++)
			lowercase[ii] = lowercase[ii].replace(/[ ,?!]/g, '').replace(/["]/g, "'");
		
		var words = [];
		for (var ii = 0; ii < lowercase.length; ii++)
			words[ii] = lowercase[ii].split(/[.,!?]+/)[0];
		
		knwl.words.linkWordsCasesensitive = linkWordsCaseSensitive;
		knwl.words.linkWords = linkWords;
		knwl.words.words = words;
		return knwl.words;
	};
	this.get = function(parser) {
		if (this.plugins[parser] !== undefined) {
            try {
                var args = arguments;
                var data = knwl.plugins[parser].calls(args);
                return data;
            } catch (error) {
                console.error('Knwl.js Error', 'Error running parser plugin "' + parser + '"', error);
                return false;
            }
        } else {
            console.error('Knwl.js Error', 'Parser plugin "' + parser + '" not found.');
            return false;
        }
	};
	
	this.plugins = {};
	this.register = function (name, Plugin) {
        knwl.plugins[name] = new Plugin(knwl);
        if (knwl.plugins[name].languages !== undefined && knwl.language !== 'unknown') {
            if (knwl.plugins[name].languages[knwl.language] === undefined || knwl.plugins[name].languages[knwl.language] === false) {
                return {'Knwl.js Error': 'Parser plugin does not seem to support the specified language.'};
            }
        }
        return knwl;  
    };
	
	var knwl = this;
	
	// load default plugins
    this.register('dates', require('./default_plugins/dates'));
    this.register('times', require('./default_plugins/times'));
    
    this.register('emails', require('./default_plugins/emails'));
    this.register('links', require('./default_plugins/links'));
    this.register('phones', require('./default_plugins/phones'));
    
    this.register('places', require('./default_plugins/places'));
};

module.exports = Knwl;