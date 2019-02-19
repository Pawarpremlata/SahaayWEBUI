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

app.listen(3001);

console.log("Running at Port 3001");