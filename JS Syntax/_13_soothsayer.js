'use strict';

function soothsayer(numsArr, langsArr, citiesArr, carsArr) {
	var input = [numsArr, langsArr, citiesArr, carsArr];
	var result = [];
	
	for (var i = 0; i < 4; i++) {
		var rand = Math.floor(Math.random() * 5) + 1;
		var arr = [];
		arr = input[i];
		result[i] = arr[rand-1];
	};
	
	console.log('You will work ' + result[0] + ' years on ' + result[1] + '. You will live in ' + result[2]+ ' and drive ' + result[3] +'.')
}

soothsayer([3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'], ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']);

