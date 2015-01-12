'use strict';

function triangle(arr) {
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		newArr[i] = newArr[i] || [];

		for (var j = 0; j < arr[i].length; j++) {
			if (( typeof (arr[i + 1]) != 'undefined') && ( typeof (arr[i+1][j - 1]) != 'undefined') && ( typeof (arr[i+1][j + 1]) != 'undefined') && (arr[i][j] === arr[i+1][j - 1]) && (arr[i][j] === arr[i+1][j]) && (arr[i][j] === arr[i+1][j + 1])) {
				newArr[i + 1] = newArr[i + 1] || [];
				newArr[i][j] = '*';
				newArr[i+1][j] = '*';
				newArr[i+1][j - 1] = '*';
				newArr[i+1][j + 1] = '*';
			} else {
				newArr[i][j] = newArr[i][j] || arr[i][j];
			};
		};
	};

	for (var i = 0; i < newArr.length; i++) {
		console.log(newArr[i].join(''));
	};
}

triangle(['abcdexgh', 'bbbdxxxh', 'abcxxxxx']);
