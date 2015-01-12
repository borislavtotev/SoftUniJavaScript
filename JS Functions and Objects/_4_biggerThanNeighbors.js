'use strict';

function biggerThanNeighbors(index, arr) {
	if (index > arr.length - 1 || index < 0) {
		return undefined;		
	} else if (index == arr.length-1 || index == 0) {
		return 'only one neighbor';	
	} else {
		if (arr[index]>arr[index+1] && arr[index-1]<arr[index]) {
			return true;
		} else {
			return false;
		}
	}
}

function printResults(index, arr) {
	var result = biggerThanNeighbors(index,arr);
	
	switch (result) {
	case true:
		return 'bigger';
		break;
	case false:
		return 'not bigger';
		break;
	case 'only one neighbor':
		return 'only one neighbor';
		break;
	case undefined:
		return 'invalid index';
		break;
	}
}

console.log(printResults(2, [1, 2, 3, 3, 5]));
console.log(printResults(2, [1, 2, 5, 3, 4]));
console.log(printResults(5, [1, 2, 5, 3, 4]));
console.log(printResults(0, [1, 2, 5, 3, 4]));