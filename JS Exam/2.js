'use strict';

function solve2(arr) {
	var results = [];
	
	for (var i=0; i < arr.length; i++) {
		results[i] = [];
		for (var j=0; j <  arr[i].length; j++) {
		   results[i][j] = undefined;
		};
	};

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (( typeof (arr[i + 1]) !== 'undefined' && typeof (arr[i+1][j]) !== 'undefined' && arr[i][j].toLowerCase() === arr[i+1][j].toLowerCase())) {
				if (( typeof (arr[i+1][j + 1]) !== 'undefined' && arr[i][j].toLowerCase() === arr[i+1][j + 1].toLowerCase())) {
					if (( typeof (arr[i+1][j - 1]) !== 'undefined' && arr[i][j].toLowerCase() === arr[i+1][j - 1].toLowerCase())) {
						if (( typeof (arr[i + 2]) !== 'undefined' && typeof (arr[i+2][j]) !== 'undefined' && arr[i][j].toLowerCase() === arr[i+2][j].toLowerCase())) {
							results[i] = results[i] || [];
							results[i + 1] = results[i + 1] || [];
							results[i + 2] = results[i + 2] || [];

							results[i][j] = arr[i][j];
							results[i+1][j] = arr[i+1][j];
							results[i+1][j + 1] = arr[i+1][j + 1];
							results[i+1][j - 1] = arr[i+1][j - 1];
							results[i+2][j] = arr[i+2][j];
						}
					}
				}
			}
		};
	};

	for (var i = 0; i < arr.length; i++) {
		var resultStr = '';
		for (var j = 0; j < arr[i].length; j++) {
			if ( typeof (results[i][j]) === 'undefined') {
				resultStr += arr[i][j];
			}
		};
		console.log(resultStr);
	};
	//console.log(results);
}

solve2(['ab**l5', 'bBb*555', 'absh*5', 'ttHHH', 'ttth']);
