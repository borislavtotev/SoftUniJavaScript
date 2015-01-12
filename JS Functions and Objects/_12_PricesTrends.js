'use strict';


function Solve(arr) {
	var result = '<table>' + "\n" + '<tr><th>Price</th><th>Trend</th></tr>';
	//console.log('<table>');
	//console.log('<tr><th>Price</th><th>Trend</th></tr>');

	var previous = parseFloat(parseFloat(arr[0]).toFixed(2));
	result+= "\n" + '<tr><td>' + previous.toFixed(2) + '</td><td><img src="fixed.png"/></td></td>';
	//console.log('<tr><td>' + previous + '</td><td><img src="fixed.png"/></td></tr>');
	

	for (var i=1; i < arr.length; i++) {
		var oldcurrent = parseFloat(arr[i]).toFixed(2);
		var newcurrent = parseFloat(oldcurrent);
		var current = parseFloat(parseFloat(arr[i]).toFixed(2));
		var trend = '';
		
		if (current > previous) {
			trend = 'up';
		} else if (current < previous)	{
			trend = 'down';
		} else if (current == previous){
			trend = 'fixed';
		};
		
		result += "\n" + '<tr><td>' + current.toFixed(2) + '</td><td><img src="' + trend + '.png"/></td></td>';
		//console.log('<tr><td>' + current + '</td><td><img src="' + trend + '.png"/></td></tr>');
		previous = current;
	};
	
	result+= "\n" + '</table>';
	//console.log('</table>');
	console.log(result);
	//return result;
}

Solve([36.333,36.3333334, 36.501, 36.5,37.019,35.4,35,35.001,36.225]);
