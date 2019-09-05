//Dependencies
const express = require("express");
const path = require("path");

//SETUP express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Default Users
const users = [
    {
        routeName: "dylan",
        name: "Dylan",
        img: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/69861605_2645220012169554_8181497534456266752_n.jpg?_nc_cat=110&_nc_oc=AQkPZ5ApEvp0UL8_CT0mpjVscs6iUHQCR05qoGVMpiXnMFCs0EtAdLIuNwP6ByEq1dA&_nc_ht=scontent.ftpa1-1.fna&oh=faeb2c2d8f3e3d07ee0efcdadc6e8a9f&oe=5E1295E3",
        q1: 1,
        q2: 1,
        q3: 1,
        q4: 1
    },
    {
        routeName: "nicole",
        name: "Dylan",
        img: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/69272518_1108768349511958_3945261103025487872_n.jpg?_nc_cat=110&_nc_oc=AQnHKbSzbqEiMADi1R3aezSym0gg0lW2X7HHwixG2YNAC0q6ib7hX_OSXWI6fFMWh0I&_nc_ht=scontent.ftpa1-1.fna&oh=4e364ba4eb64785c5ac17d00df910dd7&oe=5DCCB532",
        q1: 2,
        q2: 2,
        q3: 2,
        q4: 2
    },
    {
        routeName: "johnwayne",
        name: "John Wayne",
        img: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzIyMzI2MDMw/john-wayne-9525664-1-402.jpg",
        q1: 3,
        q2: 3,
        q3: 3,
        q4: 3
    }
];

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"))
});














//================================================================
//App Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});