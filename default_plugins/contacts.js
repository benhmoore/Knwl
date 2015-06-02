/* Email Parser */
knwl.emails = {};
knwl.emails.test = /\b[A-Z0-9._%+-]+@([A-Z0-9.-]+\.[A-Z]{2,4}|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\b/i;

knwl.emails.findEmails = function() {
        var emails = [], match = "";
        var words = knwl.words.linkWordsCasesensitive;
        for (var i = 0; i < words.length; i++) {
            var word = words[i].split(/[\,\|\(\)\?]/g);
            for (var j = 0; j < word.length; j++) {
            	var temp = word[j].replace(/[()!]/g, ""); // replaces every bracket ')' or '(' and every '!' with an empty character
                temp = temp.replace(/[,]/g, '');
               if (knwl.emails.test.test(temp)) {
                match = temp.match(knwl.emails.test)[0];
                var emailObj = {
                    address: match,
                    preview: knwl.tasks.preview(i),
                    found: i
                };
                emails.push(emailObj);
               }
        }
    }
    return emails;
};
knwl.parserList.emails = { //setup parser
    calls: knwl.emails.findEmails
};

/* Link Parser */
knwl.links = {};
knwl.links.findLinks = function() {
    var links = [];
    var words = knwl.words.linkWords;

    for (var i = 0; i < words.length; i++) {
        var word = words[i].replace(/[\(\)!]/g, ""); // replaces every bracket ')' or '(' and every '!' with an empty character
        if (/^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i.test(word)) {
            var link = word;
            if (link[link.length - 1].search(/[?.!,]/g) !== -1) {
                link = link.substr(0, link.length-1);
            }
            var linkObj = {
                link: link,
                preview: knwl.tasks.preview(i),
                found: i
            };
            
            links.push(linkObj);
        }
    }
    return links;
};
knwl.parserList.links = { //setup parser
    calls: knwl.links.findLinks
};

/* Phone Number Parser */
knwl.phones = {};
knwl.phones.areaCodeLength = 3; // Hard code this assumption for now

    // IMPORTANT: This function makes the assumption that there is always 3 digits in an area code
    knwl.phones.formatPhoneNumber = function(number) {
        var formattedNumber = number.slice(number.length - 7, number.length - 4) + "-" +
        number.slice(number.length - 4, number.length);

        formattedNumber = "(" + number.slice(number.length - (knwl.phones.areaCodeLength + 7), number.length - 7) + ") " +
        formattedNumber;

        if (number.length > (knwl.phones.areaCodeLength + 7)) {
            formattedNumber = "+" + number.slice(0, number.length - (knwl.phones.areaCodeLength + 7)) +
            " " + formattedNumber;
        }
        return formattedNumber;
    };

knwl.phones.findPhones = function() {
        var phones = [];
        var rawWords = knwl.words.words;
        var currWord = null;
        
        var words = []; //make a copy of the rawWords array (otherwise, changes will be mirrored to knwl.words prop)
        for (var i = 0; i < rawWords.length; i++) {
            words[i] = rawWords[i];
        }
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
               } else if (i > 0 && currWord.length === (knwl.phones.areaCodeLength + 7)) {
                var countryCode = knwl.tasks.removeCharacters("+", words[i - 1]);
                if (countryCodeRegExp.test(countryCode)) {
                    currWord = countryCode + currWord;
                }
            }

                /* We needed the phoneRegex to accept a minimum of 7 digits in case the preceding words
                   made up the area code and possibly the country code, but if at this point there is
                   not at least 7 digits plus the areaCodeLength in the currWord then it is not likely
                   a phone number */
                   if (currWord.length >= (7 + knwl.phones.areaCodeLength)) {
                    var phoneObj = {
                        phone: knwl.phones.formatPhoneNumber(currWord),
                        preview: knwl.tasks.preview(i),
                        found: i
                    };
                    phones.push(phoneObj);
                }
            }
        }
        return phones;
    };
knwl.parserList.phones = {
    calls: knwl.phones.findPhones  
};
