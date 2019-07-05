const path = require("path");
const express = require("express");
const routes = express.Router();
routes.get("/home", (req, res, next) => {
   
   //res.sendFile(path.join(__dirname,"../","vievs","home.html"));
   res.render('home',{
      title: "Home page",
      // h1: "Cherry",
      // button: "red",
      // img: "Shape",
   });
    });

    module.exports = routes;

   