'use strict';

function results(arr) {
	var rank = {};
	
	for (var i = 0; i < arr.length; i++) {
		var pattern = /([^\/:]+?)\/([^\/:]+?):\s*(\d+)-(\d+)/igm;
		var inputs = pattern.exec(arr[i]);
		var team1 = inputs[1].trim();
		var team2 = inputs[2].trim();
		var goalsTeam1 = Number(inputs[3]);
		var goalsTeam2 = Number(inputs[4]);

		if (Object.keys(rank).indexOf(team1) == -1) {
			var playedWith = [];
			playedWith.push(team2);
			var teamProperties = {};
			teamProperties["goalsScored"] = goalsTeam1;
			teamProperties["goalsConceded"] = goalsTeam2;			
			teamProperties["matchesPlayedWith"] = playedWith;
			rank[team1] = teamProperties;			
		} else {
			if (rank[team1]["matchesPlayedWith"].indexOf(team2) == -1) {
				rank[team1]["matchesPlayedWith"].push(team2);
				rank[team1]["matchesPlayedWith"] = rank[team1]["matchesPlayedWith"].sort();	
			}
			rank[team1]["goalsScored"] += goalsTeam1;
			rank[team1]["goalsConceded"] += goalsTeam2;						
		}

		if (Object.keys(rank).indexOf(team2) == -1) {
			var playedWith = [];
			playedWith.push(team1);
			var teamProperties = {};
			teamProperties["goalsScored"] = goalsTeam2;
			teamProperties["goalsConceded"] = goalsTeam1;			
			teamProperties["matchesPlayedWith"] = playedWith;
			rank[team2] = teamProperties;			
		} else {
			if (rank[team2]["matchesPlayedWith"].indexOf(team1) == -1) {
				rank[team2]["matchesPlayedWith"].push(team1);	
				rank[team2]["matchesPlayedWith"] = rank[team2]["matchesPlayedWith"].sort();	
			}
			rank[team2]["goalsScored"] += goalsTeam2;
			rank[team2]["goalsConceded"] += goalsTeam1;						
		}

	};
	
	//console.log(rank);
	
	var newRank = {};
	var sortedKeys = Object.keys(rank).sort();
	
	for (var i=0; i < sortedKeys.length; i++) {
		newRank[sortedKeys[i]] = rank[sortedKeys[i]];
	};
	
	var result = JSON.stringify(newRank);
	
	console.log(result);
}

results(['Germany / Argentina: 1-0', 'Brazil / Netherlands: 0-3', 'Netherlands / Argentina: 0-0', 'Brazil / Germany: 1-7', 'Argentina / Belgium: 1-0', 'Netherlands / Costa Rica: 0-0', 'France / Germany: 0-1', 'Brazil / Colombia: 2-1']);
