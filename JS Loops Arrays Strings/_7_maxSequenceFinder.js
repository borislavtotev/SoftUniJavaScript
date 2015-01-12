'use strict';

function findMaxSequence(arr) {
	var increasingArray = [];
	var maxIncresingArray = [];
	
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) {
			increasingArray.push(arr[i]);
			if (i == (arr.length - 1) && (increasingArray.length >= maxIncresingArray.length)) {
				maxIncresingArray = increasingArray;
			};
		} else {
			if (increasingArray.length >= maxIncresingArray.length) {
				maxIncresingArray = increasingArray;
			};
			increasingArray = [];
			increasingArray.push(arr[i]);
		}
	}

	if (maxIncresingArray.length > 1) {
		console.log(maxIncresingArray);
	} else{
		console.log('no');
	};

}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);
