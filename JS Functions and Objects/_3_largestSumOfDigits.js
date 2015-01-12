'use strict';

function findLargestBySumOfDigits(arr) {
	var maxSum = Number.MIN_VALUE;
	var result;

	if (arguments.length = 0) {
		return undefined;
	} else {
		for (var data in arr) {
			if (( typeof arr[data] === 'number') && (arr[data] % 1 === 0)) {
				if (maxSum < digitSum(arr[data])) {
					maxSum = digitSum(arr[data]);
					result = arr[data];
				}
			} else {
				return undefined;
			}
		}
		return result;
	}
}

function digitSum(arr) {
	var number = Math.abs(arr);
	var numberStr = number.toString();
	var sum = 0;

	for (var i = 0; i < numberStr.length; i++) {
		sum += parseInt(numberStr[i]);
	};
	return sum;
}

console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits(['hello']));
console.log(findLargestBySumOfDigits([5, 3.3]));
