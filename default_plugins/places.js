/* Place Parser */
function Places(knwl) {
  
  this.languages = {
    'english': true,
  };
  
  this.countryList = [
    {"name":"Afghanistan","code":"AF"}
    ,
    {"name":"Albanie","code":"AL"}
    ,
    {"name":"Algérie","code":"DZ"}
    ,
    {"name":"Samoa Américaines","code":"AS"}
    ,
    {"name":"Andorre","code":"AD"}
    ,
    {"name":"Angola","code":"AO"}
    ,
    {"name":"Anguilla","code":"AI"}
    ,
    {"name":"Antarctique","code":"AQ"}
    ,
    {"name":"Antigua-Et-Barbuda","code":"AG"}
    ,
    {"name":"Argentine","code":"AR"}
    ,
    {"name":"Arménie","code":"AM"}
    ,
    {"name":"Aruba","code":"AW"}
    ,
    {"name":"Australie","code":"AU"}
    ,
    {"name":"Autriche","code":"AT"}
    ,
    {"name":"Azerbaïdjan","code":"AZ"}
    ,
    {"name":"Bahamas","code":"BS"}
    ,
    {"name":"Bahreïn","code":"BH"}
    ,
    {"name":"Bangladesh","code":"BD"}
    ,
    {"name":"Barbade","code":"BB"}
    ,
    {"name":"Bélarus","code":"BY"}
    ,
    {"name":"Belgique","code":"BE"}
    ,
    {"name":"Belize","code":"BZ"}
    ,
    {"name":"Bénin","code":"BJ"}
    ,
    {"name":"Bermudes","code":"BM"}
    ,
    {"name":"Bhoutan","code":"BT"}
    ,
    {"name":"Bolivie, l'État Plurinational de","code":"BO"}
    ,
    {"name":"Bonaire, Saint-Eustache et Saba","code":"BQ"}
    ,
    {"name":"Bosnie-Herzégovine","code":"BA"}
    ,
    {"name":"Botswana","code":"BW"}
    ,
    {"name":"Bouvet, Île","code":"BV"}
    ,
    {"name":"Brésil","code":"BR"}
    ,
    {"name":"Océan Indien, Territoire Britannique de l'","code":"IO"}
    ,
    {"name":"Brunei Darussalam","code":"BN"}
    ,
    {"name":"Bulgarie","code":"BG"}
    ,
    {"name":"Burkina Faso","code":"BF"}
    ,
    {"name":"Burundi","code":"BI"}
    ,
    {"name":"Cambodge","code":"KH"}
    ,
    {"name":"Cameroun","code":"CM"}
    ,
    {"name":"Canada","code":"CA"}
    ,
    {"name":"Cap-Vert","code":"CV"}
    ,
    {"name":"Caïmans, Îles","code":"KY"}
    ,
    {"name":"Centrafricaine, République","code":"CF"}
    ,
    {"name":"Tchad","code":"TD"}
    ,
    {"name":"Chili","code":"CL"}
    ,
    {"name":"Chine","code":"CN"}
    ,
    {"name":"Christmas, Île","code":"CX"}
    ,
    {"name":"Cocos (Keeling), Îles","code":"CC"}
    ,
    {"name":"Colombie","code":"CO"}
    ,
    {"name":"Comores","code":"KM"}
    ,
    {"name":"Congo","code":"CG"}
    ,
    {"name":"Congo, la République Démocratique du","code":"CD"}
    ,
    {"name":"Cook, Îles","code":"CK"}
    ,
    {"name":"Costa Rica","code":"CR"}
    ,
    {"name":"Croatie","code":"HR"}
    ,
    {"name":"Cuba","code":"CU"}
    ,
    {"name":"Curaçao","code":"CW"}
    ,
    {"name":"Chypre","code":"CY"}
    ,
    {"name":"Tchèque, République","code":"CZ"}
    ,
    {"name":"Côte d'Ivoire","code":"CI"}
    ,
    {"name":"Danemark","code":"DK"}
    ,
    {"name":"Djibouti","code":"DJ"}
    ,
    {"name":"Dominique","code":"DM"}
    ,
    {"name":"Dominicaine, République","code":"DO"}
    ,
    {"name":"Équateur","code":"EC"}
    ,
    {"name":"Égypte","code":"EG"}
    ,
    {"name":"El Salvador","code":"SV"}
    ,
    {"name":"Guinée Équatoriale","code":"GQ"}
    ,
    {"name":"Érythrée","code":"ER"}
    ,
    {"name":"Estonie","code":"EE"}
    ,
    {"name":"Éthiopie","code":"ET"}
    ,
    {"name":"Falkland, Îles (Malvinas)","code":"FK"}
    ,
    {"name":"Féroé, Îles","code":"FO"}
    ,
    {"name":"Fidji","code":"FJ"}
    ,
    {"name":"Finlande","code":"FI"}
    ,
    {"name":"France","code":"FR"}
    ,
    {"name":"Guyane Française","code":"GF"}
    ,
    {"name":"Polynésie Française","code":"PF"}
    ,
    {"name":"Terres Australes Françaises","code":"TF"}
    ,
    {"name":"Gabon","code":"GA"}
    ,
    {"name":"Gambie","code":"GM"}
    ,
    {"name":"Géorgie","code":"GE"}
    ,
    {"name":"Allemagne","code":"DE"}
    ,
    {"name":"Ghana","code":"GH"}
    ,
    {"name":"Gibraltar","code":"GI"}
    ,
    {"name":"Grèce","code":"GR"}
    ,
    {"name":"Groenland","code":"GL"}
    ,
    {"name":"Grenade","code":"GD"}
    ,
    {"name":"Guadeloupe","code":"GP"}
    ,
    {"name":"Guam","code":"GU"}
    ,
    {"name":"Guatemala","code":"GT"}
    ,
    {"name":"Guernesey","code":"GG"}
    ,
    {"name":"Guinée","code":"GN"}
    ,
    {"name":"Guinée-Bissau","code":"GW"}
    ,
    {"name":"Guyana","code":"GY"}
    ,
    {"name":"Haïti","code":"HT"}
    ,
    {"name":"Heard-Et-Îles Macdonald, Île","code":"HM"}
    ,
    {"name":"Saint-Siège (État de la Cité du Vatican)","code":"VA"}
    ,
    {"name":"Honduras","code":"HN"}
    ,
    {"name":"Hong Kong","code":"HK"}
    ,
    {"name":"Hongrie","code":"HU"}
    ,
    {"name":"Islande","code":"IS"}
    ,
    {"name":"Inde","code":"IN"}
    ,
    {"name":"Indonésie","code":"ID"}
    ,
    {"name":"Iran, République Islamique d'","code":"IR"}
    ,
    {"name":"Iraq","code":"IQ"}
    ,
    {"name":"Irlande","code":"IE"}
    ,
    {"name":"Île de Man","code":"IM"}
    ,
    {"name":"Israël","code":"IL"}
    ,
    {"name":"Italie","code":"IT"}
    ,
    {"name":"Jamaïque","code":"JM"}
    ,
    {"name":"Japon","code":"JP"}
    ,
    {"name":"Jersey","code":"JE"}
    ,
    {"name":"Jordanie","code":"JO"}
    ,
    {"name":"Kazakhstan","code":"KZ"}
    ,
    {"name":"Kenya","code":"KE"}
    ,
    {"name":"Kiribati","code":"KI"}
    ,
    {"name":"Corée, République Populaire Démocratique de","code":"KP"}
    ,
    {"name":"Corée, République de","code":"KR"}
    ,
    {"name":"Koweït","code":"KW"}
    ,
    {"name":"Kirghizistan","code":"KG"}
    ,
    {"name":"Lao, République Démocratique Populaire","code":"LA"}
    ,
    {"name":"Lettonie","code":"LV"}
    ,
    {"name":"Liban","code":"LB"}
    ,
    {"name":"Lesotho","code":"LS"}
    ,
    {"name":"Libéria","code":"LR"}
    ,
    {"name":"Libye","code":"LY"}
    ,
    {"name":"Liechtenstein","code":"LI"}
    ,
    {"name":"Lituanie","code":"LT"}
    ,
    {"name":"Luxembourg","code":"LU"}
    ,
    {"name":"Macao","code":"MO"}
    ,
    {"name":"Macédoine, l'Ex-république Yougoslave de","code":"MK"}
    ,
    {"name":"Madagascar","code":"MG"}
    ,
    {"name":"Malawi","code":"MW"}
    ,
    {"name":"Malaisie","code":"MY"}
    ,
    {"name":"Maldives","code":"MV"}
    ,
    {"name":"Mali","code":"ML"}
    ,
    {"name":"Malte","code":"MT"}
    ,
    {"name":"Marshall, Îles","code":"MH"}
    ,
    {"name":"Martinique","code":"MQ"}
    ,
    {"name":"Mauritanie","code":"MR"}
    ,
    {"name":"Maurice","code":"MU"}
    ,
    {"name":"Mayotte","code":"YT"}
    ,
    {"name":"Mexique","code":"MX"}
    ,
    {"name":"Micronésie, États Fédérés de","code":"FM"}
    ,
    {"name":"Moldova, République de","code":"MD"}
    ,
    {"name":"Monaco","code":"MC"}
    ,
    {"name":"Mongolie","code":"MN"}
    ,
    {"name":"Monténégro","code":"ME"}
    ,
    {"name":"Montserrat","code":"MS"}
    ,
    {"name":"Maroc","code":"MA"}
    ,
    {"name":"Mozambique","code":"MZ"}
    ,
    {"name":"Myanmar","code":"MM"}
    ,
    {"name":"Namibie","code":"NA"}
    ,
    {"name":"Nauru","code":"NR"}
    ,
    {"name":"Népal","code":"NP"}
    ,
    {"name":"Pays-Bas","code":"NL"}
    ,
    {"name":"Nouvelle-Calédonie","code":"NC"}
    ,
    {"name":"Nouvelle-Zélande","code":"NZ"}
    ,
    {"name":"Nicaragua","code":"NI"}
    ,
    {"name":"Niger","code":"NE"}
    ,
    {"name":"Nigéria","code":"NG"}
    ,
    {"name":"Niué","code":"NU"}
    ,
    {"name":"Norfolk, Île","code":"NF"}
    ,
    {"name":"Mariannes du Nord, Îles","code":"MP"}
    ,
    {"name":"Norvège","code":"NO"}
    ,
    {"name":"Oman","code":"OM"}
    ,
    {"name":"Pakistan","code":"PK"}
    ,
    {"name":"Palaos","code":"PW"}
    ,
    {"name":"Palestine, État de","code":"PS"}
    ,
    {"name":"Panama","code":"PA"}
    ,
    {"name":"Papouasie-Nouvelle-Guinée","code":"PG"}
    ,
    {"name":"Paraguay","code":"PY"}
    ,
    {"name":"Pérou","code":"PE"}
    ,
    {"name":"Philippines","code":"PH"}
    ,
    {"name":"Pitcairn","code":"PN"}
    ,
    {"name":"Pologne","code":"PL"}
    ,
    {"name":"Portugal","code":"PT"}
    ,
    {"name":"Porto Rico","code":"PR"}
    ,
    {"name":"Qatar","code":"QA"}
    ,
    {"name":"Roumanie","code":"RO"}
    ,
    {"name":"Russie, Fédération de","code":"RU"}
    ,
    {"name":"Rwanda","code":"RW"}
    ,
    {"name":"Réunion","code":"RE"}
    ,
    {"name":"Saint-Barthélemy","code":"BL"}
    ,
    {"name":"Sainte-Hélène, Ascension et Tristan da Cunha","code":"SH"}
    ,
    {"name":"Saint-Kitts-Et-Nevis","code":"KN"}
    ,
    {"name":"Sainte-Lucie","code":"LC"}
    ,
    {"name":"Saint-Martin(partie Française)","code":"MF"}
    ,
    {"name":"Saint-Pierre-Et-Miquelon","code":"PM"}
    ,
    {"name":"Saint-Vincent-Et-Les Grenadines","code":"VC"}
    ,
    {"name":"Samoa","code":"WS"}
    ,
    {"name":"Saint-Marin","code":"SM"}
    ,
    {"name":"Sao Tomé-Et-Principe","code":"ST"}
    ,
    {"name":"Arabie Saoudite","code":"SA"}
    ,
    {"name":"Sénégal","code":"SN"}
    ,
    {"name":"Serbie","code":"RS"}
    ,
    {"name":"Seychelles","code":"SC"}
    ,
    {"name":"Sierra Leone","code":"SL"}
    ,
    {"name":"Singapour","code":"SG"}
    ,
    {"name":"Saint-Martin (Partie Néerlandaise)","code":"SX"}
    ,
    {"name":"Slovaquie","code":"SK"}
    ,
    {"name":"Slovénie","code":"SI"}
    ,
    {"name":"Salomon, Îles","code":"SB"}
    ,
    {"name":"Somalie","code":"SO"}
    ,
    {"name":"Afrique du Sud","code":"ZA"}
    ,
    {"name":"Géorgie du Sud-Et-Les Îles Sandwich du Sud","code":"GS"}
    ,
    {"name":"Soudan du Sud","code":"SS"}
    ,
    {"name":"Espagne","code":"ES"}
    ,
    {"name":"Sri Lanka","code":"LK"}
    ,
    {"name":"Soudan","code":"SD"}
    ,
    {"name":"Suriname","code":"SR"}
    ,
    {"name":"Svalbard et Île Jan Mayen","code":"SJ"}
    ,
    {"name":"Swaziland","code":"SZ"}
    ,
    {"name":"Suède","code":"SE"}
    ,
    {"name":"Suisse","code":"CH"}
    ,
    {"name":"Syrienne, République Arabe","code":"SY"}
    ,
    {"name":"Taïwan, Province de Chine","code":"TW"}
    ,
    {"name":"Tadjikistan","code":"TJ"}
    ,
    {"name":"Tanzanie, République-Unie de","code":"TZ"}
    ,
    {"name":"Thaïlande","code":"TH"}
    ,
    {"name":"Timor-Leste","code":"TL"}
    ,
    {"name":"Togo","code":"TG"}
    ,
    {"name":"Tokelau","code":"TK"}
    ,
    {"name":"Tonga","code":"TO"}
    ,
    {"name":"Trinité-Et-Tobago","code":"TT"}
    ,
    {"name":"Tunisie","code":"TN"}
    ,
    {"name":"Turquie","code":"TR"}
    ,
    {"name":"Turkménistan","code":"TM"}
    ,
    {"name":"Turks-Et-Caïcos, Îles","code":"TC"}
    ,
    {"name":"Tuvalu","code":"TV"}
    ,
    {"name":"Ouganda","code":"UG"}
    ,
    {"name":"Ukraine","code":"UA"}
    ,
    {"name":"Émirats Arabes Unis","code":"AE"}
    ,
    {"name":"Royaume-Uni","code":"GB"}
    ,
    {"name":"États-Unis","code":"US"}
    ,
    {"name":"Îles Mineures Éloignées des États-Unis","code":"UM"}
    ,
    {"name":"Uruguay","code":"UY"}
    ,
    {"name":"Ouzbékistan","code":"UZ"}
    ,
    {"name":"Vanuatu","code":"VU"}
    ,
    {"name":"Venezuela, République Bolivarienne du","code":"VE"}
    ,
    {"name":"Viet Nam","code":"VN"}
    ,
    {"name":"Îles Vierges Britanniques","code":"VG"}
    ,
    {"name":"Îles Vierges des États-Unis","code":"VI"}
    ,
    {"name":"Wallis et Futuna","code":"WF"}
    ,
    {"name":"Sahara Occidental","code":"EH"}
    ,
    {"name":"Yémen","code":"YE"}
    ,
    {"name":"Zambie","code":"ZM"}
    ,
    {"name":"Zimbabwe","code":"ZW"}
    ,
    {"name":"Åland, Îles","code":"AX"}
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
