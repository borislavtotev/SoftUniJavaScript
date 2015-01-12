'use strict';

function checkBrackets(str) {
	var strNumbers = str.replace(/\s*/igm, '');
	strNumbers = strNumbers.replace(/[^\d+\-*\/()]/igm, '2');

	try {
		eval(strNumbers);
		console.log('correct');
	} catch (e) {
		if ( e instanceof SyntaxError) {
			console.log('incorrect');
		}
	}
}

checkBrackets('( ( a + b ) / 5 - d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 - c / ( a + 3 ) ) ) )');
