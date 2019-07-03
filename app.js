const express = require("express");
const homePage = require("./routes/homePage");
const app = express();
const path = require('path');
app.use(homePage);
app.use(home);
app.use(contact);
app.use(about);
app.use(notfaund);
app.use(blog);
app.use(admin);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "views");
app.listen(3000);