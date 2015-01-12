'use strict';

function rotate(arr) {
	var pattern = /Rotate\((\d+)\)/igm;
	var degrees = pattern.exec(arr[0]);

	var maxIndex = 0;
	var elements = [];
	for (var i = 1; i < arr.length; i++) {
		elements.push(arr[i]);
		if (maxIndex < arr[i].length) {
			maxIndex = arr[i].length;
		}
	};

	var matrix = [];

	for (var k = 0; k < (degrees[1] / 90); k++) {
		for (var i = 0; i < elements.length; i++) {
			for (var j = 0; j < elements[i].length; j++) {
				if ( typeof (matrix[j]) === 'undefined') {
					matrix[j] = [];
					for (var l = 0; l < elements.length - i; l++) {
						matrix[j].push(' ');
					};
				}
				matrix[j][elements.length - 1 - i] = elements[i][j];
			};
		};
		//console.log(matrix);
		elements = matrix;
		matrix = [];
	};

	var result = elements[0].join('');
	for (var i = 1; i < elements.length; i++) {
		var newline = elements[i].join('');
		result += "\n" + newline;
	};
	//console.log(elements);
	console.log(result);
}

rotate(['Rotate(270)', 'hello', 'softuni', 'exam']);
