//Load Data
const friends = require("../data/friends.js")

//Routing
module.exports = function(app) {
    //API GET Requests
    app.get("/api/users", function(req, res) {
        res.json(friends);
    });
    
    //API POST Requests
    app.post("/api/users", function(req, res) {
        
        const input = req.body;

        var scoresArray = [];
        for(var i=0; i < input.scores.length; i++){
        scoresArray.push( parseInt(input.scores[i]) )
        }
        input.scores = scoresArray;


        // Cross check the new friend entry with the existing ones
        var scoreComparisionArray = [];
        for(var i=0; i < friends.length; i++){

        // Check each friend's scores and sum difference in points
        var currentComparison = 0;
        for(var j=0; j < input.scores.length; j++){
            currentComparison += Math.abs( input.scores[j] - friends[i].scores[j] );
        }

        // Push each comparison between friends to array
        scoreComparisionArray.push(currentComparison);
        }

        // Determine the best match using the postion of best match in the friends array
        var bestMatchPosition = 0; // assume its the first person to start
        for(var i=1; i < scoreComparisionArray.length; i++){
        
        // Lower number in comparison difference means better match
        if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
            bestMatchPosition = i;
        }

        }

        // ***NOTE*** If the 2 friends have the same comparison, then the NEWEST entry in the friends array is chosen
        var bestFriendMatch = friends[bestMatchPosition];



        console.log(bestFriendMatch)
        

        // Reply with a JSON object of the best match
        res.json(bestFriendMatch);

        friends.push(input);

        console.log(friends)

    });
};