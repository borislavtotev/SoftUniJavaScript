'use strict';

function findStars(arr) {
	var inputsStar1 = arr[0].split(/\s+/);
	var star1 = inputsStar1[0];
	var star1x = Number(inputsStar1[1]);
	var star1y = Number(inputsStar1[2]);	

	var inputsStar2 = arr[1].split(/\s+/);
	var star2 = inputsStar2[0];
	var star2x = Number(inputsStar2[1]);
	var star2y = Number(inputsStar2[2]);
	
	var inputsStar3 = arr[2].split(/\s+/);
	var star3 = inputsStar3[0];
	var star3x = Number(inputsStar3[1]);
	var star3y = Number(inputsStar3[2]);
	
	var normanCord = arr[3].split(/\s+/);
	var normanX = Number(normanCord[0]);
	var normanY = Number(normanCord[1]);
	
	var move = Number(arr[4]);
	
	for (var i=0; i <= move; i++) {	
		if ( (normanX >= (star1x-1)) && (normanX <= (star1x+1)) && (normanY >= (star1y-1)) && (normanY <= (star1y+1)) ) {
			console.log(star1.toLowerCase());
		} else if ((normanX >= (star2x-1)) && (normanX <= (star2x+1)) && (normanY >= (star2y-1)) && (normanY <= (star2y+1))) {
			console.log(star2.toLowerCase());			
		} else if ( (normanX >= (star3x-1)) && (normanX <= (star3x+1)) && (normanY >= (star3y-1)) && (normanY <= (star3y+1))) {
			console.log(star3.toLowerCase());			
		} else {
			console.log('space');
		}
		normanY++;
	}; 
}

findStars(['Sirius 3 7','Alpha-Centauri 7 5','Gamma-Cygni 10 10','8 1','6']);
