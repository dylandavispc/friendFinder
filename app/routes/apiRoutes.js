//Load Data
const friends = require("../data/friends.js")

//Routing
module.export = function(app) {
    //API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    //API POST Requests
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        console.log("POSTED")
    });
};