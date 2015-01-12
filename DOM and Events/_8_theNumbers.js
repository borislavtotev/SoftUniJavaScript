'use strict';

function numbers(arr) {
	var input = arr[0];
	var inputNumbers = [];
	var pattern = /(\d+)/igm;
	var result;
	while (( result = pattern.exec(input)) !== null) {
		var num = Number(result[1]).toString(16);
		num = num.toUpperCase();
		var pad = "0000";
		num = "0x" + pad.substring(0,4-num.length) + num;
		inputNumbers.push(num);
	}
	console.log(inputNumbers.join("-"));
}


numbers(["5tffwj(//*7837xzc2---34rlxXP%$"]);
