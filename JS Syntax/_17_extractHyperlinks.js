'use strict';

function extractHref(arr) {
	var str = arr.join('');
	var pattern = /<a[^>]*?href\s*=\s*["']([^>\s]+)\s*['"].*?>/igm;
	var result;
	while (( result = pattern.exec(str)) !== null) {
		console.log(result[1]);
	}
}

extractHref(['<a href="http://softuni.bg" class="new"></a>']);