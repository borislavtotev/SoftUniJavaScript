'use strict';

function sumTwoHugeNumbers(value) {
	var number1 = value[0].split('');
	var number2 = value[1].split('');
	number1.reverse();
	number2.reverse();
	
	var maxlength = number1.length;

	if (maxlength < number2.length) {
		maxlength = number2.length;
	}

	var result = '';
	var rest = 0;
	
	for (var i = 0; i < maxlength; i++) {
		var digit1 = parseInt(number1[i]) || 0;
		var digit2 = parseInt(number2[i]) || 0;
		var sum = digit1 + digit2 + rest;
		var sumStr = sum.toString();
		
		if (sumStr.length == 2) {
			rest = parseInt(sumStr[0]);
			result = sumStr[1] + result;
		} else {
			rest = 0;
			result = sumStr + result;
		}
	};
	console.log(result);
}

sumTwoHugeNumbers(['155', '65']);
sumTwoHugeNumbers(['123456789', '123456789']);
sumTwoHugeNumbers(['887987345974539', '4582796427862587']);
sumTwoHugeNumbers(['347135713985789531798031509832579382573195807', '817651358763158761358796358971685973163314321']);
