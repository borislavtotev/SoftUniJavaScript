'use strict';

console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));

function printNumbers(number) {
	var outArray=[];
	
	for (var i = 1; i <= number; i++) {
		if ((i % 4 != 0) && (i % 5 != 0) ) {
			outArray.push(i);
		};
	}
	
	if (outArray.length > 0) {
		var output = outArray.join(',');
		return output;		
	} else{
		return 'no';
	};

}
