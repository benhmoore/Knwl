/*

    # Data representation format:

    {
        date: [
            day: 0,
            month: 0,
            year: 0,
        ],
        preview: "sentence",
        found: pos
    }

*/


knwl.dates = {};
knwl.dates.months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
knwl.dates.monthAbbrs = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
knwl.dates.holidays = [
['thanksgiving'],
['christmas'],
['new', 'years'],
['july', '4th'],
['halloween'],
['april', 'fools'],
];
knwl.dates.holidaysD = [
[28, 11],
[25, 12],
[1, 1],
[4, 7],
[31, 10],
[1, 4]
];

knwl.dates.dateObj = new Date();

knwl.dates.constructDateObj = function(year, month, day) {
    return {
        year: year,
        month: month,
        day: day,
        preview: null
    };
};

//used with .findDates()
knwl.dates.getDay = function(word) {
if (typeof word !== 'undefined'){
    if (parseInt(word.replace(/[^0-9\.]+/g, "")) > 0 && parseInt(word.replace(/[^0-9\.]+/g, "")) < 32) {
        return parseInt(word);
        }
    }
};
knwl.dates.getMonth = function(word, type) { //used with .findDates()
    if (!isNaN(word) && type === 'mdy') {
        return parseInt(word);
    } else {
        for (var i = 0; i < knwl.dates.months.length; i++) {
            if (knwl.dates.months[i] === word) {
                return i + 1;
            }
        }
        for (var i = 0; i < knwl.dates.monthAbbrs.length; i++) {
            if (knwl.dates.monthAbbrs[i] === word) {
                return i + 1;
            }
        }
    }
};
knwl.dates.findDates = function() {

var rawWords = knwl.words.words;
var wordsWithPunc = knwl.words.linkWords;
var dates = [];

    var words = []; //make a copy of the rawWords array (otherwise, changes will be mirrored to knwl.words prop)
    for (var i = 0; i < rawWords.length; i++) {
        words[i] = rawWords[i];
    }

    //for dates like "july 16th 1999" one
    var dateObj = {};
    for (var i = 0; i < words.length; i++) {

        var month = knwl.dates.getMonth(words[i]);
        if (month !== undefined) {
            var day = knwl.dates.getDay(words[i + 1]);
            if (day !== undefined) {
                if (day > 0 && day < 32) {
                    if (!isNaN(words[i + 2]) && words[i + 2] !== "") {
                        var year = parseInt(words[i + 2]);
                        if (year > 32 && year < 10000) {
                            dateObj = knwl.dates.constructDateObj(year, month, day);
                            dateObj.preview = knwl.tasks.preview(i);
                            dateObj.found = i;
                        }
                    } else {
                        dateObj = knwl.dates.constructDateObj(knwl.dates.dateObj.getFullYear(), month, day);
                        dateObj.preview = knwl.tasks.preview(i);
                        dateObj.found = i;
                    }
                }
                dates.push(dateObj);
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

                var month = knwl.dates.getMonth(testDate[0], 'mdy');
                var day = knwl.dates.getDay(testDate[1]);
                var year = parseInt(testDate[2]);
                dateObj = knwl.dates.constructDateObj(year, month, day);
                dateObj.preview = knwl.tasks.preview(i);
                dateObj.found = i;
                dates.push(dateObj);
            }
        }

    }

    //for dates like "24th of december" three
    var dateObj = {};
    for (var i = 0; i < words.length; i++) {
        if (words[i + 1] === "of") {
            if (words[i + 2] !== undefined) {

                var day = knwl.dates.getDay(words[i]);
                var month = knwl.dates.getMonth(words[i + 2]);
                var year = knwl.dates.dateObj.getFullYear();

                if (month !== undefined && day !== undefined) { //make sure month and day defined
                    if (words[i + 3] !== undefined) { //words[i + 3] === years
                        if (!isNaN(words[i + 3])) {
                            if (words[i + 3] > 32 && words[i + 3] < 10000) {
                                year = words[i + 3];
                            }
                        } else if (words[i + 3] === "on" || words[i + 3] === "in") {
                            if (words[i + 4] !== undefined) {
                                if (!isNaN(words[i + 4])) {
                                    if (words[i + 4] > 32 && words[i + 4] < 10000) {
                                        year = words[i + 4];
                                    }
                                }
                            }
                        } else {
                            for (var v = i; v > 0; v--) {

                                if (!isNaN(words[v])) {
                                    if (words[v] > 32 && words[v] < 10000) {
                                        year = parseInt(words[v]);
                                        break;
                                    }
                                } else if (wordsWithPunc[v - 1][wordsWithPunc[v - 1].length - 1] === "." || wordsWithPunc[v - 1][wordsWithPunc[v - 1].length - 1] === "?" || wordsWithPunc[v - 1][wordsWithPunc[v - 1].length - 1] === "!" || wordsWithPunc[v - 1][wordsWithPunc[v - 1].length - 1] === ";") {
                                    break;
                                }
                            }
                        }
                    } else {
                        for (var v = i; v > 0; v--) {

                            if (!isNaN(words[v])) {
                                if (words[v] > 32 && words[v] < 10000) {
                                    year = parseInt(words[v]);
                                    break;
                                }
                            } else if (wordsWithPunc[v - 1][wordsWithPunc[v - 1].length - 1] === "." || wordsWithPunc[v - 1][wordsWithPunc[v - 1].length - 1] === "?" || wordsWithPunc[v - 1][wordsWithPunc[v - 1].length - 1] === "!" || wordsWithPunc[v - 1][wordsWithPunc[v - 1].length - 1] === ";") {
                                break;
                            }
                        }
                    }
                    dateObj = knwl.dates.constructDateObj(year, month, day);
                    dateObj.preview =  knwl.tasks.preview(i);
                    dateObj.found = i;
                    dates.push(dateObj);
                }
            } //finish check if month and day defined
        }
    } //end for



    //for dates like "thanksgiving", "chirstmas", or "new years"
    var dateObj = {};
    for (var i = 0; i < words.length; i++) {
        for (var e = 0; e < knwl.dates.holidays.length; e++) {
            var curHol = knwl.dates.holidays[e];
            var pos = i;
            if (words[pos] === curHol[0]) {
                for (var x = 0; x < curHol.length; x++) {
                    if (words[pos] === curHol[x]) {
                        if (x === curHol.length - 1) {
                            if (knwl.dates.dateObj.getMonth() <= knwl.dates.holidaysD[e][1] + 1) {
                                dateObj = knwl.dates.constructDateObj(knwl.dates.dateObj.getFullYear(), knwl.dates.holidaysD[e][1], knwl.dates.holidaysD[e][0]);
                                dateObj.preview = knwl.tasks.preview(i);
                                dateObj.found = i;
                            } else {
                                dateObj = knwl.dates.constructDateObj(knwl.dates.dateObj.getFullYear() + 1, knwl.dates.holidaysD[e][1], knwl.dates.holidaysD[e][0]);
                                dateObj.preview = knwl.tasks.preview(i);
                                dateObj.found = i;
                            }
                            dates.push(dateObj);
                        }
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
                                dateObj = knwl.dates.constructDateObj(temp[0], temp[1], temp[2]);
                                dateObj.preview = knwl.tasks.preview(i, words);
                                dateObj.found = i;
                                dates.push(dateObj);
                            }
                        }
                    }

                }
            }

        }
    }
    
    return dates;

};
knwl.parserList.dates = { //setup parser
    calls: knwl.dates.findDates
};

