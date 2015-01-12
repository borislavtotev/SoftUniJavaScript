'use strict';

function solve3(arr) {
	for (var i = 0; i < arr.length; i++) {
		var results = {};
		var inputs = arr[i].split('&');
		//console.log(inputs);
		for (var j = 0; j < inputs.length; j++) {
			var pairs = inputs[j].split('=');
			var key = pairs[0];
			var value = pairs[1];
			//console.log(key + ',' + value);

			for (var k = 0; k < pairs.length; k++) {
				if (pairs[k].indexOf('%20') != -1) {
					var pattern = /%20/igm;
					while (pattern.test(pairs[k])) {
						pairs[k] = pairs[k].replace(pattern, ' ');
					}
					pairs[k] = pairs[k].trim();
				}
				//console.log(pairs[k]);

				if (pairs[k].indexOf('+') != -1) {
					var pattern = /\+/igm;
					while (pattern.test(pairs[k])) {
						pairs[k] = pairs[k].replace(pattern, ' ');
					}
					pairs[k] = pairs[k].trim();
				}
				//console.log(pairs[k]);

				var pattern = /[\s]{2,}/igm;
				while (pattern.test(pairs[k])) {
					pairs[k] = pairs[k].replace(pattern, ' ');
				}
				//console.log(pairs[k]);

				if (pairs[0].indexOf('?') != -1) {
					pairs[0] = pairs[0].substring(pairs[0].indexOf('?') + 1, pairs[0].length);
				}
				//console.log(pairs[k]);
			};
			if (Object.keys(results).indexOf(pairs[0]) == -1) {
				results[pairs[0]] = [pairs[1]];
			} else {
				results[pairs[0]].push(pairs[1]);
			}
		};

		var resultStr = '';
		for (var key in Object.keys(results)) {
			resultStr += Object.keys(results)[key] + '=[' + results[Object.keys(results)[key]][0];
			var properties = results[Object.keys(results)[key]];
			for (var m = 1; m < properties.length; m++) {
				resultStr+=', '+properties[m];
			};
			resultStr += ']';
		};
		console.log(resultStr);
	};
}

solve3(['foo=%20foo&value=+val&foo+=5+%20+203', 'foo=poo%20&value=valley&dog=wow+', 'url=https://softuni.bg/trainings/coursesinstances/details/1070', 'https://softuni.bg/trainings?trainer=nakov&course=oop&course=php']);
