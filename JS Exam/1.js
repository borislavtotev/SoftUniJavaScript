'use strict';

function solve1(arr) {
	var results = 0;
	var eDate = new Date(1973, 4, 25);
	var startDate = new Date(1900, 1, 1);
	var endDate = new Date(2015, 1, 1);

	var minHaterDate;
	var maxFanDate;

	for (var i = 0; i < arr.length; i++) {
		//console.log(endDate.toDateString());
		var inputs = arr[i].split('.');
		//console.log(inputs);
		var newDate = new Date(inputs[2], inputs[1] - 1, inputs[0]);
		//console.log(newDate.toDateString());

		if (newDate >= startDate && newDate < endDate) {
			results++;
			if ((newDate <= eDate) && ((typeof(minHaterDate) == 'undefined') || minHaterDate > newDate )) {
				minHaterDate = newDate;
			} else if ( (typeof(maxFanDate) == 'undefined') || (maxFanDate < newDate ) ) {
				maxFanDate = newDate;
			}
		}
	};
	
	if (results > 0) {
		if ((typeof(maxFanDate) != 'undefined')) {
			console.log('The biggest fan of ewoks was born on ' + maxFanDate.toDateString());
		}
		if ((typeof(minHaterDate) != 'undefined')) {
			console.log('The biggest hater of ewoks was born on ' + minHaterDate.toDateString());
		}
	} else {
		console.log('No result');
	}

}

solve1(['22.03.2014', '17.05.1933', '10.10.1954']);
