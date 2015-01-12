'use strict';

function cloud(arr) {
	var results = {};

	for (var i = 0; i < arr.length; i++) {
		var inputs = arr[i].split(/\s+/);
		var filename = inputs[0];
		var ext = inputs[1];
		var filesize = inputs[2];
		filesize = filesize.substring(0, filesize.length - 2);
		filesize = Number(filesize);

		if (Object.keys(results).indexOf(ext) == -1) {
			var newObject = {};
			newObject["files"] = [filename];
			newObject["memory"] = filesize.toFixed(2);
			results[ext] = newObject;
		} else {
			results[ext]["files"].push(filename);
			results[ext]["files"].sort();
			var memory = Number(results[ext]["memory"]);
			memory += filesize;
			results[ext]["memory"] = memory.toFixed(2);
		}
	};

	var sortedExt = Object.keys(results).sort();
	var newResults = {};

	for (var i = 0; i < sortedExt.length; i++) {
		newResults[sortedExt[i]] = results[sortedExt[i]];
	};

	console.log(JSON.stringify(newResults));
}

cloud(['sentinel .exe 15MB', 'zoomIt .msi 3MB', 'skype .exe 45MB', 'trojanStopper .bat 23MB', 'kindleInstaller .exe 120MB', 'setup .msi 33.4MB', 'winBlock .bat 1MB']);
