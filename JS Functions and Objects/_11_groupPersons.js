'use stricts';

function Person(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.get  = ( function (property) {
		switch(property) {
		    case 'firstname':
		        return this.firstName;
		        break;
		    case 'lastName':
		        return this.lastName;
		        break;
		    case 'age':
		        return this.age;
		        break;		
			default:
		        return undefined;
		};
	});
	this.getElement = ( function () {
		return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
	});
}

function group(persons, property) {
	var result = {};
	for (var i = 0; i < persons.length; i++) {
		//console.log(persons[i].getElement())
		var group = persons[i].get(property);
		if (Object.keys(result).indexOf(group.toString()) == -1) {
			result[group] = [];
			result[group].push(persons[i].getElement());
		} else {
			result[group].push(persons[i].getElement());			
		}
	};
	
	for (var group in result) {
		var resultStr = 'Group ' + group + ': [' + result[group] + ']';
		console.log(resultStr);
	}
	console.log("\n");
}

var persons = [];
persons.push(new Person("Scott", "Guthrie", 38));
persons.push(new Person("Scott", "Johns", 36));
persons.push(new Person("Scott", "Hanselman", 39));
persons.push(new Person("Jesse", "Johns", 57));
persons.push(new Person("Jon", "Skeet", 38));

group(persons, 'firstname');
group(persons, 'age');
group(persons, 'lastName');
