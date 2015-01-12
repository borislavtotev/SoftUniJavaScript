'use strict';

function reverseWordsInString(str) {
	var words = [];
	words = str.split(/\s+/);
	var wordsReversed = '';
	
	words.forEach(function (word) {
		var chars = word.split('');
		chars.reverse();
		wordsReversed += chars.join('') + ' ';
	});
	return wordsReversed;
}

console.log(reverseWordsInString('Hello, how are you.'));
console.log(reverseWordsInString('Life is pretty good, isn’t it?'));
