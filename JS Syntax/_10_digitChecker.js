'use strict';

checkDigit(1235);
checkDigit(25368);
checkDigit(123456);

function checkDigit(number) {
	if (parseInt(number / 100) % 10 == 3) {
		console.log('true');
	} else {
		console.log('false');
	}
}
