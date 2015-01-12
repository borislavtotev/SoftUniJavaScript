'use strict';

function reverseString(str) {
	var reverseStr=[];
	for (var i = str.length-1 ; i>=0; i--) {
		reverseStr.push(str[i]);
	};
	var result = reverseStr.join('');
	return result;
}

console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));
