'use strict';

evenNumber(3);
evenNumber(127);
evenNumber(588);

function evenNumber(number) {
	if (number % 2) {
		console.log('false');
	} else {
		console.log('true');		
	}
}
