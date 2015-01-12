function hideOddRows() {
	console.log('rertrete');
	var rows = document.querySelectorAll('table tr:nth-of-type(2n+1)');
	for (var i=0; i < rows.length; i++) {
	  rows[i].style.display = "none";
	};
}
