//Dependencies
const express = require("express");

//SETUP express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Router
require("./app/routes/htmlRoutes.js")(app);
require("./app/routes/apiRoutes.js")(app);


//================================================================
//App Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});