'use strict';

function variablesTypes(arr) {
	var name = 'My name: ' + arr[0] + '//type is ' + typeof(arr[0]) + '\n';
	var age = 'My age: ' + arr[1] + '//type is ' + typeof(arr[1]) + '\n';
	var gender = 'I am male: ' + arr[2] + '//type is ' + typeof(arr[2]) + '\n';
	var foods = 'My favorite foods are: ' + arr[3] + '//type is ' + typeof(arr[3]) + '\n';		

	return name + age + gender + foods;
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));
