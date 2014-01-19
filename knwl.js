var braid={};braid.vnumber=.02;braid.version=function(){console.log(braid.vnumber)};braid.search=function(e,t,n,r){if(n!==undefined){if(n===false){t=t.toLowerCase();e=e.toLowerCase();if(r!==false){t=braid.replace(t,"aeiouyAEIOUY@wa@");e=braid.replace(e,"aeiouyAEIOUY@wa@")}}}var i=[];var t=t.split("");var e=e.split("");var s;var o=0;for(var u=0;u<t.length;u++){if(t[u]===e[0]){for(var a=0;a<e.length;a++){s=u+a;if(t[s]===e[a]){if(a===e.length-1){var f=s-e.length+1;i.push(f);o++}}}}}if(o===0){return false}else{return i}};braid.replace=function(e,t){var n=t;var t={};t.full=n;var r=false,i=false;t.groups=t.full.split("@n@");if(e instanceof Array){var s=[];r=true;for(var o=0;o<e.length;o++){var u=e[o];if(u===parseInt(u)){u=u.toString();i=true}for(var a=0;a<t.groups.length;a++){var f=t.groups[a];var l=braid.search("@wa@",f,true);if(l===false){var c=f.split("@w@");var h=c[0];var p=c[1];u=deiwo3replace(h,p,u)}else{var c=f.split("@wa@");var h=c[0];if(braid.search("!NUM!",h,true)!==false){h="12345678910"}if(braid.search("!VOWEL!",h,true)!==false){h="aeiouyAEIOUY"}if(braid.search("!SPECIAL!",h,true)!==false){h="~`@#$%^&*()_+-={}|[]:;<>"}h=h.split("");var p=c[1];for(var d=0;d<h.length;d++){u=deiwo3replace(h[d],p,u)}}}if(i===true){u=parseInt(u)}s.push(u);i=false}}else{if(e===parseInt(e)){e=e.toString();i=true}for(var a=0;a<t.groups.length;a++){var f=t.groups[a];var l=braid.search("@wa@",f,true);if(l===false){var c=f.split("@w@");var h=c[0];var p=c[1];e=deiwo3replace(h,p,e)}else{var c=f.split("@wa@");var h=c[0];if(braid.search("!NUM!",h,true)!==false){h="12345678910"}if(braid.search("!VOWEL!",h,true)!==false){h="aeiouyAEIOUY"}h=h.split("");var p=c[1];for(var d=0;d<h.length;d++){e=deiwo3replace(h[d],p,e)}}}if(i===true){e=parseInt(e)}}if(r===false){return e}else{return s}};var deiwo3replace=function(e,t,n){return n.replace(new RegExp(e,"g"),t)};braid.help=function(e){if(!e){console.log('Incorrect santex. Make sure to use the first parameter as a keyword. Example: braid.help("braid.replace"). \n|TIP: You can use this function in the console for quick help.')}else{if(braid.search("replace",e,false)!==false){console.log("*SANTEX FOR braid.replace()*\n\n"+"|RETURNS: braid.replace() will return the output after completing actions on the string.\n"+"|SANTEX: var VARIABLE = braid.replace('this is a test','this@w@that@n@is@w@was');\n"+"|OUTPUT: 'that was a test'\n"+"|NOTE: Using the parameter 'key' (second parameter), '@w@' is used as 'with', so 'apple@w@grape' means 'replace apple with grape'.\n"+"| '@n@ is used as 'next.' It is used to seperate instructions, as follows, 'apple@w@grape@n@cherry@w@bannana'.\n"+"| You can use '@wa@' instead of '@w@' to replace all instances of each character with another, like so, 'aeiouy@wa@#'\n"+"| If the string were 'abcdefghijklmnopqrstuvwxyz', this would output '#bcd#fgh#jklmn#pqrst#vwx#z'.\n"+"| *Input can be an Array, Integer, or String.\n")}else if(braid.search("search",e,false)!==false){console.log("*SANTEX FOR braid.search()*\n\n"+"|RETURNS: if braid.search() finds a match to query, it will return the positions of all matches in an array.\n"+"| If it does not find a match, it will return *false*.\n"+"|SANTEX: var VARIABLE = braid.search('query','complete string',false,false);\n"+"|OUTPUT: *false*\n"+"|NOTE: The third (3) parameter should be *true* or *false*, if *true* the search will be case sensitive, if *false* the search will not.\n| Setting this to false will also search by just consonants, instead of both consonants and vowels.\n"+"| The fourth (4) parameter can be set to *false* to disable the removal of vowels when searching with the third (3) parameter equal to *true*.\n")}else{console.log("~No help available on this topic. Please make sure to check your spelling.\nSANTEX: braid.help('braid.complementary'), etc.\n    ")}}}


