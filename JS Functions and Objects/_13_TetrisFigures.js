'use strict';

function solve(arr) {
	var result = {};
	result['I'] = 0;
	result['L'] = 0;
	result['J'] = 0;
	result['O'] = 0;
	result['Z'] = 0;
	result['S'] = 0;
	result['T'] = 0;			

	for (var i = 0; i < arr.length; i++) {
		var newLine = arr[i];
		for (var j = 0; j < newLine.length; j++) {
			var current = newLine[j];
			
			if (current === 'o') {
				if ( (typeof(arr[i+1]) !== 'undefined' && arr[i+1][j] === 'o') && (typeof(arr[i+2]) !== 'undefined' && arr[i+2][j] === 'o') && (typeof(arr[i+3]) !== 'undefined' && arr[i+3][j] === 'o') ) {
					result['I']+=1;
				}
				
				if ( (typeof(arr[i+1]) !== 'undefined' && arr[i+1][j] === 'o') && (typeof(arr[i+2]) !== 'undefined' && arr[i+2][j] === 'o') && (typeof(arr[i+2][j+1]) !== 'undefined' && arr[i+2][j+1] === 'o') ) {
					result['L']+=1;
				}
				
				if ( (typeof(arr[i+1]) !== 'undefined' && arr[i+1][j] === 'o') && (typeof(arr[i+2]) !== 'undefined' && arr[i+2][j] === 'o') && (typeof(arr[i+2][j-1]) !== 'undefined' && arr[i+2][j-1] === 'o') ) {
					result['J']+=1;
				}

				if ( (typeof(arr[i+1]) !== 'undefined' && arr[i+1][j] === 'o') && (typeof(arr[i+1][j+1]) !== 'undefined' && arr[i+1][j+1] === 'o') && (typeof(arr[i][j+1]) !== 'undefined' && arr[i][j+1] === 'o') ) {
					result['O']+=1;
				}

				if ( (typeof(arr[i][j+1]) !== 'undefined' && arr[i][j+1] === 'o') && (typeof(arr[i+1]) !== 'undefined' && typeof(arr[i+1][j+1]) !== 'undefined' && arr[i+1][j+1] === 'o') && (typeof(arr[i+1][j+2]) !== 'undefined' && arr[i+1][j+2] === 'o') ) {
					result['Z']+=1;
				}

				if ( (typeof(arr[i][j+1]) !== 'undefined' && arr[i][j+1] === 'o') && (typeof(arr[i+1]) !== 'undefined' && typeof(arr[i+1][j-1]) !== 'undefined' && arr[i+1][j-1] === 'o') && (typeof(arr[i+1]) !== 'undefined' && arr[i+1][j] === 'o') ) {
					result['S']+=1;
				}

				if ( (typeof(arr[i][j+1]) !== 'undefined' && arr[i][j+1] === 'o') && (typeof(arr[i+1]) !== 'undefined' && typeof(arr[i+1][j]) !== 'undefined' && arr[i+1][j] === 'o') && (typeof(arr[i][j-1]) !== 'undefined' && arr[i][j-1] === 'o') ) {
					result['T']+=1;
				}

			};
		};

	};
	
	var resultJSON = JSON.stringify(result);
	console.log(resultJSON);
	
	return resultJSON;

}

solve(['--o--o-', '--oo-oo', 'ooo-oo-', '-ooooo-', '---oo--']);

solve(['-oo', 'ooo', 'ooo']);
