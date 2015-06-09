/* Phone Number Parser */
function Phones(knwl) {
    
    this.languages = {
        'english': true,
    };

    this.areaCodeLength = 3; // Hard code this assumption for now
    
    // IMPORTANT: This function makes the assumption that there is always 3 digits in an area code
    this.formatPhoneNumber = function(number) {
        var formattedNumber = number.slice(number.length - 7, number.length - 4) + "-" +
        number.slice(number.length - 4, number.length);
    
        formattedNumber = "(" + number.slice(number.length - (phones.areaCodeLength + 7), number.length - 7) + ") " +
        formattedNumber;
    
        if (number.length > (phones.areaCodeLength + 7)) {
            formattedNumber = "+" + number.slice(0, number.length - (phones.areaCodeLength + 7)) +
            " " + formattedNumber;
        }
        return formattedNumber;
    };
    
    this.calls = function() {
        var results = [];
        
        var words = knwl.words.get('words');
        var currWord = null;
        
        /* Phone Numbers can be as little as 7 digits per word,
           and as large as 13 if the word contains country code & area code & phone number
           note: this applies to North American area codes assuming 3 digits
           and is not applicable globally */
           var phoneRegexp = /^\d{7,13}$/;
        // North American Area Code's always have 3 digits
        // To make this universal, could use a dictionary keyed on Country
        var areaCodeRegExp = /^\d{3}$/;
        // Country Code's vary from 1 to 3 digits
        var countryCodeRegExp = /^\d{1,3}$/;
    
        for (var i = 0; i < words.length; i++) {
            currWord = knwl.tasks.removeCharacters(["-", "(", ")"], words[i]);
    
            if (phoneRegexp.test(currWord)) {
                /* At this point the word is thought to be a phone number.
                   If the current word is only of length 7 it's required that the previous word
                   is the area code, assuming there is a previous word. */
                   if (i > 0 && currWord.length === 7) {
                    var areaCode = knwl.tasks.removeCharacters(["(", ")"], words[i - 1]);
                    if (areaCodeRegExp.test(areaCode)) {
                        currWord = areaCode + currWord;
    
                        /* At this point the current word and previous word make up the area code
                           and phone number.
                           Check whether the 2 words back represents the country code */
                           if (i > 1) {
                            var countryCode = knwl.tasks.removeCharacters("+", words[i - 2]);
                            if (countryCodeRegExp.test(countryCode)) {
                                currWord = countryCode + currWord;
                            }
                        }
                    }
                    /* If the current word is not length 7, it's possible that the current word contains
                   both the phone number and area code and the previous word is the country code.
                   Once again, this is assuming that the areaCode length is 3 */
               } else if (i > 0 && currWord.length === (phones.areaCodeLength + 7)) {
                var countryCode = knwl.tasks.removeCharacters("+", words[i - 1]);
                if (countryCodeRegExp.test(countryCode)) {
                    currWord = countryCode + currWord;
                }
            }
    
                /* We needed the phoneRegex to accept a minimum of 7 digits in case the preceding words
                   made up the area code and possibly the country code, but if at this point there is
                   not at least 7 digits plus the areaCodeLength in the currWord then it is not likely
                   a phone number */
                   if (currWord.length >= (7 + phones.areaCodeLength)) {
                    var phoneObj = {
                        phone: phones.formatPhoneNumber(currWord),
                        preview: knwl.tasks.preview(i),
                        found: i
                    };
                    results.push(phoneObj);
                }
            }
        }
        return results;
    };
    var phones = this;
};

module.exports = Phones;
