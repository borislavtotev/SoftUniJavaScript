'use strict';

function displayProperties() {
	var docProperties = [];
	
	for (var properties in document) {
		docProperties.push(properties);
	}

	docProperties.sort(function(a, b) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	for (var i = 0; i < docProperties.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = docProperties[i];
		document.getElementById('content').appendChild(li);
	}
}

displayProperties();