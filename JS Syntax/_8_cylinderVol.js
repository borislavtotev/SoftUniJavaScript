'use strict';

calcCylinderVol([2,4]);
calcCylinderVol([5,8]);
calcCylinderVol([12,3]);


function calcCylinderVol(arr) {
	var volume = Math.PI*arr[0]*arr[0]*arr[1];
	console.log(volume.toFixed(3));
}
