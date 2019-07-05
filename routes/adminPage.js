const path = require("path");
const express = require("express");
const routes = express.Router();
routes.get("/admin", (req, res, next) => {

    //res.sendFile(path.join(__dirname,"../","vievs","home.html"));
    res.render('admin', {
        title: "Admin page",
        // h1: "Cherry",
        // button: "red",
        // img: "Shape",
    });
});

module.exports = routes;