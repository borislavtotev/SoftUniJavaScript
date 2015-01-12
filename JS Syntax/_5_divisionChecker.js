'use strict';

divisionBy3(12);
divisionBy3(188);
divisionBy3(591);

function divisionBy3(number) {
	var sumDigits = 0;
	var digitNumber = number.toString().length;

	for (var i = 0; i < digitNumber; i += 1) {
		sumDigits += Number(number.toString()[i]);
	};

	if (sumDigits % 3 == 0) {
		console.log('the number is divided by 3 without remainder');
	} else {
		console.log('the number is not divided by 3 without remainder');
	};
}
