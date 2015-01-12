'use strict';

function replaceSpaces(str) {
	var pattern = /\s/igm;
	str = str.replace(pattern,'');
	//str = str.replace(pattern,'&nbsp;');
	//str = str.replace(pattern,'\u00a0');
	console.log(str);
}

replaceSpaces("But you were living in another world tryin' to get your message through");
