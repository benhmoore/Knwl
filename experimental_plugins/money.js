// This plugin recognizes money  :)
// Note: this only recognizes money if it looks like a specifiic format
// and is separated from the currency symbol by a space
// Note: Output not normalized.
// Note: quantity is stringly typed
// returns: {value: String, quantity: String, type: string}
//

// take from http://www.thefinancials.com/Default.aspx?SubSectionID=curformat
// assuming things are typed correctly


function Money(knwlInstance) {
    var isoTypes =
        [
            {
                iso: 'EUR',
                match: '^euro?s?$'
            }
        ,
            {
                iso: 'USD',
                match: '^usd?s?$'
            }
        ]


    var formats = [
        '^(?!0\.00)[0-9]{1,3}(,[0-9]{3})*(\.[0-9][0-9])?$', // EUR,USD
        '^(?!0,00)[0-9]{1,3}(\.[0-9]{3})*(,[0-9][0-9])?$' // inverted EUR, USD
    ]



    this.calls = function() {
        var words = knwlInstance.words.get('linkWords');              // get the String as an array of linked Words
        var results = [];                                         // prepare results
        var typeFound = {
            index: null
        }
        var quantityFound = {
            index: null
        }

        words.forEach( function(word) {                           // check each word



            formats.some( function(format){
                 var regEx = new RegExp(format);
                 var regExRes = regEx.exec(word);
                 if( regExRes != null) {
                     quantityFound.index = 0;
                     quantityFound.quantity = regExRes[0];
                     return true;
                 }
            });
            isoTypes.some( function(type){
                 regEx = new RegExp(type.match);
                 var regExRes = regEx.exec(word);
                 typeFound.value = type.iso;
                 if( regExRes != null) {
                     typeFound.index = 0;
                     return true;
                 }
            });


            if (quantityFound.index === 0 ){
                if (typeFound.index === 1){
                    results.push(
                        {type: typeFound.value,
                        quantity: quantityFound.quantity,
                        value: typeFound.value + ' ' + quantityFound.quantity
                        });
                }
            }

            if (quantityFound.index === 1 ){
                if (typeFound.index === 0){
                    results.push(
                        {type: typeFound.value,
                        quantity: quantityFound.quantity,
                        value: typeFound.value + ' ' + quantityFound.quantity
                        });
                }
            }


            quantityFound.index++;
            typeFound.index++;
        });

        return results;
    };
}

module.exports = Money;
