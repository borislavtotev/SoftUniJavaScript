'use strict';

function concerts(arr) {
	var results = {};
	
	for (var i = 0; i < arr.length; i++) {
		var inputs = arr[i].split('|');
		var band = inputs[0].trim();
		var town = inputs[1].trim();
		var venue = inputs[3].trim();

		if (Object.keys(results).indexOf(town) == -1) {
			var bands = [];
			bands.push(band);
			var townProp = {};
			townProp[venue] = bands;
			results[town] = townProp;
		} else {
			if (Object.keys(results[town]).indexOf(venue) == -1) {
				results[town][venue] = [band];
			} else {
				if (results[town][venue].indexOf(band) == -1) {
					results[town][venue].push(band);
					results[town][venue] = results[town][venue].sort();
				}
			}
		}
	};

	var newResults = {};
	var towns = Object.keys(results).sort();

	for (var i = 0; i < towns.length; i++) {
		var townProperties = {};
		var vanues = Object.keys(results[towns[i]]).sort();
		for (var j = 0; j < vanues.length; j++) {
			townProperties[vanues[j]] = results[towns[i]][vanues[j]];
		};
		newResults[towns[i]] = townProperties;
	};

	console.log(JSON.stringify(newResults));
}

concerts(['ZZ Top | London | 2-Aug-2014 | Wembley Stadium', 'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium', 'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium', 'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium', 'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium', 'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium', 'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium', 'Helloween | London | 28-Jul-2014 | Wembley Stadium', 'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium', 'Metallica | London | 03-Oct-2014 | Olympic Stadium', 'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium', 'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium']);

