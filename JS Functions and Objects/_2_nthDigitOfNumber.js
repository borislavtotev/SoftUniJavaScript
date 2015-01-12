'use strict';

function findNthDigit(arr) {
	var n = arr[0];
	var num = arr[1];
	num = Math.floor(num);

	if (( Math.abs(num) / Math.pow(10,n-1) ) > 1 ) {
		var result = ( Math.abs(num) / Math.pow(10,n-1) ) ;
		result = Math.floor(result % 10);
		return result;
	} else {
		return undefined;
		
	}
	
}

function checkNthDigit(arr) {
	if (findNthDigit(arr) != undefined) {
		console.log(findNthDigit(arr));
	} else {
		console.log('The number doesn’t have ' + arr[0] + ' digits');	
	}	
}

checkNthDigit([1, 6]);
checkNthDigit([2, -55]);
checkNthDigit([6, 923456]);
checkNthDigit([3, 1451.78]);
checkNthDigit([6, 888.88]);