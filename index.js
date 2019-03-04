var express = require("express");
var pg = require("pg");

var path = require("path");
// var bodyParser = require('body-parser');
// var config = {
//   user: 'postgres',
//   database: 'postgres',
//   password: 'super',
//   port: 5432,
//   max: 10, // max number of connection can be open to database
//   idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
// };
// var pool = new pg.Pool(config);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

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

app.get("/filterhospital", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/pages/filterhospital.html"));
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


// app.post('/users', function(req, res) {
//   pool.connect(function(err, client, done) {
//     if (err) {
//       console.log("not able to get connection " + err);
//       res.status(400).send(err);
//     }
//     client.query('INSERT INTO users(name, email, password, bloodgrp, age, gender, allergies, address, contact) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)', [req.body.name, req.body.email, req.body.password, req.body.bloodgrp, req.body.age, req.body.gender, req.body.allergies, req.body.address, req.body.contact]);
//     //call `done()` to release the client back to the pool
//     done();
//     res.redirect('/login');
//   });
// });

// app.post('/feedback', function(req, res) {
//   pool.connect(function(err, client, done) {
//     if (err) {
//       console.log("not able to get connection " + err);
//       res.status(400).send(err);
//     }
//     client.query('INSERT INTO feedback(name, email, comment) VALUES($1, $2, $3)', [req.body.name, req.body.email, req.body.comment]);
//     //call `done()` to release the client back to the pool
//     done();
//     res.redirect('/');
//   });
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

console.log("Running at http://localhost:" + port);