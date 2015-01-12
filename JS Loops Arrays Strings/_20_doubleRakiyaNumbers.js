'use strict';

function doubleNumbers(arr) {
	var startStr = arr[0];
	var endStr = arr[1];
	var start = Number(startStr);
	var end = Number(endStr);
	var result = '<ul>';

	for (var i = start; i <= end; i++) {
		var rakia = false;

		var numberStr = i.toString();
		var allNumbers = [];
		for (var j = 0; j < numberStr.length - 1; j++) {
			var newPair = numberStr[j] + numberStr[j + 1];
			if (allNumbers.indexOf(newPair) == -1) {
				allNumbers.push(newPair);
			} else {
				rakia = true;
				break;
			}
			
			if (numberStr[j] === numberStr[j+2] && numberStr[j] === numberStr[j+1]) {
				j++;
			}
		};

		if (rakia) {
			result += "\n" + '<li><span class=\'rakiya\'>' + numberStr + '</span><a href="view.php?id=' + numberStr + '>View</a></li>';
		} else {
			result += "\n" + '<li><span class=\'num\'>' + numberStr + '</span></li>';
		};
	};

	result += "\n" + '</ul>';
	
	console.log(result);
	
}

doubleNumbers(['55555', '55560']);

