const express = require("express");
//const homePage = require("./routes/homePage");
const app = express();
const path = require('path');
const about = require('./routes/aboutPage');
app.use(about);
const admin = require('./routes/adminPage');
app.use(admin);
const blog = require('./routes/blogPage');
app.use(blog);
const contact = require('./routes/contactPage');
app.use(contact);
const home = require('./routes/homePage');
app.use(home);
const notfaund = require('./routes/notfaundPage');
 app.use(notfaund);


app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "views");
app.listen(3000);