const path = require("path");
const express = require("express");
const routes = express.Router();
routes.get("/", (req, res, next) => {

    //res.sendFile(path.join(__dirname,"../","vievs","home.html"));
    res.render('notfaund', {
        title: "Notfaund page",
        // h1: "Cherry",
        // button: "red",
        // img: "Shape",
    });
});

module.exports = routes;