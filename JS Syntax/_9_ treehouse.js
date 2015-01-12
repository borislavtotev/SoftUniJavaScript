'use strict';

treeHouseCompare([3,2]);
treeHouseCompare([3,3]);
treeHouseCompare([4,5]);

function treeHouseCompare(arr) {
	var houseArea = arr[0]*arr[0] + arr[0] * 2/3 * arr[0] / 2;
	var treeArea = arr[1]*arr[1]/3 + Math.PI * (arr[1]*2/3) * (arr[1]*2/3);
	
	if (houseArea >= treeArea) {
		console.log('house/' + houseArea.toFixed(2));
	} else{
		console.log('tree/' + treeArea.toFixed(2));		
	};
}
