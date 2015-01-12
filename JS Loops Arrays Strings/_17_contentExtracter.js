'use strict';

function extractContent(str) {
	var pattern = /<[^>]*>(.*?)</igm;
	var result;
	var resultStr = [];
	while (( result = pattern.exec(str)) !== null) {
		resultStr+=result[1];
	}
	console.log(resultStr);
}

extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>");
