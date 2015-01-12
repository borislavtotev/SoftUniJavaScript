'use strict';

function solve(arr) {
	var results = {};
	
	for (var i=0; i < arr.length; i++) {
		var newLine = arr[i];
		var elements = newLine.split("|");
		
		if (Object.keys(results).indexOf(elements[1].trim()) == -1) {
			var students = [];
			students.push(elements[0].trim());
			var courseProperties = {};
			courseProperties['avgGrade'] = Number(elements[2].trim());
			courseProperties['avgVisits'] = Number(elements[3].trim());
			courseProperties['students'] = students;
			results[elements[1].trim()] = courseProperties;
		} else {
			var courseProperties = {};
			courseProperties = results[elements[1].trim()];
			courseProperties['students'].push(elements[0].trim());
			courseProperties['avgGrade']+= Number(elements[2].trim());
			courseProperties['avgVisits']+= Number(elements[3].trim());
		}
	};
	//console.log(results);
	//console.log(JSON.stringify(results));
	
	var newResults = {};
	var sortedKeys = Object.keys(results).sort(function (a,b) { return a>b} );
	
	for (var key in sortedKeys) {
		var course = sortedKeys[key];
		var courseProperties = results[course];
		//console.log(courseProperties);
		courseProperties['avgGrade'] = Math.round((courseProperties['avgGrade'] / courseProperties['students'].length) * 100) / 100;
		courseProperties['avgVisits'] = Math.round((courseProperties['avgVisits'] / courseProperties['students'].length) * 100) / 100;
        var students = [];
        
        for (var i in courseProperties['students']) {
        	if (students.indexOf(courseProperties['students'][i])== -1) {
        		students.push(courseProperties['students'][i]);
        	}
        }
        
        
        courseProperties['students'] = students.sort(function (a,b) { return a>b} );
        newResults[sortedKeys[key]] = courseProperties;
	}
	console.log(JSON.stringify(newResults));
	
	return JSON.stringify(newResults);
}

solve(['Peter Nikolov | PHP  | 5.50 | 8',
		'Maria Ivanova | Java | 5.83 | 7',
		'Ivan Petrov   | PHP  | 3.00 | 2',
		'Ivan Petrov   | C#   | 3.00 | 2',
		'Peter Nikolov | C#   | 5.50 | 8',
		'Maria Ivanova | C#   | 5.83 | 7',
		'Ivan Petrov   | C#   | 4.12 | 5',
		'Ivan Petrov   | PHP  | 3.10 | 2',
		'Peter Nikolov | Java | 6.00 | 9']);
