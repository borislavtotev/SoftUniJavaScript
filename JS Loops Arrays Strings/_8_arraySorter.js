'use strict';

function sortArray(arr) {
	for (var i = 0; i < arr.length; i++) {
		var minValue = Number.MAX_VALUE;
		var minValueIndex = 0;
		
		for (var j = i; j <  arr.length; j++) {
			if (arr[j]<=minValue) {
				minValue = arr[j];
				minValueIndex = j;
			}
		};
		
		arr = arr.slice(0,minValueIndex).concat(arr.slice(minValueIndex+1,arr.length));
		arr.unshift(minValue);
	};
	console.log(arr.reverse());
}

sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
