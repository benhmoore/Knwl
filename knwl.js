var knwl = {};
knwl.tasks = {};
/**
 * In order to remove all characters during the invocation of the removeCharacters function,
 * a Regular Expression is used to find all instances of the character to remove. We need
 * to escape any special characters that Regular Expression would otherwise use.
 *
 * @param  {[string]} str [the string to esacpe]
 * @return {[string]}     [the escaped string]
 */
knwl.tasks.escapeRegExp = function(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

/**
 * This helper function can be used to remove all characters in the character array
 * provided (charArray) from the specified string (str)
 *
 * @param  {[array]} charArray [an array of characters to remove from the word]
 * @param  {[string]} str  [the string the characters should be removed from]
 * @return {[string]}       [the str without the specified characters]
 */
knwl.tasks.removeCharacters = function(charArray, str) {
    for (var ii = 0; ii < charArray.length; ii++)
        str = str.replace(new RegExp(knwl.tasks.escapeRegExp(charArray[ii]), 'g'), '');
    return str;
};
knwl.tasks.search = function(termArr, words) {
    var results = [];
    for (var i = 0; i < words.length; i++) {
        for (var e = 0; e < termArr.length; e++) {
            var curHol = termArr[e];
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
knwl.tasks.preview = function(pos) { //generates a preview from a word position
    var words = knwl.words.linkWordsCasesensitive;
    var sentence = '';
    
    var startingPos = pos;
    for (var ii = pos; ii > -1; ii--) {
        startingPos = ii;
        if (words[ii][words[ii].length - 1] !== undefined) {
            if (words[ii][words[ii].length - 1].search(/[?!.]/g) !== -1) {
                startingPos++;
                break;
            } else if (pos - startingPos > 20) {
                break;
            }
        } else {
            break;
        }
    }
    sentence+= words[startingPos];
    for (var ii = startingPos + 1; ii < words.length; ii++) {
        sentence += ' ' + words[ii];
        if (words[ii].search(/[?!.]/g) !== -1) {
            break;
        } else if (ii - pos > 20) {
            sentence+= '...';
            break;
        }
    }
    return sentence;
};

//plugin word database
knwl.words = {
    words: [], //words of string with most punctuation removed and converted to lowercase
    linkWords: [], //words with punctuation intact and converted to lowercase
    linkWordsCasesensitive: [] //words with punctuation but not converted to lowercase
};
knwl.init = function(data) {
    //turn into array of words
    var lowercaseData = data.toLowerCase();
    
    var linkWords = lowercaseData.split(/[ \n]+/);
    var linkWordsCasesensitive = data.split(/[ \n]+/);

    lowercaseData = lowercaseData.split(/[\n ]+/);


    for (var i = 0; i < lowercaseData.length; i++)
        lowercaseData[i] = lowercaseData[i].replace(/[ ,?!]/g, '').replace(/["]/g, "'");

    var words = [];
    for (var i = 0; i < lowercaseData.length; i++) { //cleanup
        words[i] = lowercaseData[i].split(/[.,!?]+/);
        words[i] = words[i][0];
    }
    
    return knwl.words = {
        linkWords: linkWords,
        words: words,
        linkWordsCasesensitive: linkWordsCasesensitive
    };

};

knwl.parserList = {
    //parser plugins should add a refrence to their main function here.
};

knwl.get = function(parser) {
    if (knwl.parserList[parser] !== undefined) {
        try {
            var args = arguments;
            var data = knwl.parserList[parser].calls(args);
            return data;
        } catch (error) {
            console.error('KNWL Error', 'Error running parser plugin "' + parser + '"', error);
            return false;
        }
    } else {
        console.error('KNWL Error', 'Parser plugin "' + parser + '" not found.');
        return false;
    }
};