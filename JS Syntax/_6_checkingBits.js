'use strinct';

bitChecker(333);
bitChecker(425);
bitChecker(2567564754);

function bitChecker(number) {
	var numberBitString = number.toString(2);
	//console.log(numberBitString);

	if (numberBitString[numberBitString.length - 4] == 1) {
		console.log('true');
	} else {
		console.log('false');
	};

}
