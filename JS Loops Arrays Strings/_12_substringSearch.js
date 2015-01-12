'use strict';

function countSubstringOccur(arr) {
	var pattern = new RegExp(arr[0],"i");
	var count = 0;
	while (pattern.test(arr[1])) {
		arr[1] = arr[1].replace(pattern,'');
		count++;
	}
	console.log(count);	
}

countSubstringOccur(['in', "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);
countSubstringOccur(['your', "No one heard a single word you said. They should have seen it in your eyes. What was going around your head."]);
countSubstringOccur(['but', 'But you were living in another world tryin\' to get your message through.']);
