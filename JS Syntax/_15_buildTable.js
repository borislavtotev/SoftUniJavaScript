'use strict';

function build(arr) {
	console.log('<table>');
	console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
	var start = parseInt(arr[0]);
	var end = parseInt(arr[1]);
	
	var fib = [];
	fib[0] = 1;
	fib[1] = 1;
	var lastFib = 1;
	var i = 2; 
	
	while (lastFib < end) {
		fib[i] = fib[i-1] + fib[i-2];
		lastFib = fib[i];
		i++;
	}	
	
	for (var i=start; i <= end; i++) {
		var fibValue = 'no';
		
		if (fib.indexOf(i) != -1) {
			fibValue = 'yes';
		}
		
		console.log('<tr><td>' + i + '</td><td>' + i*i + '</td><td>' + fibValue + '</td></tr>');
	};
	console.log('</table>');	
}

build([55,56]);
	