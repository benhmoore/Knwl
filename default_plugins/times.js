/* Time Parser */
function Times(knwl) {
    
    this.languages = {
        'english': true,
    };
    
    this.calls = function() {

        var words = knwl.words.get('words'), times = [];
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
                                    timeObj.daynight = "unknown",
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
};
module.exports = Times;
