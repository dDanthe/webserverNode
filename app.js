const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/particles");

app.use(express.static("public"));

// app.get('/', (req, res) => {
//     res.send('Home Page');
// })
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/generic", (req, res) => {
  res.render("generic");
});
app.get("/elements", (req, res) => {
  res.render("elements");
});
// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname+'/public/elements.html');
// })
// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname+'/public/generic.html');
// })
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Runing in ${process.env.PORT} port`);
});
