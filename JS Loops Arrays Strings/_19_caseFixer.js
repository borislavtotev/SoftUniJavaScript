'use strict';

function fixCasing(str) {
	var pattern = /<upcase>(.*?)<\/upcase>/igm;
	var result;
	var resultStr = [];
	while (( result = pattern.exec(str)) !== null) {
		var newTag = result[1].toUpperCase();
		//console.log(newTag);
		str = str.replace(result[0], newTag);
	}
	//console.log(str);

	var pattern1 = /<lowcase>(.*?)<\/lowcase>/igm;
	var result1;
	var resultStr1 = [];
	while (( result1 = pattern1.exec(str)) !== null) {
		var newTag1 = result1[1].toLowerCase();
		//console.log(newTag1);
		str = str.replace(result1[0], newTag1);
	}
	//console.log(str);

	var pattern2 = /<mixcase>(.*?)<\/mixcase>/igm;
	var result2;
	var resultStr2 = [];
	while (( result2 = pattern2.exec(str)) !== null) {
		var newTag2 = '';
		for (var i = 0; i < result2[1].length; i++) {
			var rand = Math.floor(Math.random() * 2) + 1;
			if (rand == 1) {
				newTag2 += result2[1][i].toUpperCase();
			} else {
				newTag2 += result2[1][i].toLowerCase();				
			};
		};
		//console.log(newTag2);
		str = str.replace(result2[0], newTag2);
	}
	console.log(str);
}

fixCasing("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.");