function Knwl() {

    var UTC_DATE_TIME_RGX = /\b([0-9]{4})-(1[0-2]|0[1-9])-(3[0-1]|0[1-9]|[1-2][0-9])(T(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-](?:2[0-3]|[0-1][0-9]):[0-5][0-9])?)?\b/i
    var EMAIL_RGX = /\b[A-Z0-9._%+-]+@([A-Z0-9.-]+\.[A-Z]{2,4}|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\b/i
    
    var TLDS = ["ac","ad","ae","aero","af","ag","ai","al","am","an","ao","aq","ar","arpa","as","asia","at","au","aw","ax","az","ba","bb","be","bf","bg","bh","bi","biz","bj","bm","bo","br","bs","bt","bv","bw","by","bz","ca","cat","cc","cd","cf","cg","ch","ci","cl","cm","cn","co","com","coop","cr","cu","cv","cw","cx","cz","de","dj","dk","dm","do","dz","ec","edu","ee","eg","es","eu","fi","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gov","gp","gq","gr","gs","gt","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","im","in","info","int","io","iq","ir","is","it","je","jo","jobs","jp","kg","ki","km","kn","kp","kr","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mg","mh","mil","mk","ml","mn","mo","mobi","mp","mq","mr","ms","mt","mu","museum","mv","mw","mx","my","na","name","nc","ne","net","nf","ng","nl","no","nr","nu","om","org","pa","pe","pf","ph","pk","pl","pm","pn","post","pr","pro","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","st","su","sv","sx","sy","sz","tc","td","tel","tf","tg","th","tj","tk","tl","tm","tn","to","tp","travel","tt","tv","tw","tz","ua","ug","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","yt","امارات","বাংলা","中国","中國","الجزائر","مصر","გე","香港","भारत","بھارت","భారత్","ભારત","ਭਾਰਤ","ভারত","இந்தியா","ایران","ايران","الاردن","한국","қаз","ලංකා","இலங்கை","المغرب","мон","مليسيا","عمان","فلسطين","срб","рф","قطر","السعودية","السعودیة","السعودیۃ","السعوديه","سورية","سوريا","新加坡","சிங்கப்பூர்","ไทย","تونس","台灣","台湾","臺灣","укр","اليمن","xxx","онлайн","сайт","شبكة","游戏","企业","camera","clothing","lighting","singles","ventures","voyage","guru","holdings","equipment","bike","estate","tattoo","在线","中文网","land","plumbing","contractors","sexy","menu","世界","uno","gallery","technology","集团","reviews","guide","我爱你","graphics","construction","onl","みんな","diamonds","kiwi","enterprises","today","futbol","photography","tips","directory","kitchen","移动","kim","삼성","monash","wed","pink","ruhr","buzz","careers","shoes","موقع","career","otsuka","中信","gift","recipes","coffee","luxury","domains","photos","limo","viajes","wang","democrat","mango","cab","support","dance","nagoya","computer","wien","berlin","codes","email","بازار","repair","holiday","center","systems","wiki","ceo","international","solar","company","education","training","academy","marketing","florist","solutions","build","institute","builders","red","blue","ninja","business","gal","social","house","camp","immobilien","moda","glass","management","kaufen","farm","公益","政务","club","voting","TOKYO","moe"];
    
    this.text = {};
    this.text.data = {};

    this.addToObj = function(data, name) {
        that.text.data[name] = data;
    };



    this.get = function(label) {
        if (label !== undefined) {
            label = label.toLowerCase();
            if (label === "emotion") {
                return that.text.data.emotions;
            } else if (label === "phones") {
                return that.text.data.phones;
            } else if (label === "dates") {
                return that.text.data.dates;
            } else if (label === "times") {
                return that.text.data.times;
            } else if (label === "links") {
                return that.text.data.links;
            } else if (label === "readingtime") {
                return that.text.data.readingTime;
            } else if (label === "emails") {
                return that.text.data.emails;
            } else if (label === "places") {
                return that.text.data.places;
            } else if (label === "hashtags") {
                return that.text.data.hashtags;
            } else if (label === "aliases") {
                return that.text.data.aliases;
            } else if (label === "spam") {
                return that.text.data.spam;
            } else {
                console.error("KNWL ERROR: Data type not correct, correct types: 'emotion','phones','dates','times','links','emails','places','hashtags','aliases'");
            }
        } else {
            console.error("KNWL ERROR: Data type not correct, correct types: 'emotion','phones','dates','times','links','emails','places','hashtags','aliases'");
        }

    };

    /**
     * In order to remove all characters during the invocation of the removeCharacters function,
     * a Regular Expression is used to find all instances of the character to remove. We need
     * to escape any special characters that Regular Expression would otherwise use.
     *
     * @param  {[string]} str [the string to esacpe]
     * @return {[string]}     [the escaped string]
     */
    this.escapeRegExp = function(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };

    /**
     * This helper function can be used to remove all characters in the character array
     * provided (charArray) from the specified string (str)
     *
     * @param  {[array]} charArray [an array of characters to remove from the word]
     * @param  {[string]} str  [the string the characters should be removed from]
     * @return {[string]}       [the str without the specified characters]
     */
    this.removeCharacters = function(charArray, str) {
        for (var i = 0; i < charArray.length; i++) {
            str = str.replace(new RegExp(that.escapeRegExp(charArray[i]), "g"), "");
        }
        return str;
    };

    //****************************************************************************************************************************************
    //***************************************************READING TIME*************************************************************************
    //****************************************************************************************************************************************

    this.text.readingTime = function(wordCount) { //returns MINUTES
        var secounds = wordCount * 0.312;
        return secounds / 60;
    };

    //****************************************************************************************************************************************
    //***************************************************DATES*****************************************************************************
    //****************************************************************************************************************************************

    this.date = {};
    this.date.days = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd',
        '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'
    ];
    this.date.months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    this.date.monthAbbrs = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
    this.date.holidays = [
        ['thanksgiving'],
        ['christmas'],
        ['new', 'years'],
        ['july', '4th']
    ];
    this.date.holidaysD = [
        [28, 11],
        [25, 12],
        [1, 1],
        [4, 7]
    ];
    this.date.dateObj = new Date();

    //used with .findDates()
    this.date.getDay = function(word) {
        if (!isNaN(word)) {
            if (word > 0 && word < 32) {
                return parseInt(word);
            }
        } else {
            for (var i = 0; i < that.date.days.length; i++) {
                if (that.date.days[i] === word) {
                    return i + 1;
                }
            }
        }
    };

    //used with .findDates()
    this.date.getMonth = function(word, type) {
        if (!isNaN(word) && type === 'mdy') {
            return parseInt(word);
        } else {
            for (var i = 0; i < that.date.months.length; i++) {
                if (that.date.months[i] === word) {
                    return i + 1;
                }
            }
            for (var i = 0; i < that.date.monthAbbrs.length; i++) {
                if (that.date.monthAbbrs[i] === word) {
                    return i + 1;
                }
            }
        }
    };

    this.date.findDates = function(words, wordsWithPunc) { //returns "july 16th 1999" as "[7,16,1999, "preview"]"
        var dates = [];

        for (var i = 0; i < words.length; i++) { //cleanup
            words[i] = words[i].split(/[.,!?]+/);
            words[i] = words[i][0];
        }

        //for dates like "july 16th 1999" one
        var date = [];
        for (var i = 0; i < words.length; i++) {

            var month = that.date.getMonth(words[i]);
            if (month !== undefined) {
                var day = that.date.getDay(words[i + 1]);
                if (day !== undefined) {
                    if (day > 0 && day < 32) {
                        if (!isNaN(words[i + 2]) && words[i + 2] !== "") {
                            var year = parseInt(words[i + 2]);
                            if (year > 32 && year < 10000) {
                                date = [month, day, year, that.preview(i, words)];
                            }
                        } else {
                            date = [month, day, that.date.dateObj.getFullYear(), that.preview(i, words)];
                        }
                    }
                    dates.push(date);
                }
            }

        }

        //for dates like "7/16/1999" two
        var date = [];
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

                    var month = that.date.getMonth(testDate[0], 'mdy');
                    var day = that.date.getDay(testDate[1]);
                    var year = parseInt(testDate[2]);
                    date = [month, day, year, that.preview(i, words)];
                    dates.push(date);
                }
            }

        }

        //for dates like "24th of december" three
        var date = [];
        for (var i = 0; i < words.length; i++) {
            if (words[i + 1] === "of") {
                if (words[i + 2] !== undefined) {
                    var day = that.date.getDay(words[i]);

                    var month = that.date.getMonth(words[i + 2]);
                    var year = that.date.dateObj.getFullYear();
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
                        date = [month, day, year, that.preview(i, words)];
                        dates.push(date);
                    }
                } //finish check if month and day defined
            }
        } //end for



        //for dates like "thanksgiving", "chirstmas", or "new years"
        var date = [];
        for (var i = 0; i < words.length; i++) {
            for (var e = 0; e < that.date.holidays.length; e++) {
                var curHol = that.date.holidays[e];
                var pos = i;
                if (words[pos] === curHol[0]) {
                    for (var x = 0; x < curHol.length; x++) {
                        if (words[pos] === curHol[x]) {
                            if (x === curHol.length - 1) {
                                if (that.date.dateObj.getMonth() <= that.date.holidaysD[e][1] + 1) {
                                    date = [that.date.holidaysD[e][1], that.date.holidaysD[e][0], that.date.dateObj.getFullYear(), that.preview(i, words)];
                                } else {
                                    date = [that.date.holidaysD[e][1], that.date.holidaysD[e][0], that.date.dateObj.getFullYear() + 1, that.preview(i, words)];
                                }

                                dates.push(date);
                            }
                        }
                        pos++;
                    }
                }

            }
        }

        //for dates like "2013-12-15" (YMD)
        var date = [];
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
                                    date = [temp[1], temp[2], temp[0], that.preview(i, words)];
                                    dates.push(date);
                                }
                            }
                        }

                    }
                }

            }
        }




        return dates;

    };

    //****************************************************************************************************************************************
    //***************************************************TIMES********************************************************************************
    //****************************************************************************************************************************************

    this.time = {};
    this.time.findTimes = function(words) {
        var times = [];

        var time = [];
        for (var i = 0; i < words.length; i++) {
            var testTime = words[i].split(":");
            if (testTime.length === 2) {
                var daynight = false;
                if (braid.search('am', testTime[1], true) !== false) {
                    testTime[1] = testTime[1].slice(0, testTime[1].length - 2);
                    daynight = 'AM';
                } else if (braid.search('pm', testTime[1], true) !== false) {
                    testTime[1] = testTime[1].slice(0, testTime[1].length - 2);
                    daynight = 'PM';
                }
                if (!isNaN(testTime[0]) && !isNaN(testTime[1])) {
                    if (testTime[0] > 0 && testTime[0] < 13) {
                        if (testTime[1] >= 0 && testTime[1] < 61) {
                            if (words[i + 1] === "pm") {
                                time = [testTime[0], testTime[1], "PM", that.preview(i, words)];
                                times.push(time);
                            } else if (words[i + 1] === "am") {
                                time = [testTime[0], testTime[1], "AM", that.preview(i, words)];
                                times.push(time);
                            } else {
                                if (daynight !== false) {
                                    time = [testTime[0], testTime[1], daynight, that.preview(i, words)];
                                    times.push(time);
                                }
                            }
                        }
                    }
                }
            }

        }
        var time = [];
        for (var i = 0; i < words.length; i++) {
            if (words[i].split(":").length === 1) {
                if (isNaN(words[i]) !== true) { //is a number
                    var temp = parseInt(words[i]);
                    if (temp > 0 && temp < 13) {
                        if (words[i + 1] === "am" || words[i + 1] === "pm") {
                            time = [temp, '00', words[i + 1].toUpperCase(), that.preview(i, words)];
                            times.push(time);
                        }
                    }
                } else if (braid.search('am', words[i], true) !== false) {
                    var temp = words[i];
                    temp = temp.slice(0, temp.length - 2);
                    temp = parseInt(temp);
                    if (isNaN(temp) !== true) {
                        if (temp > 0 && temp < 13) {
                            time = [temp, '00', 'AM', that.preview(i, words)];
                            times.push(time);
                        }
                    }
                } else if (braid.search('pm', words[i], true) !== false) {
                    var temp = words[i];
                    temp = temp.slice(0, temp.length - 2);
                    temp = parseInt(temp);
                    if (isNaN(temp) !== true) {
                        if (temp > 0 && temp < 13) {
                            time = [temp, '00', 'PM', that.preview(i, words)];
                            times.push(time);
                        }
                    }
                }
            }
        }
        return times;
    };

    //****************************************************************************************************************************************
    //***************************************************EMOTIONS*****************************************************************************
    //****************************************************************************************************************************************
    this.emotion = {};

    this.emotion.negativeWords = ['terrible', 'horrible', 'evil', 'die', 'dick', 'bitch', 'fucked', 'stupid', 'idiot', 'dumb', 'noob', 'shit', 'vain', 'n00b', 'dickhead', 'cocksucker', 'disgusting', 'slut'];
    this.emotion.negativeWordsB = ['fuck', 'shit', 'kill', 'rape', 'hate', 'hating'];
    this.emotion.positiveWords = ['happy', 'good', 'great', 'amazing', 'awesome', 'wonderful', 'brilliant', 'smart'];
    this.emotion.positiveWordsB = ['love', 'like', 'want', "<3", 'kiss'];
    this.emotion.subjects = ["she's", "you", "him", "her", "it", "this", "he's", "shes", "hes", "your", "you're", "ur", "they're", "their", "theyre"];

    //these are negative phrases
    this.emotion.negComb = [
        ['fuck', 'off'],
        ['go', 'away'],
        ['go', 'cry'],
        ['go', 'and']
    ];
    //that can be seperated by
    this.emotion.negCombSep = ['and', 'it', '&'];

    //these are positive phrases
    this.emotion.posComb = [
        ['thank', 'you'],
        ['thanks', 'a', 'million'],
        ['happy', 'birthday'],
        ['happy', 'thanksgiving'],
        ['merry', 'christmas'],
        ['happy', 'holidays'],
        ['good', 'day'],
        ['oh', 'cool']
    ];
    //that can be seperated by
    this.emotion.posCombSep = ['for', 'and', '&'];

    this.emotion.findEmotions = function(words) {
        var negative = 0;
        var positive = 0;
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].split(/[.,!?]+/);
            words[i] = words[i][0];
            for (var e = 0; e < that.emotion.negativeWords.length; e++) {
                var negWord = that.emotion.negativeWords[e];
                if (words[i].search(negWord) !== -1) { //word [i] === negativeword
                    for (var z = 0; z < that.emotion.subjects.length; z++) {
                        if (words[i - 1] !== undefined) {
                            if (words[i - 1] === that.emotion.subjects[z]) {
                                negative++;
                            }
                        }
                        if (words[i - 2] !== undefined) {
                            if (words[i - 2] === that.emotion.subjects[z]) {
                                negative++;
                            }
                        }
                    }
                }
            }
        }
        for (var i = 0; i < words.length; i++) {
            for (var e = 0; e < that.emotion.negativeWordsB.length; e++) {
                var negWord = that.emotion.negativeWordsB[e];
                if (words[i].search(negWord) !== -1) { //word [i] === negativeword
                    for (var z = 0; z < that.emotion.subjects.length; z++) {
                        if (words[i + 1] !== undefined) {
                            if (words[i + 1] === that.emotion.subjects[z]) {
                                negative++;
                            }
                        }
                        if (words[i + 2] !== undefined) {
                            if (words[i + 2] === that.emotion.subjects[z]) {
                                negative++;
                            }
                        }
                    }
                }
            }
        }

        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].split(/[.,!?]+/);
            words[i] = words[i][0];
            for (var e = 0; e < that.emotion.positiveWords.length; e++) {
                var posWord = that.emotion.positiveWords[e];
                if (words[i].search(posWord) !== -1) { //word [i] === negativeword
                    for (var z = 0; z < that.emotion.subjects.length; z++) {
                        if (words[i - 1] !== undefined) {
                            if (words[i - 1] === that.emotion.subjects[z]) {
                                positive++;
                            }
                        }
                        if (words[i - 2] !== undefined) {
                            if (words[i - 2] === that.emotion.subjects[z]) {
                                positive++;
                            }
                        }
                    }
                }
            }
        }

        for (var i = 0; i < words.length; i++) {
            for (var e = 0; e < that.emotion.positiveWordsB.length; e++) {
                var posWord = that.emotion.positiveWordsB[e];
                if (words[i].search(posWord) !== -1) { //word [i] === negativeword
                    for (var z = 0; z < that.emotion.subjects.length; z++) {
                        if (words[i + 1] !== undefined) {
                            if (words[i + 1] === that.emotion.subjects[z]) {
                                positive++;
                            }
                        }
                        if (words[i + 2] !== undefined) {
                            if (words[i + 2] === that.emotion.subjects[z]) {
                                positive++;
                            }
                        }
                    }
                }
            }
        }
        for (var i = 0; i < words.length; i++) {
            for (var x = 0; x < that.emotion.negComb.length; x++) {
                var trueCount = 0;
                var lengthX = that.emotion.negComb[x].length;
                var pos = 0;
                for (var z = i; z < (i + lengthX); z++) {
                    if (words[z] === that.emotion.negComb[x][pos]) {
                        trueCount++;
                    } else {
                        for (var c = 0; c < that.emotion.negCombSep.length; c++) {
                            if (words[z] === that.emotion.negCombSep[c]) {
                                if (words[z + 1] === that.emotion.negComb[x][pos]) {
                                    trueCount++;
                                }
                            }
                        }
                    }
                    pos++;
                }

                if (trueCount === lengthX) {
                    negative++;

                }
            }
        }

        for (var i = 0; i < words.length; i++) {
            for (var x = 0; x < that.emotion.posComb.length; x++) {
                var trueCount = 0;
                var lengthX = that.emotion.posComb[x].length;
                var pos = 0;
                for (var z = i; z < (i + lengthX); z++) {
                    if (words[z] === that.emotion.posComb[x][pos]) {
                        trueCount++;
                    } else {
                        for (var c = 0; c < that.emotion.posCombSep.length; c++) {
                            if (words[z] === that.emotion.posCombSep[c]) {
                                if (words[z + 1] === that.emotion.posComb[x][pos]) {
                                    trueCount++;
                                }
                            }
                        }
                    }
                    pos++;
                }

                if (trueCount === lengthX) {
                    positive++;

                }
            }
        }

        if (negative === positive) {
            return "neutral or unknown";
        } else if (negative > positive) {
            return "negative";
        } else {
            return "positive";
        }

    };


    //FOR SNIPPETS OF TEXT****************************************************************************************************************
    this.preview = function(pos, words) {

        var stringX = "";
        var cpos = -10;
        for (var i = (pos - 6); i < (pos + 6); i++) {
            stringX += " " + words[i];
        }

        stringX = braid.replace(stringX, " undefined@w@@n@  @w@");
        stringX = stringX.slice(1, stringX.length);
        return stringX;
    };
    //***********************************************************************************************************************************


    //****************************************************************************************************************************************
    //***************************************************PHONE NUMS***************************************************************************
    //****************************************************************************************************************************************
    this.phone = {};

    this.phone.areaCodeLength = 3; // Hard code this assumption for now

    // IMPORTANT: This function makes the assumption that there is always 3 digits in an area code
    this.phone.formatPhoneNumber = function(number) {
        var formattedNumber = number.slice(number.length - 7, number.length - 4) + "-" +
            number.slice(number.length - 4, number.length);

        formattedNumber = "(" + number.slice(number.length - (that.phone.areaCodeLength + 7), number.length - 7) + ") " +
            formattedNumber;

        if (number.length > (that.phone.areaCodeLength + 7)) {
            formattedNumber = "+" + number.slice(0, number.length - (that.phone.areaCodeLength + 7)) +
                " " + formattedNumber;
        }
        return formattedNumber;
    };

    this.phone.findPhones = function(words) {
        var phones = [],
            currWord = null;

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
            currWord = that.removeCharacters(["-", "(", ")"], words[i]);

            if (phoneRegexp.test(currWord)) {
                /* At this point the word is thought to be a phone number.
                   If the current word is only of length 7 it's required that the previous word
                   is the area code, assuming there is a previous word. */
                if (i > 0 && currWord.length === 7) {
                    var areaCode = that.removeCharacters(["(", ")"], words[i - 1]);
                    if (areaCodeRegExp.test(areaCode)) {
                        currWord = areaCode + currWord;

                        /* At this point the current word and previous word make up the area code
                           and phone number.
                           Check whether the 2 words back represents the country code */
                        if (i > 1) {
                            var countryCode = that.removeCharacters("+", words[i - 2]);
                            if (countryCodeRegExp.test(countryCode)) {
                                currWord = countryCode + currWord;
                            }
                        }
                    }
                    /* If the current word is not length 7, it's possible that the current word contains
                   both the phone number and area code and the previous word is the country code.
                   Once again, this is assuming that the areaCode length is 3 */
                } else if (i > 0 && currWord.length === (that.phone.areaCodeLength + 7)) {
                    var countryCode = that.removeCharacters("+", words[i - 1]);
                    if (countryCodeRegExp.test(countryCode)) {
                        currWord = countryCode + currWord;
                    }
                }

                /* We needed the phoneRegex to accept a minimum of 7 digits in case the preceding words
                   made up the area code and possibly the country code, but if at this point there is
                   not at least 7 digits plus the areaCodeLength in the currWord then it is not likely
                   a phone number */
                if (currWord.length >= (7 + that.phone.areaCodeLength)) {
                    phones.push([that.phone.formatPhoneNumber(currWord), that.preview(i, words)]);
                }
            }
        }
        return phones;
    };

    //****************************************************************************************************************************************
    //***************************************************SPAM CHECKER*************************************************************************
    //****************************************************************************************************************************************
    this.spam = {};
    this.spam.vowCount = function(str) {
        var matches = str.match(/[aeiou]/gi);
        var count = matches ? matches.length : 0;
        return count;
    };
    this.spam.conCount = function(str) {
        var matches = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
        var count = matches ? matches.length : 0;
        return count;
    };
    this.spam.specCount = function(str) {
        var matches = str.match(/[1234567890@#$%^&*();]/gi);
        var count = matches ? matches.length : 0;
        return count;
    };
    this.spam.isSpam = function(words) {
        var spam = false;
        //average word length
        var totalL = 0;
        for (var i = 0; i < words.length; i++) {
            totalL += words[i].length;
        }
        var avg = (totalL / words.length);
        if (avg + 15 >= 5.1 && avg - 15 <= 5.1) {} else {
            spam = true;
        }

        var vowelCount = 0;
        var conCount = 0;
        var specCount = 0;

        for (var i = 0; i < words.length; i++) {
            vowelCount += that.spam.vowCount(words[i]);
            conCount += that.spam.conCount(words[i]);
            specCount += that.spam.specCount(words[i]);
        }
        if (vowelCount >= conCount) {
            spam = true;
        } else if (specCount > vowelCount) {
            spam = true;
        }

        var giveortake = conCount / 7;
        if (words.length > 3) {
            if (vowelCount + giveortake >= (conCount / 1.9) && vowelCount - giveortake <= (conCount / 1.9)) {} else {
                spam = true;
            }
        } else if (words.length > 2) {
            if (vowelCount + giveortake >= (conCount / 1.4) && vowelCount - giveortake <= (conCount / 1.4)) {} else {
                spam = true;
            }
        } else {
            giveortake = conCount / 3;
            if (vowelCount + giveortake >= (conCount) && vowelCount - giveortake <= (conCount)) {} else {
                spam = true;
            }
        }
        var chars = [];
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            for (var e = 0; e < word.length; e++) {
                var isThere = false;
                for (var z = 0; z < chars.length; z++) {
                    if (chars[z] === word[e]) {
                        isThere = true;
                    }
                }

                if (isThere === false) {
                    chars.push(word[e]);
                }

            }

        }

        var uniquechars = chars.length;

        if (uniquechars + (words.length / 7) < (words.length)) {
            spam = true;
        }
        var useablechars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            word = word.split(/[.?! ]+/);
            word = word[0];
            var currentLoc = 0;
            while (currentLoc < word.length - 2) {
                for (var e = currentLoc + 1; e < word.length; e++) {
                    var isunuseable = true;
                    for (var a = 0; a < useablechars.length; a++) {
                        if (word[currentLoc] === useablechars[a]) {
                            isunuseable = false;
                        }
                    }

                    if (isunuseable === false) {
                        if (word[e] === word[currentLoc]) {
                            if (word[e + 1] === word[currentLoc + 1]) {
                                if (word[e + 2] === word[currentLoc + 2]) {
                                    spam = true;
                                }
                            }
                        }
                    } else {
                        break;
                    }

                }
                currentLoc++;
            }


        }


        return spam;

    };


    //****************************************************************************************************************************************
    //***************************************************LINKS********************************************************************************
    //****************************************************************************************************************************************

    this.link = {};


    this.link.findLinks = function(words) {
        var links = [];

        for (var i = 0; i < words.length; i++) {
            var word = words[i].replace(new RegExp(/[()!]/g), ""); // replaces every bracket ')' or '(' and every '!' with an empty character
            if (/^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i.test(word)) {
                links.push([word, that.preview(i, words)]);
            } else if (word.indexOf('@') == -1 && word.indexOf('://') == -1) {
                for (var j = 0; j < TLDS.length; j++) {
                    if (word.indexOf('.' + TLDS[j]) != -1) {
                        links.push([word, that.preview(i, words)]);
                        break;
                    }
                }
            }
        }

        var finalArray = [];
        for (var i = 0; i < links.length; i++) {
            if (links[i][0][links[i][0].length - 1] === "." || links[i][0][links[i][0].length - 1] === "?") {
                finalArray.push([links[i][0].slice(0, (links[i][0].length - 1)), links[i][1]]); //removes . and ?
            } else {
                finalArray.push(links[i]);
            }
        }

        return finalArray;

    };


    //****************************************************************************************************************************************
    //***************************************************EMAILS*******************************************************************************
    //****************************************************************************************************************************************



    this.email = {};
    this.email.findEmails = function(words) {
        var emails = [], match = "";

        for (var i = 0; i < words.length; i++) {
            var word = words[i].split(/[\,\|\(\)\?]/g);
            for (var j = 0; j < word.length; j++) {
            	var temp = word[j].replace(new RegExp(/[()!]/g), ""); // replaces every bracket ')' or '(' and every '!' with an empty character
	            temp = braid.replace(temp,",@wa@");
	            if (EMAIL_RGX.test(temp)) {
                    match = temp.match(EMAIL_RGX)[0];
                    emails.push([match, that.preview(i,words)]);
	            }
            }
        }

        return emails;

    };


    //****************************************************************************************************************************************
    //***************************************************HASHTAGS*****************************************************************************
    //****************************************************************************************************************************************



    this.hashtags = {};
    this.hashtags.findHashtags = function(words) {
        var hashtags = [], match = "";

        for (var i = 0; i < words.length; i++) {
        	if (/^#([a-z0-9][a-z0-9\-_]*)\b/i.test(words[i])) {
        		match = words[i].match(/^#([a-z0-9][a-z0-9\-_]*)\b/i)[0];
                hashtags.push([match, that.preview(i,words)]);
	        }
        }

        return hashtags;
    };


    //****************************************************************************************************************************************
    //***************************************************ALIASES******************************************************************************
    //****************************************************************************************************************************************



    this.aliases = {};
    this.aliases.findAliases = function(words) {
        var aliases = [], match = "";

        for (var i = 0; i < words.length; i++) {
        	if (/^(@[a-z0-9][a-z0-9\-_]*)\b/i.test(words[i])) {
        		match = words[i].match(/^(@[a-z0-9][a-z0-9\-_]*)\b/i)[0];
                aliases.push([match, that.preview(i,words)]);
	        }
        }

        return aliases;
    };


    //****************************************************************************************************************************************
    //***************************************************PLACES*******************************************************************************
    //****************************************************************************************************************************************



    this.places = {};
    this.places.falsePlaces = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "His", "Hers", "Who", "Whom", "Whose"];
    this.places.findPlaces = function(words) {
        var places = [];

        for (var i = 0; i < words.length; i++) {

            //clean up
            words[i] = words[i].replace(new RegExp(/[()!,]/g), "");
            //end clean up

            if (words[i] === "at" || words[i] === "in" || words[i] === "near" || (words[i] === "close" && words[i + 1] === "to")) {
                var word = [];
                var j = 1;
                while (words[i + j] !== 'at' && words[i + j] !== 'in' && words[i + j] !== 'near' && !/^.*(\.|\,|\?|\!)+$/.test(words[i + j - 1]) && i + j < words.length) {
                    var temp = words[i + j].replace(/[\,\.]/, '');
                    if (/^[A-Z](.*)$/.test(temp)) {
                        if (i + 4 > (i + j)) {
                            word.push(temp);
                        }
                    }
                    j++;
                }
                if (word.length > 0 && word.length < 3) {
                    var isFalsePlace = false;
                    // console.log(word);

                    //make sure place is not an invalid location
                    for (var y = 0; y < word.length; y++) {
                        for (var x = 0; x < that.places.falsePlaces.length; x++) {
                            if (word[y] === that.places.falsePlaces[x]) {
                                isFalsePlace = true;
                            } else if (word[y].length < 2) {
                                isFalsePlace = true;
                            }
                        }
                    }
                    if (isFalsePlace === false) {
                        places.push([word.join(' '), that.preview(i, words)]);
                    }
                }
                i += j - 1;
            }
        }

        return places;

    };


    this.init = function(data) {
        //turn into array of words
        var lowercaseData = data.toLowerCase();

        that.text.wordCount = lowercaseData.split(/[ ]+/).length - 1;

        var linkWords = lowercaseData.split(/[ \n]+/); //for link finding and (third part of date)
        var linkWordsCasesensitive = data.split(/[ \n]+/);

        lowercaseData = lowercaseData.split(/[\n ]+/);


        for (var i = 0; i < lowercaseData.length; i++) {
            lowercaseData[i] = braid.replace(lowercaseData[i], " @w@@n@,@w@" + '@n@"@w@');
            lowercaseData[i] = lowercaseData[i].replace("?", "");
        }
        var words = lowercaseData;


        //go

        var dates = that.date.findDates(words, linkWords);
        if (dates !== []) {
            that.addToObj(dates, "dates");
        }

        var times = that.time.findTimes(words);
        if (times !== []) {
            that.addToObj(times, "times");
        }

        var phones = that.phone.findPhones(words);
        if (phones !== []) {
            that.addToObj(phones, "phones");
        }

        var emotions = that.emotion.findEmotions(words);
        if (emotions !== []) {
            that.addToObj(emotions, "emotions");
        }

        var links = that.link.findLinks(linkWords);
        if (links !== []) {
            that.addToObj(links, "links");
        }

        var emails = that.email.findEmails(linkWordsCasesensitive);
        if (emails !== []) {
            that.addToObj(emails, "emails");
        }

        var places = that.places.findPlaces(linkWordsCasesensitive);
        if (places !== []) {
            that.addToObj(places, "places");
        }

        var hashtags = that.hashtags.findHashtags(linkWordsCasesensitive);
        if (hashtags !== []) {
            that.addToObj(hashtags, "hashtags");
        }

        var aliases = that.aliases.findAliases(linkWordsCasesensitive);
        if (aliases !== []) {
            that.addToObj(aliases, "aliases");
        }

        var spam = that.spam.isSpam(words);
        that.addToObj(spam, "spam");


        var readingTime = that.text.readingTime(that.text.wordCount);
        if (readingTime !== []) {
            that.addToObj(readingTime, "readingTime");
        }

    };

    var that = this;




};
