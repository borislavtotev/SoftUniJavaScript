'use strict';

function findMostFreqWord(str) {
	var pattern = /\b(\w+)\b/igm;
	var result;
	var wordArrayObject = {};
	var maxTimes = 1;
	while (( result = pattern.exec(str)) !== null) {
		var word = result[0];
		if (Object.keys(wordArrayObject).indexOf(word.toLowerCase()) == -1) {
			wordArrayObject[word.toLowerCase()]=1;
		} else {
			wordArrayObject[word.toLowerCase()]+=1;
			if (maxTimes < wordArrayObject[word.toLowerCase()]) {
				maxTimes = wordArrayObject[word.toLowerCase()];
			}
		}
	}
	
	for (var word in wordArrayObject) {
		if (wordArrayObject[word]==maxTimes) {
			console.log(word + ' -> ' + wordArrayObject[word] + ' times');
		}
	}	
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
