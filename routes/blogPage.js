const path = require("path");
const express = require("express");
const routes = express.Router();
routes.get("/", (req, res, next) => {

    //res.sendFile(path.join(__dirname,"../","vievs","home.html"));
    res.render('blog', {
        title: "Blog page",
        // h1: "Cherry",
        // button: "red",
        // img: "Shape",
    });
});

module.exports = routes;