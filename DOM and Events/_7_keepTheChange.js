'use strict';

function keepchange(arr) {
	var bill = Number(arr[0]);
	var mood = arr[1];
	var tip = 0;
	
	switch (mood) {
		case "happy":
			tip = 0.1 * bill;
			break;
		case "married":
			tip = 0.0005 * bill;
			break;
		case "drunk":
			var tipBase = 0.15 * bill;
			var power = tipBase.toString();
			power = power.substring(0,1);
			tip = Math.pow(tipBase,parseInt(power));  
			break;
		default:
			tip = 0.05 * bill;		
	}
	
	console.log(tip.toFixed(2)); 
}

keepchange(['716.00','bored']);
