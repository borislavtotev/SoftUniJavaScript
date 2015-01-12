'use strict';

convertKWtoHP(75);
convertKWtoHP(150);
convertKWtoHP(1000);

function convertKWtoHP(number) {
	var hp = number / 0.745699872;
	console.log(number + 'KW = ' + hp.toFixed(2) + 'HP');
	console.log();
};
