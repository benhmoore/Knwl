knwl.units = {};
knwl.units.list = {
	'g': {
		name: 'grams'
	},
	'lbs': {
		name: 'pounds'
	},
	'mg': {
		name: 'mg'
	},
	'kg': {
		name: 'kg'
	},
	'cal': {
		name: 'calories'
	},
	'oz' : {
		name: 'ounces'
	},
	"°C": {
		name: 'celcius'
	},
	'mL': {
		name: 'milliliter'
	},
	'ms': {
		name: 'milliseconds'
	},
	's': {
		name: 'seconds'
	},
	'min': {
		name: 'minutes'
	},
	'hrs': {
		name: 'hours'
	},
	'wks': {
		name: 'weeks'
	},
	'yrs': {
		name: 'years'
	},
	'bpm': {
		name: 'beats per minute'
	},
	'in': {
		name: 'inches'
	},
	'ft': {
		name: 'feet'
	},
	'm': {
		name: 'meters'
	},
	'cm': {
		name: 'centimeters'
	},
	'mm': {
		name: 'millimeters'
	}
};
knwl.units.findUnits = function() {
	var units = [];
	var words = knwl.words.linkWordsCasesensitive;
	for (var ii = 0; ii < words.length; ii++) {
		var word = words[ii].replace(/[?!.,\(\)\[\]]/g, '');
		var shouldAdd = false;
		var unitName = '';
		if (knwl.units.list[word] !== undefined) {
			shouldAdd = true;
			unitName = knwl.units.list[word].name;
		} else {
			for (var key in knwl.units.list) {
				if (knwl.units.list[key].name === word || knwl.units.list[key].name + 's' === word) {
					shouldAdd = true;
					unitName = knwl.units.list[key].name;
					break;
				}
			}
		}
		if (shouldAdd === true) {
			var unitObj = {
				unit: unitName,
				value: 0,
				preview: knwl.tasks.preview(ii),
				found: ii
			};
			
			if (words[ii - 1] !== undefined) {
				if (!(parseInt(words[ii - 1])) === false) {
					unitObj.value = parseInt(words[ii - 1]);
					units.push(unitObj);
				}
			}
			
		}
	}
	return units;
};
knwl.parserList.units = {
	calls: knwl.units.findUnits
};