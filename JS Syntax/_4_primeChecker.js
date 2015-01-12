'use strict';

isPrime(7);
isPrime(254);
isPrime(587);

function isPrime(number) {
	var prime = true;
	
	for (var i=2; i <= Math.sqrt(number); i+=1) {
		if (number % i == 0) {
			prime = false;
			break;
		};	
	};
	
	console.log(prime);
}