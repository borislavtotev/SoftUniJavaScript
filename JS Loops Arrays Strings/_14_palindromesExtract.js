'use strict';

function findPalindromes(str) {
	var pattern = /\b(\w+)\b/igm;
	var result;
	var palindromesArray = [];
	while (( result = pattern.exec(str)) !== null) {
		var word = result[0];

		var palindrome = true;
		for (var i = 0; i < parseInt(word.length / 2); i++) {
			if (word[i].toLowerCase() != word[word.length - 1 - i].toLowerCase()) {
				palindrome = false;
				break;
			};
		};

		if (palindrome) {
			palindromesArray.push(word);
		} else {
		};
	}

	var resultStr = palindromesArray[0];

	for (var i = 1; i < palindromesArray.length; i++) {
		resultStr += ', ' + palindromesArray[i];
	};
	
	console.log(resultStr);
}

findPalindromes('There is a man, his name was Bob.');
