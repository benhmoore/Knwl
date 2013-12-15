var braid={};braid.vnumber=.02;braid.version=function(){console.log(braid.vnumber)};braid.search=function(e,t,n,r){if(n!==undefined){if(n===false){t=t.toLowerCase();e=e.toLowerCase();if(r!==false){t=braid.replace(t,"aeiouyAEIOUY@wa@");e=braid.replace(e,"aeiouyAEIOUY@wa@")}}}var i=[];var t=t.split("");var e=e.split("");var s;var o=0;for(var u=0;u<t.length;u++){if(t[u]===e[0]){for(var a=0;a<e.length;a++){s=u+a;if(t[s]===e[a]){if(a===e.length-1){var f=s-e.length+1;i.push(f);o++}}}}}if(o===0){return false}else{return i}};braid.replace=function(e,t){var n=t;var t={};t.full=n;var r=false,i=false;t.groups=t.full.split("@n@");if(e instanceof Array){var s=[];r=true;for(var o=0;o<e.length;o++){var u=e[o];if(u===parseInt(u)){u=u.toString();i=true}for(var a=0;a<t.groups.length;a++){var f=t.groups[a];var l=braid.search("@wa@",f,true);if(l===false){var c=f.split("@w@");var h=c[0];var p=c[1];u=deiwo3replace(h,p,u)}else{var c=f.split("@wa@");var h=c[0];if(braid.search("!NUM!",h,true)!==false){h="12345678910"}if(braid.search("!VOWEL!",h,true)!==false){h="aeiouyAEIOUY"}if(braid.search("!SPECIAL!",h,true)!==false){h="~`@#$%^&*()_+-={}|[]:;<>"}h=h.split("");var p=c[1];for(var d=0;d<h.length;d++){u=deiwo3replace(h[d],p,u)}}}if(i===true){u=parseInt(u)}s.push(u);i=false}}else{if(e===parseInt(e)){e=e.toString();i=true}for(var a=0;a<t.groups.length;a++){var f=t.groups[a];var l=braid.search("@wa@",f,true);if(l===false){var c=f.split("@w@");var h=c[0];var p=c[1];e=deiwo3replace(h,p,e)}else{var c=f.split("@wa@");var h=c[0];if(braid.search("!NUM!",h,true)!==false){h="12345678910"}if(braid.search("!VOWEL!",h,true)!==false){h="aeiouyAEIOUY"}h=h.split("");var p=c[1];for(var d=0;d<h.length;d++){e=deiwo3replace(h[d],p,e)}}}if(i===true){e=parseInt(e)}}if(r===false){return e}else{return s}};var deiwo3replace=function(e,t,n){return n.replace(new RegExp(e,"g"),t)};braid.help=function(e){if(!e){console.log('Incorrect santex. Make sure to use the first parameter as a keyword. Example: braid.help("braid.replace"). \n|TIP: You can use this function in the console for quick help.')}else{if(braid.search("replace",e,false)!==false){console.log("*SANTEX FOR braid.replace()*\n\n"+"|RETURNS: braid.replace() will return the output after completing actions on the string.\n"+"|SANTEX: var VARIABLE = braid.replace('this is a test','this@w@that@n@is@w@was');\n"+"|OUTPUT: 'that was a test'\n"+"|NOTE: Using the parameter 'key' (second parameter), '@w@' is used as 'with', so 'apple@w@grape' means 'replace apple with grape'.\n"+"| '@n@ is used as 'next.' It is used to seperate instructions, as follows, 'apple@w@grape@n@cherry@w@bannana'.\n"+"| You can use '@wa@' instead of '@w@' to replace all instances of each character with another, like so, 'aeiouy@wa@#'\n"+"| If the string were 'abcdefghijklmnopqrstuvwxyz', this would output '#bcd#fgh#jklmn#pqrst#vwx#z'.\n"+"| *Input can be an Array, Integer, or String.\n")}else if(braid.search("search",e,false)!==false){console.log("*SANTEX FOR braid.search()*\n\n"+"|RETURNS: if braid.search() finds a match to query, it will return the positions of all matches in an array.\n"+"| If it does not find a match, it will return *false*.\n"+"|SANTEX: var VARIABLE = braid.search('query','complete string',false,false);\n"+"|OUTPUT: *false*\n"+"|NOTE: The third (3) parameter should be *true* or *false*, if *true* the search will be case sensitive, if *false* the search will not.\n| Setting this to false will also search by just consonants, instead of both consonants and vowels.\n"+"| The fourth (4) parameter can be set to *false* to disable the removal of vowels when searching with the third (3) parameter equal to *true*.\n")}else{console.log("~No help available on this topic. Please make sure to check your spelling.\nSANTEX: braid.help('braid.complementary'), etc.\n    ")}}}


