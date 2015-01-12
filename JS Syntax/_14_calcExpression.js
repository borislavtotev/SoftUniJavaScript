'use strict';

function calculates() {
	var expression = document.getElementById("inputExpression").value;
	console.log(expression);
	var realExpression = expression.replace(/[^\/\d*.+\-]/igm, '');
	console.log(realExpression);
	var result = eval(realExpression);
	console.log(result);
	document.getElementById("result").innerHTML = result;
}