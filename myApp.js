var express = require('express');
var app = express();
let bGround = require('fcc-express-bground');

console.log("Hello World");
bGround.log("Hello World");

// # Set up node server
// app.get('/', (req, res) => res.send('Hello Express'));

// Serve HTML file
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

// Serve Static Assets
let path = __dirname + '/public';
app.use('/public', express.static(path));

// Serve JSON 
app.get('/json', (req, res) => res.json({ "message": "Hello json" }))





































 module.exports = app;