function Knwl() {
    
    this.text = {};
    this.text.data = {};
    
    this.addToObj = function(data,name) {
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
            } else if (label === "spam") {
                return that.text.data.spam;
            } else {
                alert("KNWL ERROR: Data type not correct, correct types: 'emotion','phones','dates','times','links','emails'");  
            }
        } else {
            alert("KNWL ERROR: Data type not correct, correct types: 'emotion','phones','dates','times','links','emails'"); 
        }
        
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
    this.date.days = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd',
                    '24th','25th','26th','27th','28th','29th','30th','31st'];
    this.date.months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    this.date.monthAbbrs = ['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec'];
    this.date.holidays = [['thanksgiving'],['christmas'],['new','years'],['july','4th']];
    this.date.holidaysD = [[28,11],[25,12],[1,1],[4,7]];
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
    this.date.getMonth = function(word,type) {
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
    
    this.date.findDates = function(words,wordsWithPunc) { //returns "july 16th 1999" as "[7,16,1999, "preview"]"
        var dates = [];
        
        for (var i = 0; i < words.length; i++) {//cleanup
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
                                date = [month,day,year,that.preview(i,words)];
                            }
                        } else {
                            date = [month,day,that.date.dateObj.getFullYear(),that.preview(i,words)];
                        }
                    }
                    dates.push(date);
                }
            }
            
        }
        
        //for dates like "7/16/1999" two
        var date = [];
        for (var i = 0; i < words.length; i++) {
            var word = words[i].replace("(","");//remove parenth--- if they are present
            var word = word.replace(")","");//remove parenth--- if they are present
            var testDate = word.split("/");
            if (testDate.length === 3) {
                var isAllNums = 0;
                for (var z = 0; z < testDate.length; z++) {
                    if (!isNaN(testDate[z]) && testDate[z] !== "") {
                        isAllNums++;   
                    }
                }
                if (isAllNums === 3) {
                
                    var month = that.date.getMonth(testDate[0],'mdy');
                    var day = that.date.getDay(testDate[1]);
                    var year = parseInt(testDate[2]);
                    date = [month,day,year,that.preview(i,words)];
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
                if (month !== undefined && day !== undefined) {//make sure month and day defined
                if (words[i + 3] !== undefined) {//words[i + 3] === years
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
                date = [month,day,year,that.preview(i,words)];
                dates.push(date);
                }
                }//finish check if month and day defined
            }
        }//end for
        
        
        
        
        var date = [];
        for (var i = 0; i < words.length; i++) {//for dates like "thanksgiving", "chirstmas", or "new years"
            for (var e = 0; e < that.date.holidays.length; e++) {
                var curHol = that.date.holidays[e];
                var pos = i;
                if (words[pos] === curHol[0]) {
                for (var x = 0; x < curHol.length; x++) {
                if (words[pos] === curHol[x]) {
                    if (x === curHol.length - 1) {
                        if (that.date.dateObj.getMonth() <= that.date.holidaysD[e][1] + 1) {
                            date = [that.date.holidaysD[e][1],that.date.holidaysD[e][0],that.date.dateObj.getFullYear(),that.preview(i,words)];        
                        } else {
                            date = [that.date.holidaysD[e][1],that.date.holidaysD[e][0],that.date.dateObj.getFullYear() + 1,that.preview(i,words)]; 
                        }
                        
                        dates.push(date);
                    }
                }
                pos++;
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
                if (!isNaN(testTime[0]) && !isNaN(testTime[1])) {
                    if (testTime[0] > 0 && testTime[0] < 13) {
                        if (testTime[1] >= 0 && testTime[1] < 61) {
                            if (words[i + 1] === "pm") {
                                time = [testTime[0],testTime[1], "PM",that.preview(i,words)];
                                times.push(time);
                            } else if (words[i + 1] === "am") {
                                time = [testTime[0],testTime[1], "AM",that.preview(i,words)]; 
                                times.push(time);
                            } 
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
    
    this.emotion.negativeWords = ['terrible','horrible','evil','die','dick','bitch','fucked','stupid','idiot','dumb','noob','shit','vain','n00b','dickhead','cocksucker','disgusting','slut'];
     this.emotion.negativeWordsB = ['fuck','shit','kill','rape','hate','hating'];
    this.emotion.positiveWords = ['happy','good','great','amazing','awesome','wonderful','brilliant','smart'];
    this.emotion.positiveWordsB = ['love','like','want',"<3",'kiss'];
    this.emotion.subjects = ["she's","you","him","her","it","this","he's","shes","hes","your","you're","ur","they're","their","theyre"];
    
    //these are negative phrases
    this.emotion.negComb = [['fuck','off'],['go','away'],['go','cry'],['go','and']];
    //that can be seperated by
    this.emotion.negCombSep = ['and','it','&'];
    
    //these are positive phrases
    this.emotion.posComb = [['thank','you'],['thanks','a','million'],['happy','birthday'],['happy','thanksgiving'],['merry','christmas'],['happy','holidays'],['good','day'],['oh','cool']];
    //that can be seperated by
    this.emotion.posCombSep = ['for','and','&'];
    
    this.emotion.findEmotions = function(words) {
        var negative = 0;
        var positive = 0;
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].split(/[.,!?]+/);
            words[i] = words[i][0];
            for (var e = 0; e < that.emotion.negativeWords.length; e++) {
                var negWord = that.emotion.negativeWords[e];
                if (words[i].search(negWord) !== -1) {//word [i] === negativeword
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
                if (words[i].search(negWord) !== -1) {//word [i] === negativeword
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
                if (words[i].search(posWord) !== -1) {//word [i] === negativeword
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
                if (words[i].search(posWord) !== -1) {//word [i] === negativeword
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
                        for (var c = 0; c < that.emotion.negCombSep.length;c++) {
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
                        for (var c = 0; c < that.emotion.posCombSep.length;c++) {
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
    this.preview = function(pos,words) {
        
        var stringX = "";
        var cpos = -10;
        for (var i = (pos - 6); i < (pos + 6); i++) {
            stringX += " " + words[i];
        }
        
        stringX = braid.replace(stringX, " undefined@w@@n@  @w@");
        stringX = stringX.slice(1,stringX.length);
        return stringX;
    };
    //***********************************************************************************************************************************
    
    
    //****************************************************************************************************************************************
    //***************************************************PHONE NUMS***************************************************************************
    //****************************************************************************************************************************************
    this.phone = {};
    this.phone.findPhones = function(words) {
        var phones = [];
        
        var regexp = /^\d{10}$/;
        for (var i = 0; i < words.length; i++) {
            words[i] = braid.replace(words[i], "-@w@");
            words[i] = words[i].replace("(","");
            words[i] = words[i].replace(")","");
            if (regexp.test(words[i])) {
                phones.push([words[i],that.preview(i,words)]);    
            } else if (words[i].length === 11) {
                var testPhone = words[i].slice(1,words[i].length);
                if (regexp.test(testPhone)) {
                    phones.push([words[i],that.preview(i,words)]);
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
    		totalL+=words[i].length;
    	}
        var avg = (totalL/words.length);
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
        var useablechars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        for (var i = 0; i < words.length; i++) {
        	var word = words[i];
        	word = word.split(/[.?! ]+/);
        	word = word[0];
        	var currentLoc = 0;
        	while(currentLoc < word.length - 2) {
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
            
            //clean up
            words[i] = words[i].replace("(","");
            words[i] = words[i].replace(")","");
            words[i] = words[i].replace("!","");
            words[i] = braid.replace(words[i],",@wa@");
            //end clean up
            
            var word = words[i];
            if (/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(word)) {
                links.push([word, that.preview(i,words)]);
            }
        }
        
        var finalArray = [];
        for (var i = 0; i < links.length; i++) {
            if (links[i][0][links[i][0].length - 1] === "." || links[i][0][links[i][0].length - 1] === "?") {
               finalArray.push( [ links[i][0].slice(0, (links[i][0].length - 1) ), links[i][1] ] );//removes . and ? 
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
        var emails = [];
        
        for (var i = 0; i < words.length; i++) {
            
            //clean up
            words[i] = words[i].replace("(","");
            words[i] = words[i].replace(")","");
            words[i] = words[i].replace("!","");
            words[i] = braid.replace(words[i],",@wa@");
            //end clean up
            
            var word = words[i];
            if (/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/.test(word)) {
                emails.push([word,that.preview(i,words)]);
            }
        }
        
        return emails;
        
    };
    
    
    
    this.init = function(data) {
        //turn into array of words
        var lowercaseData = data.toLowerCase();
        
        that.text.wordCount = lowercaseData.split(/[ ]+/).length - 1;
        
        var linkWords = lowercaseData.split(/[ \n]+/);//for link finding and (third part of date)
        
        lowercaseData = lowercaseData.split(/[\n ]+/);
        
        
        for (var i = 0; i < lowercaseData.length; i++) {
            lowercaseData[i] = braid.replace(lowercaseData[i], " @w@@n@,@w@" + '@n@"@w@');
            lowercaseData[i] = lowercaseData[i].replace("?","");
        }
        var words = lowercaseData;
        
        
        //go
        
        var dates = that.date.findDates(words,linkWords);
        if (dates !== []) {
            that.addToObj(dates,"dates");   
        }
        
        var times = that.time.findTimes(words);
        if (times !== []) {
            that.addToObj(times,"times");   
        }
        
        var phones = that.phone.findPhones(words);
        if (phones !== []) {
            that.addToObj(phones,"phones");   
        }
        
        var emotions = that.emotion.findEmotions(words);
        if (emotions !== []) {
            that.addToObj(emotions,"emotions");   
        }
        
        var links = that.link.findLinks(linkWords);
        if (links !== []) {
            that.addToObj(links,"links");   
        }
        
        var emails = that.email.findEmails(linkWords);
        if (emails !== []) {
            that.addToObj(emails,"emails");   
        }
        
        var spam = that.spam.isSpam(words);
        that.addToObj(spam,"spam");   
        
        
        var readingTime = that.text.readingTime(that.text.wordCount);
        if (readingTime !== []) {
            that.addToObj(readingTime,"readingTime");   
        }
        
    };
    
    var that = this;
    
    
    
    
};
