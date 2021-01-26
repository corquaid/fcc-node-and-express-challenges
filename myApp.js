var express = require('express');
var app = express();
let bGround = require('fcc-express-bground');
require('dotenv').config();


// Root-level request logger middleware
const middleWare = (req, res, next) => {
  console.log(
    '"' + req.method + ' ' + req.path + ' - ' + req.ip + '"'
  );
  next();
}

app.use(middleWare);

// Meet node console
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
// app.get('/json', (req, res) => res.json({ "message": "Hello json" }))

// Setup env file
app.get('/json', (req, res) => {
  
  let response = "Hello json";
  if(process.env.MESSAGE_STYLE === "uppercase") {
    response = response.toUpperCase();
  } else {
    response;
  }
  res.json(
    { "message": response }
  );
})



































 module.exports = app;