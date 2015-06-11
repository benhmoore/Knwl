/* Place Parser */
function Places(knwl) {
  
  this.languages = {
    'english': true,
  };
  
  this.countryList = [
    {"name":"Afghanistan","code":"AF"}
    ,
    {"name":"Albania","code":"AL"}
    ,
    {"name":"Algeria","code":"DZ"}
    ,
    {"name":"American Samoa","code":"AS"}
    ,
    {"name":"Andorra","code":"AD"}
    ,
    {"name":"Angola","code":"AO"}
    ,
    {"name":"Anguilla","code":"AI"}
    ,
    {"name":"Antarctica","code":"AQ"}
    ,
    {"name":"Antigua and Barbuda","code":"AG"}
    ,
    {"name":"Argentina","code":"AR"}
    ,
    {"name":"Armenia","code":"AM"}
    ,
    {"name":"Aruba","code":"AW"}
    ,
    {"name":"Australia","code":"AU"}
    ,
    {"name":"Austria","code":"AT"}
    ,
    {"name":"Azerbaijan","code":"AZ"}
    ,
    {"name":"Bahamas","code":"BS"}
    ,
    {"name":"Bahrain","code":"BH"}
    ,
    {"name":"Bangladesh","code":"BD"}
    ,
    {"name":"Barbados","code":"BB"}
    ,
    {"name":"Belarus","code":"BY"}
    ,
    {"name":"Belgium","code":"BE"}
    ,
    {"name":"Belize","code":"BZ"}
    ,
    {"name":"Benin","code":"BJ"}
    ,
    {"name":"Bermuda","code":"BM"}
    ,
    {"name":"Bhutan","code":"BT"}
    ,
    {"name":"Bolivia, Plurinational State of","code":"BO"}
    ,
    {"name":"Bonaire, Sint Eustatius and Saba","code":"BQ"}
    ,
    {"name":"Bosnia and Herzegovina","code":"BA"}
    ,
    {"name":"Botswana","code":"BW"}
    ,
    {"name":"Bouvet Island","code":"BV"}
    ,
    {"name":"Brazil","code":"BR"}
    ,
    {"name":"British Indian Ocean Territory","code":"IO"}
    ,
    {"name":"Brunei Darussalam","code":"BN"}
    ,
    {"name":"Bulgaria","code":"BG"}
    ,
    {"name":"Burkina Faso","code":"BF"}
    ,
    {"name":"Burundi","code":"BI"}
    ,
    {"name":"Cambodia","code":"KH"}
    ,
    {"name":"Cameroon","code":"CM"}
    ,
    {"name":"Canada","code":"CA"}
    ,
    {"name":"Cape Verde","code":"CV"}
    ,
    {"name":"Cayman Islands","code":"KY"}
    ,
    {"name":"Central African Republic","code":"CF"}
    ,
    {"name":"Chad","code":"TD"}
    ,
    {"name":"Chile","code":"CL"}
    ,
    {"name":"China","code":"CN"}
    ,
    {"name":"Christmas Island","code":"CX"}
    ,
    {"name":"Cocos (Keeling) Islands","code":"CC"}
    ,
    {"name":"Colombia","code":"CO"}
    ,
    {"name":"Comoros","code":"KM"}
    ,
    {"name":"Congo","code":"CG"}
    ,
    {"name":"Congo, the Democratic Republic of the","code":"CD"}
    ,
    {"name":"Cook Islands","code":"CK"}
    ,
    {"name":"Costa Rica","code":"CR"}
    ,
    {"name":"Croatia","code":"HR"}
    ,
    {"name":"Cuba","code":"CU"}
    ,
    {"name":"Curaçao","code":"CW"}
    ,
    {"name":"Cyprus","code":"CY"}
    ,
    {"name":"Czech Republic","code":"CZ"}
    ,
    {"name":"Côte d'Ivoire","code":"CI"}
    ,
    {"name":"Denmark","code":"DK"}
    ,
    {"name":"Djibouti","code":"DJ"}
    ,
    {"name":"Dominica","code":"DM"}
    ,
    {"name":"Dominican Republic","code":"DO"}
    ,
    {"name":"Ecuador","code":"EC"}
    ,
    {"name":"Egypt","code":"EG"}
    ,
    {"name":"El Salvador","code":"SV"}
    ,
    {"name":"Equatorial Guinea","code":"GQ"}
    ,
    {"name":"Eritrea","code":"ER"}
    ,
    {"name":"Estonia","code":"EE"}
    ,
    {"name":"Ethiopia","code":"ET"}
    ,
    {"name":"Falkland Islands (Malvinas)","code":"FK"}
    ,
    {"name":"Faroe Islands","code":"FO"}
    ,
    {"name":"Fiji","code":"FJ"}
    ,
    {"name":"Finland","code":"FI"}
    ,
    {"name":"France","code":"FR"}
    ,
    {"name":"French Guiana","code":"GF"}
    ,
    {"name":"French Polynesia","code":"PF"}
    ,
    {"name":"French Southern Territories","code":"TF"}
    ,
    {"name":"Gabon","code":"GA"}
    ,
    {"name":"Gambia","code":"GM"}
    ,
    {"name":"Georgia","code":"GE"}
    ,
    {"name":"Germany","code":"DE"}
    ,
    {"name":"Ghana","code":"GH"}
    ,
    {"name":"Gibraltar","code":"GI"}
    ,
    {"name":"Greece","code":"GR"}
    ,
    {"name":"Greenland","code":"GL"}
    ,
    {"name":"Grenada","code":"GD"}
    ,
    {"name":"Guadeloupe","code":"GP"}
    ,
    {"name":"Guam","code":"GU"}
    ,
    {"name":"Guatemala","code":"GT"}
    ,
    {"name":"Guernsey","code":"GG"}
    ,
    {"name":"Guinea","code":"GN"}
    ,
    {"name":"Guinea-Bissau","code":"GW"}
    ,
    {"name":"Guyana","code":"GY"}
    ,
    {"name":"Haiti","code":"HT"}
    ,
    {"name":"Heard Island and McDonald Islands","code":"HM"}
    ,
    {"name":"Holy See (Vatican City State)","code":"VA"}
    ,
    {"name":"Honduras","code":"HN"}
    ,
    {"name":"Hong Kong","code":"HK"}
    ,
    {"name":"Hungary","code":"HU"}
    ,
    {"name":"Iceland","code":"IS"}
    ,
    {"name":"India","code":"IN"}
    ,
    {"name":"Indonesia","code":"ID"}
    ,
    {"name":"Iran, Islamic Republic of","code":"IR"}
    ,
    {"name":"Iraq","code":"IQ"}
    ,
    {"name":"Ireland","code":"IE"}
    ,
    {"name":"Isle of Man","code":"IM"}
    ,
    {"name":"Israel","code":"IL"}
    ,
    {"name":"Italy","code":"IT"}
    ,
    {"name":"Jamaica","code":"JM"}
    ,
    {"name":"Japan","code":"JP"}
    ,
    {"name":"Jersey","code":"JE"}
    ,
    {"name":"Jordan","code":"JO"}
    ,
    {"name":"Kazakhstan","code":"KZ"}
    ,
    {"name":"Kenya","code":"KE"}
    ,
    {"name":"Kiribati","code":"KI"}
    ,
    {"name":"Korea, Democratic People's Republic of","code":"KP"}
    ,
    {"name":"Korea, Republic of","code":"KR"}
    ,
    {"name":"Kuwait","code":"KW"}
    ,
    {"name":"Kyrgyzstan","code":"KG"}
    ,
    {"name":"Lao People's Democratic Republic","code":"LA"}
    ,
    {"name":"Latvia","code":"LV"}
    ,
    {"name":"Lebanon","code":"LB"}
    ,
    {"name":"Lesotho","code":"LS"}
    ,
    {"name":"Liberia","code":"LR"}
    ,
    {"name":"Libya","code":"LY"}
    ,
    {"name":"Liechtenstein","code":"LI"}
    ,
    {"name":"Lithuania","code":"LT"}
    ,
    {"name":"Luxembourg","code":"LU"}
    ,
    {"name":"Macao","code":"MO"}
    ,
    {"name":"Macedonia, the Former Yugoslav Republic of","code":"MK"}
    ,
    {"name":"Madagascar","code":"MG"}
    ,
    {"name":"Malawi","code":"MW"}
    ,
    {"name":"Malaysia","code":"MY"}
    ,
    {"name":"Maldives","code":"MV"}
    ,
    {"name":"Mali","code":"ML"}
    ,
    {"name":"Malta","code":"MT"}
    ,
    {"name":"Marshall Islands","code":"MH"}
    ,
    {"name":"Martinique","code":"MQ"}
    ,
    {"name":"Mauritania","code":"MR"}
    ,
    {"name":"Mauritius","code":"MU"}
    ,
    {"name":"Mayotte","code":"YT"}
    ,
    {"name":"Mexico","code":"MX"}
    ,
    {"name":"Micronesia, Federated States of","code":"FM"}
    ,
    {"name":"Moldova, Republic of","code":"MD"}
    ,
    {"name":"Monaco","code":"MC"}
    ,
    {"name":"Mongolia","code":"MN"}
    ,
    {"name":"Montenegro","code":"ME"}
    ,
    {"name":"Montserrat","code":"MS"}
    ,
    {"name":"Morocco","code":"MA"}
    ,
    {"name":"Mozambique","code":"MZ"}
    ,
    {"name":"Myanmar","code":"MM"}
    ,
    {"name":"Namibia","code":"NA"}
    ,
    {"name":"Nauru","code":"NR"}
    ,
    {"name":"Nepal","code":"NP"}
    ,
    {"name":"Netherlands","code":"NL"}
    ,
    {"name":"New Caledonia","code":"NC"}
    ,
    {"name":"New Zealand","code":"NZ"}
    ,
    {"name":"Nicaragua","code":"NI"}
    ,
    {"name":"Niger","code":"NE"}
    ,
    {"name":"Nigeria","code":"NG"}
    ,
    {"name":"Niue","code":"NU"}
    ,
    {"name":"Norfolk Island","code":"NF"}
    ,
    {"name":"Northern Mariana Islands","code":"MP"}
    ,
    {"name":"Norway","code":"NO"}
    ,
    {"name":"Oman","code":"OM"}
    ,
    {"name":"Pakistan","code":"PK"}
    ,
    {"name":"Palau","code":"PW"}
    ,
    {"name":"Palestine, State of","code":"PS"}
    ,
    {"name":"Panama","code":"PA"}
    ,
    {"name":"Papua New Guinea","code":"PG"}
    ,
    {"name":"Paraguay","code":"PY"}
    ,
    {"name":"Peru","code":"PE"}
    ,
    {"name":"Philippines","code":"PH"}
    ,
    {"name":"Pitcairn","code":"PN"}
    ,
    {"name":"Poland","code":"PL"}
    ,
    {"name":"Portugal","code":"PT"}
    ,
    {"name":"Puerto Rico","code":"PR"}
    ,
    {"name":"Qatar","code":"QA"}
    ,
    {"name":"Romania","code":"RO"}
    ,
    {"name":"Russian Federation","code":"RU"}
    ,
    {"name":"Rwanda","code":"RW"}
    ,
    {"name":"Réunion","code":"RE"}
    ,
    {"name":"Saint Barthélemy","code":"BL"}
    ,
    {"name":"Saint Helena, Ascension and Tristan da Cunha","code":"SH"}
    ,
    {"name":"Saint Kitts and Nevis","code":"KN"}
    ,
    {"name":"Saint Lucia","code":"LC"}
    ,
    {"name":"Saint Martin (French part)","code":"MF"}
    ,
    {"name":"Saint Pierre and Miquelon","code":"PM"}
    ,
    {"name":"Saint Vincent and the Grenadines","code":"VC"}
    ,
    {"name":"Samoa","code":"WS"}
    ,
    {"name":"San Marino","code":"SM"}
    ,
    {"name":"Sao Tome and Principe","code":"ST"}
    ,
    {"name":"Saudi Arabia","code":"SA"}
    ,
    {"name":"Senegal","code":"SN"}
    ,
    {"name":"Serbia","code":"RS"}
    ,
    {"name":"Seychelles","code":"SC"}
    ,
    {"name":"Sierra Leone","code":"SL"}
    ,
    {"name":"Singapore","code":"SG"}
    ,
    {"name":"Sint Maarten (Dutch part)","code":"SX"}
    ,
    {"name":"Slovakia","code":"SK"}
    ,
    {"name":"Slovenia","code":"SI"}
    ,
    {"name":"Solomon Islands","code":"SB"}
    ,
    {"name":"Somalia","code":"SO"}
    ,
    {"name":"South Africa","code":"ZA"}
    ,
    {"name":"South Georgia and the South Sandwich Islands","code":"GS"}
    ,
    {"name":"South Sudan","code":"SS"}
    ,
    {"name":"Spain","code":"ES"}
    ,
    {"name":"Sri Lanka","code":"LK"}
    ,
    {"name":"Sudan","code":"SD"}
    ,
    {"name":"Suriname","code":"SR"}
    ,
    {"name":"Svalbard and Jan Mayen","code":"SJ"}
    ,
    {"name":"Swaziland","code":"SZ"}
    ,
    {"name":"Sweden","code":"SE"}
    ,
    {"name":"Switzerland","code":"CH"}
    ,
    {"name":"Syrian Arab Republic","code":"SY"}
    ,
    {"name":"Taiwan, Province of China","code":"TW"}
    ,
    {"name":"Tajikistan","code":"TJ"}
    ,
    {"name":"Tanzania, United Republic of","code":"TZ"}
    ,
    {"name":"Thailand","code":"TH"}
    ,
    {"name":"Timor-Leste","code":"TL"}
    ,
    {"name":"Togo","code":"TG"}
    ,
    {"name":"Tokelau","code":"TK"}
    ,
    {"name":"Tonga","code":"TO"}
    ,
    {"name":"Trinidad and Tobago","code":"TT"}
    ,
    {"name":"Tunisia","code":"TN"}
    ,
    {"name":"Turkey","code":"TR"}
    ,
    {"name":"Turkmenistan","code":"TM"}
    ,
    {"name":"Turks and Caicos Islands","code":"TC"}
    ,
    {"name":"Tuvalu","code":"TV"}
    ,
    {"name":"Uganda","code":"UG"}
    ,
    {"name":"Ukraine","code":"UA"}
    ,
    {"name":"United Arab Emirates","code":"AE"}
    ,
    {"name":"United Kingdom","code":"GB"}
    ,
    {"name":"United States","code":"US"}
    ,
    {"name":"United States Minor Outlying Islands","code":"UM"}
    ,
    {"name":"Uruguay","code":"UY"}
    ,
    {"name":"Uzbekistan","code":"UZ"}
    ,
    {"name":"Vanuatu","code":"VU"}
    ,
    {"name":"Venezuela, Bolivarian Republic of","code":"VE"}
    ,
    {"name":"Viet Nam","code":"VN"}
    ,
    {"name":"Virgin Islands, British","code":"VG"}
    ,
    {"name":"Virgin Islands, U.S.","code":"VI"}
    ,
    {"name":"Wallis and Futuna","code":"WF"}
    ,
    {"name":"Western Sahara","code":"EH"}
    ,
    {"name":"Yemen","code":"YE"}
    ,
    {"name":"Zambia","code":"ZM"}
    ,
    {"name":"Zimbabwe","code":"ZW"}
    ,
    {"name":"Åland Islands","code":"AX"}
  ];

  this.falsePlaces = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'His', 'He', 'Her', 'Hers', 'Who', 'Whom', 'Whose', 'PM', 'AM', 'The'];
  this.triggers = [['at'], ['near'], ['close', 'to'], ['above'], ['below'], ['to'], ['leaving'], ['arriving', 'at']];
  this.calls = function() {
      var words = knwl.words.get('linkWordsCasesensitive');
      var triggers = places.triggers;
      var results = [];
  
      for (var i = 0; i < words.length; i++) {
          words[i] = words[i].replace(/[()!,.]/g, ''); //clean up
          var isMatch = false;
          for (var ee = 0; ee < triggers.length; ee++) {
              if (words[i] === triggers[ee][0]) {
                  if (triggers[ee].length > 0) {
                      var pos = i + 1;
                      isMatch = true;
                      for (var zz = 1; zz < triggers[ee].length; zz++) {
                          if (words[pos] !== triggers[ee][zz]) {
                              isMatch = false;
                          }
                          pos++;
                      }
                  } else {
                      isMatch = true;
                  }
              }
          }
          if (isMatch) {
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
  
                  //make sure place is not an invalid location
                  for (var y = 0; y < word.length; y++) {
                      for (var x = 0; x < places.falsePlaces.length; x++) {
                          if (word[y] === places.falsePlaces[x]) {
                              isFalsePlace = true;
                          } else if (word[y].length < 2) {
                              isFalsePlace = true;
                          }
                      }
                      word[y] = word[y].replace(/['’?!]/g, '');
                  }
                  if (isFalsePlace === false) {
                      var placeObj = {
                          place: word.join(' '),
                          preview: knwl.tasks.preview(i),
                          found: i
                      };
                      results.push(placeObj);
                  }
              }
              i += j - 1;
          }
          
          if (isMatch === false || isFalsePlace === true) {
            for (var ee = 0; ee < places.countryList.length; ee++) {
              var country = places.countryList[ee].name.split(' ');
              if (country[0].toLowerCase() === words[i].replace(/[()!,.]/g, '').toLowerCase()) {
                var isCountry = true;
                for (var zz = 0; zz < country.length; zz++) {
                  if (country[zz].length === 0) {
                    break;
                  }
                  if (words[i + zz] === undefined) {
                    isCountry = false;
                    break;
                  }
                  if (country[zz].toLowerCase() !== words[i + zz].replace(/[()!,.]/g, '').toLowerCase()) {
                    isCountry = false;
                    break;
                  }
                }
                if (isCountry) {
                  var placeObj = {
                      place: places.countryList[ee].name,
                      preview: knwl.tasks.preview(i),
                      found: i
                  };
                  results.push(placeObj);
                }
              }
            }
          }
      }
  
      return results;
  
  };
  
  var places = this;

};
module.exports = Places;
