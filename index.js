var express = require("express");
var path = require("path");

var app = express();

app.use("/images", express.static(__dirname + "/public/images"));
app.use("/data", express.static(__dirname + "/public/data"));
app.use("/header", express.static(__dirname + "/public/pages/header.html"));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/nearesthospital", function(req, res) {
	res.sendFile(path.join(__dirname + "/public/pages/nearesthospital.html"));
});

app.get("/tips", function(req, res) {
	res.sendFile(path.join(__dirname + "/public/pages/tips.html"));
});

app.get("/feedback", function(req, res) {
	res.sendFile(path.join(__dirname + "/public/pages/feedback.html"));
});

app.get("/signup", function(req, res) {
	res.sendFile(path.join(__dirname + "/public/pages/signup.html"));
});

app.get("/login", function(req, res) {
	res.sendFile(path.join(__dirname + "/public/pages/login.html"));
});

app.listen(3001);

console.log("Running at http://localhost:3001 ");
