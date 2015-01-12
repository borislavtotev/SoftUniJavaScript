function calcCircleArea(r) {
	var area = Math.PI*r*r;
	return area;
}

function printArea() {
	document.getElementsByClassName('radius')[0].innerHTML= 'r=7; area=' + calcCircleArea(7);
	document.getElementsByClassName('radius')[1].innerHTML= 'r=1.5; area=' + calcCircleArea(1.5);
	document.getElementsByClassName('radius')[2].innerHTML= 'r=20; area=' + calcCircleArea(20);	
}

