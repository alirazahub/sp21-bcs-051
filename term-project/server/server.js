const expressLayouts = require("express-ejs-layouts");
const express = require("express");

let server = express();
server.use(express.static("public"));
server.set("view engine", "ejs");

server.use(expressLayouts);

server.get("/", function (req, res) {
  res.render("landing");
});

server.get("/login", function (req, res) {
  res.render("login");
});

server.get("/register", function (req, res) {
  res.render("register");
});

server.listen(5000, function () {
  console.log("server is running at Port 5000");
});
