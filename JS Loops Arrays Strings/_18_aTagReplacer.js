'use strict';

function replaceATag(str) {
	var pattern = /(<a)([^>]*)(>)(.*?)(<\/a>)/igm;
	var result;
	var resultStr = [];
	while (( result = pattern.exec(str)) !== null) {
		var newATag = "[URL" + result[2] + "]" + result[4] + "[/URL]";
		str = str.replace(result[0],newATag);
	}
	console.log(str);		
}

replaceATag("<ul>" + "\n" + "<li>" + "\n" + "<a href=http://softuni.bg>SoftUni</a>" + "\n" + "</li>" + "\n" + "</ul>");
