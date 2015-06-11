/* Date Parser */
function Dates(knwl) {
    
    this.languages = {
        'english': true,
    };
    
    this.year = {};
    this.year.lookForYear = function(pos) {
        
        /*
            Attempts to find year in string through ranking:
            1. Proximity to trigger source
            2. Punctuation syntax
        */
        
        var potential = [];
        
        var fall = 1.0; //ranking fall
        
        
        for (var ee = pos; ee > pos - 20; ee--) {
            if (dates.db.wordsWithPunc[ee] === undefined) {
                break;
            }
            if (dates.db.wordsWithPunc[ee].search(/[,;:]/g) !== -1) { //rank lower if comma seperates results
                fall += 4;
            } else if (dates.db.wordsWithPunc[ee].search(/[.?!]/g) !== -1) { //rank much lower if in another sentence
                fall += 72;
            }
            var curWord = dates.db.wordsWithPunc[ee].replace(/[.,!?\(\)]/g, ''); //cleanup
            if (isNaN(parseInt(curWord)) === false) {
                var parsedWord = parseInt(curWord);
                if (parsedWord.toString().length === 4) {
                    potential.push({
                        offset: (pos - ee) * fall,
                        year: parseInt(curWord)
                    });
                    break;
                }
            }
        };
        
        fall = 1.0; //reset ranking fall
        
        for (var ee = pos; ee < pos + 20; ee++) {
            if (dates.db.wordsWithPunc[ee] === undefined) {
                break;
            }
            var curWord = dates.db.wordsWithPunc[ee].replace(/[.,!?\(\)]/g, ''); //cleanup
            if (isNaN(parseInt(curWord)) === false) {
                var parsedWord = parseInt(curWord);
                if (parsedWord.toString().length === 4) {
                    potential.push({
                        offset: (ee - pos) * fall,
                        year: parseInt(curWord)
                    });
                    break;
                }
            }
            if (dates.db.wordsWithPunc[ee].search(/[,;:]/g) !== -1) { //rank lower if comma seperates results
                fall += 4;
            } else if (dates.db.wordsWithPunc[ee].search(/[.?!]/g) !== -1) { //rank much lower if in another sentence
                fall += 72;
            }
        }
        if (potential.length > 0) {
            var sortedByPotential = potential.sort(function(a,b) {
                return a.offset - b.offset;
            });
            return sortedByPotential[0].year;
        } else {
            return "unknown";
        }
    };
    
    this.day = {};
    this.day.prefix = ['twenty', 'thirty'];
    this.day.suffix = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth', 'tenth','eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
    this.months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    this.monthAbbrs = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
    this.holidays = [
        ['thanksgiving'],
        ['christmas'],
        ['new', 'years'],
        ['july', '4th'],
        ['halloween'],
        ['april', 'fools']
    ];
    
    this.holidaysD = [
        [28, 11],
        [25, 12],
        [1, 1],
        [4, 7],
        [31, 10],
        [1, 4]
    ];
    this.dateObj = new Date();
    this.constructDateObj = function(year, month, day) {
        return {
            year: year,
            month: month,
            day: day,
            preview: null
        };
    };
    
    this.getDay = function(word) {
        if (word === undefined) {
            return "unknown";
        }
        //word (twenty-first)
        var pieces = word.toLowerCase().split('-');
        var numberStr = '';
        for (var ii = 0; ii < pieces.length; ii++) {
            var foundPrefix = false;
            if (ii === 0) {
                for (var ee = 0; ee < dates.day.prefix.length; ee++) {
                    if (pieces[ii] === dates.day.prefix[ee]) {
                        if (dates.day.prefix[ee] === 'twenty') {
                            numberStr += "2";   
                        } else if (dates.day.prefix[ee] === 'thirty') {
                            numberStr += "3";
                        }
                        foundPrefix = true;
                        break;
                    }
                }
                if (foundPrefix === false) {
                    for (var ee = 0; ee < dates.day.suffix.length; ee++) {
                        if (pieces[ii] === dates.day.suffix[ee]) {
                            numberStr += ee + 1;
                            break;
                        }
                    }
                    break;
                }
            } else {
                for (var ee = 0; ee < dates.day.suffix.length; ee++) {
                    if (pieces[ii] === dates.day.suffix[ee]) {
                        numberStr += ee + 1;
                        break;
                    }
                }    
            }
        }
        
        if (numberStr.length > 0) {
            return parseInt(numberStr);
        }
        //number (21st)
        if (parseInt(word.replace(/[^0-9\.]+/g, "")) > 0 && parseInt(word.replace(/[^0-9\.]+/g, "")) < 32) {
            var parsed = parseInt(word);
            if (isNaN(parsed) === true) {
                return "unknown";
            }
            return parsed;
        }
    };
    this.day.lookForDay = function(pos) {
        
         /*
            Attempts to find day in string through ranking:
            1. Proximity to trigger source
            2. Punctuation syntax
        */
        
        var potential = [];
        var fall = 1.0; //ranking fall
        for (var ee = pos; ee > pos - 10; ee--) {
            if (dates.db.wordsWithPunc[ee] === undefined) {
                break;
            }
            if (dates.db.wordsWithPunc[ee].search(/[?!.]/g) !== -1) { //if reached end of previous sentence
                break;
            }
            if (dates.db.wordsWithPunc[ee].search(/[,;:]/g) !== -1) { //rank lower if comma seperates results
                fall += 4;
            }
            var curWord = dates.db.wordsWithPunc[ee].replace(/[.,!?\(\)]/g, ''); //cleanup
            if (curWord.length - curWord.replace(/[^0-9\.]+/g, "").length === 2) {
                var testDay = dates.getDay(curWord);
                if (testDay !== "unknown" && testDay !== undefined) {
                    potential.push({
                        offset: (pos - ee) * fall,
                        day: testDay
                    });
                    break;
                }
            }
        };
        
        fall = 1.0; //reset ranking fall
        
        for (var ee = pos; ee < pos + 10; ee++) {
            if (dates.db.wordsWithPunc[ee] === undefined) {
                break;
            }
            var shouldBreak = false;
            if (dates.db.wordsWithPunc[ee].search(/[?!.]/g) !== -1) { //if reached end of previous sentence
                shouldBreak = true;
            }
            var curWord = dates.db.wordsWithPunc[ee].replace(/[.,!?\(\)]/g, ''); //cleanup
            if (curWord.length - curWord.replace(/[^0-9\.]+/g, "").length === 2) {
                var testDay = dates.getDay(curWord);
                if (testDay !== "unknown" && testDay !== undefined) {
                    potential.push({
                        offset: (ee - pos) * fall,
                        day: testDay
                    });
                    break;
                }
            }
            if (shouldBreak) {
                break;
            }
            if (dates.db.wordsWithPunc[ee].search(/[,;:]/g) !== -1) { //rank lower if comma seperates results
                fall += 4;
            }
        }
        if (potential.length > 0) {
            var sortedByPotential = potential.sort(function(a,b) {
                return a.offset - b.offset;
            });
            return sortedByPotential[0].day;
        } else {
            return "unknown";
//            return dates.dateObj.getFullYear();
        }
    };
    this.getMonth = function(word, typeD) {
        if (!isNaN(word) && typeD === 'mdy') {
            return parseInt(word);
        } else {
            for (var i = 0; i < dates.months.length; i++) {
                if (dates.months[i] === word) {
                    return i + 1;
                }
            }
            for (var i = 0; i < dates.monthAbbrs.length; i++) {
                if (dates.monthAbbrs[i] === word) {
                    return i + 1;
                }
            }
        }
    };
    
    this.db = {};
    this.db.words = [];
    this.db.wordsWithPunc = [];
    this.calls = function() {
    
    var words = knwl.words.get('words');
    var wordsWithPunc = knwl.words.get('linkWords');
    
    dates.db.words = words;
    dates.db.wordsWithPunc = wordsWithPunc;
    
    var results = [];
    
        //for dates like "july 16th 1999" one
        var dateObj = {};
        for (var i = 0; i < words.length; i++) {
    
            var month = dates.getMonth(words[i]);
            if (month !== undefined) {
                day = dates.getDay(words[i + 1]);
                if (day === undefined) {
                    day = dates.day.lookForDay(i);
                }
                var shouldContinue = true;
                if (day === undefined || day === "unknown") {
                    if (month === undefined || year === undefined) {
                        shouldContinue = false;
                    }
                    shouldContinue = false;
                }
                if (shouldContinue === true) {
                    var year = dates.year.lookForYear(i);
                    dateObj = dates.constructDateObj(year, month, day);
                    dateObj.preview = knwl.tasks.preview(i);
                    dateObj.found = i;
                    results.push(dateObj);
                }
            }
    
        }
    
        //for dates like "7/16/1999" two
        var dateObj = {};
        for (var i = 0; i < words.length; i++) {
            var word = words[i].replace("(", ""); //remove parenth--- if they are present
            var word = word.replace(")", ""); //remove parenth--- if they are present
            var testDate = word.split("/");
            if (testDate.length === 3) {
                var isAllNums = 0;
                for (var z = 0; z < testDate.length; z++) {
                    if (!isNaN(testDate[z]) && testDate[z] !== "") {
                        isAllNums++;
                    }
                }
                if (isAllNums === 3) {
                    var month = dates.getMonth(testDate[0], 'mdy');
                    var day = dates.getDay(testDate[1]);
                    var year = parseInt(testDate[2]);
                    if (month > 12) { //month cannot be over 12
                        break;
                    }
                    dateObj = dates.constructDateObj(year, month, day);
                    dateObj.preview = knwl.tasks.preview(i);
                    dateObj.found = i;
                    results.push(dateObj);
                }
            }
    
        }
        //for dates like "24th of december" three
        var dateObj = {};
        for (var i = 0; i < words.length; i++) {
            if (words[i + 1] === "of") {
                if (words[i + 2] !== undefined) {
    
                    var day = dates.getDay(words[i]);
                    var month = dates.getMonth(words[i + 2]);
                    var year = dates.dateObj.getFullYear();
    
                    if (month !== undefined && day !== undefined) { //make sure month and day defined
                        year = dates.year.lookForYear(i);
                        dateObj = dates.constructDateObj(year, month, day);
                        dateObj.preview =  knwl.tasks.preview(i);
                        dateObj.found = i;
                        results.push(dateObj);
                    }
                } //finish check if month and day defined
            }
        }
        
        //for dates like "thanksgiving", "christmas", or "new years"
        var dateObj = {};
        for (var i = 0; i < words.length; i++) {
            for (var e = 0; e < dates.holidays.length; e++) {
                var curHol = dates.holidays[e];
                var pos = i;
                if (words[pos] === curHol[0]) {
                    for (var x = 0; x < curHol.length; x++) {
                        if (words[pos] === curHol[x]) {
                            if (x === curHol.length - 1) {
                                if (dates.dateObj.getMonth() <= dates.holidaysD[e][1] + 1) {
                                    
                                    dateObj = dates.constructDateObj(dates.year.lookForYear(i), dates.holidaysD[e][1], dates.holidaysD[e][0]);
                                    dateObj.preview = knwl.tasks.preview(i);
                                    dateObj.found = i;
                                } else {
                                    dateObj = dates.constructDateObj(dates.year.lookForYear(i), dates.holidaysD[e][1], dates.holidaysD[e][0]);
                                    dateObj.preview = knwl.tasks.preview(i);
                                    dateObj.found = i;
                                }
                                results.push(dateObj);
                            }
                        } else {
                            break;
                        }
                        pos++;
                    }
                }
    
            }
        }
    
        //for dates like "2013-12-15" (YMD)
        var dateObj = {};
        for (var i = 0; i < words.length; i++) {
            var temp = words[i].split(/[-]+/);
            if (temp.length === 3) {
                var numSets = 0;
                for (var x = 0; x < temp.length; x++) {
                    if (isNaN(temp[x]) === false) {
                        numSets++;
    
                    }
                }
                if (numSets === 3) {
                    if (temp[0].length === 4 && (temp[1].length === 2 || temp[1].length === 1) && (temp[2].length === 2 || temp[2].length === 1)) {
                        for (var x = 0; x < temp.length; x++) {
                            temp[x] = parseInt(temp[x]);
                        }
                        if (temp[1] > 0 && temp[1] < 13) {
                            if (temp[2] > 0 && temp[2] < 32) {
                                if (temp[0] > 0) {
                                    dateObj = dates.constructDateObj(temp[0], temp[1], temp[2]);
                                    dateObj.preview = knwl.tasks.preview(i, words);
                                    dateObj.found = i;
                                    results.push(dateObj);
                                }
                            }
                        }
    
                    }
                }
    
            }
        }
        return results;
    };
    var dates = this;
};

module.exports = Dates;