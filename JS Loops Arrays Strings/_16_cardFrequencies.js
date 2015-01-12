'use strict';

function findCardFrequency(str) {
	var cardArray = str.split(' ');
	//console.log(cardArray);
	var resultArray = {};

	for (var i = 0; i < cardArray.length; i++) {
		var pattern = /[\d\w]+/igm;
		var face = pattern.exec(cardArray[i]);
		//console.log(face[0]);
		if (Object.keys(resultArray).indexOf(face[0].toString()) == -1) {
			resultArray[face[0]] = 1;
		} else {
			resultArray[face[0]] += 1;
		}
	};

	var printedFaces = [];
	for (var i = 0; i < cardArray.length; i++) {
		var pattern = /[\d\w]+/igm;
		var face = pattern.exec(cardArray[i]);
		if (printedFaces.indexOf(face[0]) == -1) {
			var test = resultArray[face[0]];
			var test1 = resultArray[parseInt(face[0])];
			var test2 = resultArray[10];
			var percent = resultArray[face[0]]/cardArray.length*100;
			console.log(face[0] + ' -> ' + percent.toFixed(2) + '%');
			printedFaces.push(face[0]);
		}
	};

}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');
