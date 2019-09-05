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
        friends.push(req.body);
        console.log("POSTED");
    });
};