knwl.times = {};
knwl.times.findTimes = function() {
    
    var rawWords = knwl.words.words;
    
    var times = [];
    
    var words = []; //make a copy of the rawWords array (otherwise, changes will be mirrored to knwl.words prop)
    for (var i = 0; i < rawWords.length; i++) {
        words[i] = rawWords[i];
    }

    for (var i = 0; i < words.length; i++) {
        var timeObj = {};
        var testTime = words[i].split(":");
        if (testTime.length === 2) {
            var daynight = false;
            if (testTime[1].search('am') !== -1) {
                testTime[1] = testTime[1].slice(0, testTime[1].length - 2);
                daynight = 'AM';
            } else if (testTime[1].search('pm') !== -1) {
                testTime[1] = testTime[1].slice(0, testTime[1].length - 2);
                daynight = 'PM';
            }
            if (!isNaN(testTime[0]) && !isNaN(testTime[1])) {
                if (testTime[0] > 0 && testTime[0] < 13) {
                    if (testTime[1] >= 0 && testTime[1] < 61) {
                        if (words[i + 1] === "pm") {
                            timeObj.hour = testTime[0];
                            timeObj.minute = testTime[1];
                            timeObj.daynight = "PM",
                            timeObj.preview = knwl.tasks.preview(i);
                            timeObj.found = i;
                            times.push(timeObj);
                        } else if (words[i + 1] === "am") {
                            timeObj.hour = testTime[0];
                            timeObj.minute = testTime[1];
                            timeObj.daynight = "AM",
                            timeObj.preview = knwl.tasks.preview(i);
                            timeObj.found = i;
                            times.push(timeObj);
                        } else {
                            if (daynight !== false) {
                                timeObj.hour = testTime[0];
                                timeObj.minute = testTime[1];
                                timeObj.daynight = "Unknown",
                                timeObj.preview = knwl.tasks.preview(i);
                                timeObj.found = i;
                                times.push(timeObj);
                            }
                        }
                    }
                }
            }
        }

    }
    var timeObj = {};
    for (var i = 0; i < words.length; i++) {
        if (words[i].split(":").length === 1) {
            if (isNaN(words[i]) !== true) { //is a number
                var temp = parseInt(words[i]);
                if (temp > 0 && temp < 13) {
                    if (words[i + 1] === "am" || words[i + 1] === "pm") {
                        timeObj.hour = temp;
                        timeObj.minute = '00';
                        timeObj.daynight = words[i + 1].toUpperCase(),
                        timeObj.preview = knwl.tasks.preview(i);
                        timeObj.found = i;
                        times.push(timeObj);
                    }
                }
            } else if (words[i].search('am') !== -1) {
                var temp = words[i];
                temp = temp.slice(0, temp.length - 2);
                temp = parseInt(temp);
                if (isNaN(temp) !== true) {
                    if (temp > 0 && temp < 13) {
                        timeObj.hour = temp;
                        timeObj.minute = '00';
                        timeObj.daynight = 'AM',
                        timeObj.preview = knwl.tasks.preview(i);
                        timeObj.found = i;
                        times.push(timeObj);
                    }
                }
            } else if (words[i].search('pm') !== -1) {
                var temp = words[i];
                temp = temp.slice(0, temp.length - 2);
                temp = parseInt(temp);
                if (isNaN(temp) !== true) {
                    if (temp > 0 && temp < 13) {
                        timeObj.hour = temp;
                        timeObj.minute = '00';
                        timeObj.daynight = 'PM',
                        timeObj.preview = knwl.tasks.preview(i);
                        timeObj.found = i;
                        times.push(timeObj);
                    }
                }
            }
        }
    }
    return times;
};

knwl.parserList.times = { //setup parser
    calls: knwl.times.findTimes
};