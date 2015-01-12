'use strict';

function sortTable(arr) {
	console.log(arr[0]);
	console.log(arr[1]);
	
	var contentResult = {};

	for (var i = 2; i < arr.length - 1; i++) {
		var pattern = /<td>(.*?)<\/td>/igm;
		var content;
		var contentArray = [];
		while (( content = pattern.exec(arr[i])) !== null) {
			contentArray.push(content[1]);
		}

		if (Object.keys(contentResult).indexOf(Number(contentArray[1]).toString()) == -1) {
			contentResult[Number(contentArray[1])] = [];
			contentResult[Number(contentArray[1])][contentArray[0]] = contentArray[2];
		} else {
			contentResult[Number(contentArray[1])][contentArray[0]] = contentArray[2];
		}
	};

	//console.log(contentResult);

	var newArr = Object.keys(contentResult).sort(function(a, b) {
		return a - b;
	});

	for (var i = 0; i < newArr.length; i++) {
		var productArr = Object.keys(contentResult[Number(newArr[i])]).sort(function(a, b) {
	return a.toLowerCase().localeCompare(b.toLowerCase());
});
		for (var j = 0; j < productArr.length; j++) {
			for (var k=2; k < arr.length; k++) {
				if ( (arr[k].indexOf(productArr[j]) != -1)  && (arr[k].indexOf(newArr[i]) != -1) && (arr[k].indexOf(contentResult[Number(newArr[i])][productArr[j]]) != -1) ) {
					console.log(arr[k]);
					break;
				}
			};
			
		};
	};

	console.log(arr[arr.length - 1]);
}


sortTable(['<table>',
			'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
			'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
			'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
			'<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
			'<tr><td>LAptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
			'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
			'<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
			'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
			'</table>']);