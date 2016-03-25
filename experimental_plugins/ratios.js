                                                                  // This plugin recognizes ratios (https://en.wikipedia.org/wiki/Ratio#Proportions_and_percentage_ratios)
                                                                  // Note: Does not support irrational fractions.
                                                                  // returns: {context: String, value: String, percentileValue: Int}

function Ratios(knwlInstance) {
    var types = [

        {                                                         // regular percent: 12938,1231%
            percentile: function(value) { return +value.substring(0, value.length - 1)},
            regEx: '[0-9]*[\.|,]?[0-9]*\%'
        },

        {                                                         // fractions with colon or slash: 9:30; 12/123
            percentile: function(value) { return eval(value.replace(':','/'))* 100},
            regEx: '[0-9]*[\:|\/][0-9]*'
        }

    ]


    this.calls = function() {
        var words = knwlInstance.words.get('words');              // get the String as an array of words

        var results = [];                                         // prepare results

        words.forEach( function(word) {                           // check each word
            types.some( function(type) {                          // for each type

                var regEx = new RegExp(type.regEx);               // load regeEx
                var regExRes = regEx.exec(word);                  // execute this regex on this word

                if(regExRes != null){                             // if it worked out, prepare a res to push
                    var res = {};

                    res.context = word;                           // context = entire word.
                    value = regExRes[0]
                    res.value = value;
                    res.percentileValue = type.percentile(value); // context = entire word.
                    results.push(res);
                    return true;                                  // break when found
                }
            });
        });

        return results;
    };
}

module.exports = Ratios;
