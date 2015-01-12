'use strict';

function createArray() {
	var newArray = [];

	for (var i = 0; i <= 20; i++) {
		newArray[i] = i * 5;
	};

	var result = newArray[0];
	
	for (var i = 1; i < newArray.length; i++) {
		result+=' ' + newArray[i];
	};
	
	console.log(result);
}

createArray();
