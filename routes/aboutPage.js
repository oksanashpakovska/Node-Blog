const path = require("path");
const express = require("express");
const routes = express.Router();
routes.get("/about", (req, res, next) => {

    //res.sendFile(path.join(__dirname,"../","vievs","home.html"));
    res.render('about');
});

module.exports = routes;