'use strict';

function findMostFreqNum(arr) {
	var result = {};
	var maxTimes = 1;
		
	for (var i=0; i < arr.length; i++) {
		if (Object.keys(result).indexOf(arr[i].toString()) == -1) {
			result[arr[i]]=1;			
		} else {
			result[arr[i]]+=1;
			if (maxTimes<result[arr[i]]) {
				maxTimes=result[arr[i]];	
			}				
		}
	};
	
	for (var i=0; i < arr.length; i++) {
		if (result[arr[i]] == maxTimes) {
			console.log(arr[i] + ' (' + result[arr[i]] + ' times)');
			break;
		}
	};
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
