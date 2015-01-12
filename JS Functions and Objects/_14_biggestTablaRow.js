'use strict';

function solve(arr) {
	var maxSum;
	var maxSumArray = [];
	var foundData = false;

	for (var i = 0; i < arr.length; i++) {
		var line = arr[i];

		var pattern = /<td>(.*?)<\/td>/igm;
		var result;
		var sum = undefined;
		var sumArray = [];

		while (( result = pattern.exec(line)) !== null) {
			if (! isNaN(Number(result[1]))) {
				if (sum !== undefined) {
					sum += Number(result[1]);
				} else {
					sum = Number(result[1]);
				}
				
				sumArray.push(result[1]);
				foundData = true;
			}

		}

		if (maxSum === undefined || sum > maxSum) {
			maxSum = sum;
			maxSumArray = sumArray.slice();
		};

	};

	var resultStr = '';
	
	if (foundData) {
		resultStr = maxSum + " = " + maxSumArray[0];
		for (var i = 1; i < maxSumArray.length; i++) {
			resultStr += ' + ' + maxSumArray[i];
		};
	} else {
		resultStr = 'no data';
	};
	
	console.log(resultStr);
	return resultStr;
	
}

solve(['<table>', '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>', '<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>', '<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>', '<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>', '<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>', '</table>']);
solve(['<table>', '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>', '<tr><td>Sofia</td><td>-12850</td><td>-560</td><td>-20833</td></tr>', '<tr><td>Rousse</td><td>-7</td><td>-50000.0</td><td>-</td></tr>', '<tr><td>Bourgas</td><td>-25000</td><td>-25000</td><td>-</td></tr>', '</table>']);
solve(['<table>', '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>', '<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>', '</table>']);
