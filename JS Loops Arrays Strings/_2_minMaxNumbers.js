'use strinct';

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);	

function findMinAndMax(arr) {
	var newArr = arr.sort(function (a,b) { return a>b;} );
	var min = newArr.shift();
	var max = newArr.pop();
	console.log('Min -> ' + min);
	console.log('Max -> ' + max);	
}
