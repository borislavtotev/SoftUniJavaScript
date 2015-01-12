'use strict';

function findMaxSequence(arr) {
	var seqNum = 1;
	var maxSeq = 1;
	var maxSeqElement = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] === arr[i - 1]) {
			seqNum++;
			if (i == (arr.length - 1) && (maxSeq <= seqNum)) {
				maxSeqElement = arr[i - 1];
				maxSeq = seqNum;
			};
		} else {
			if (maxSeq <= seqNum) {
				maxSeqElement = arr[i - 1];
				maxSeq = seqNum;
			};
			seqNum = 1;
		}
	}

	var result = [];

	for (var i = 0; i < maxSeq; i++) {
		result[i] = maxSeqElement;
	};

	console.log(result);
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);

