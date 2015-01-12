'use strict';

function findYoungestPerson(persons) {
	var minAge = Number.MAX_VALUE;
	var minAgeName = '';

	for (var i = 0; i < persons.length; i++) {
		if (persons[i].age < minAge) {
			minAge = persons[i].age;
			minAgeName = persons[i].firstname + ' ' + persons[i].lastname;
		}
	};
	
	return minAgeName;
}

var persons = [{
	firstname : 'George',
	lastname : 'Kolev',
	age : 32
}, {
	firstname : 'Bay',
	lastname : 'Ivan',
	age : 81
}, {
	firstname : 'Baba',
	lastname : 'Ginka',
	age : 40
}];

console.log('The youngest person is ' + findYoungestPerson(persons));
