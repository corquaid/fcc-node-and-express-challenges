var express = require('express');
var app = express();
let bGround = require('fcc-express-bground');
let bodyParser = require('body-parser');
require('dotenv').config();


// Root-level request logger middleware
const middleWare = (req, res, next) => {
  console.log(
    '"' + req.method + ' ' + req.path + ' - ' + req.ip + '"'
  );
  next();
}

app.use(middleWare);

// Body parser usage
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// console.log(bodyParser);

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
});

// Chaining middleware functions
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({"time": req.time});
});

// Get route parameter input from client
app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  res.send({"echo": word});
});

// API endpoint getting query parameter
app.get('/name', (req, res) => {
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.send({ "name": `${firstName} ${lastName}` });
})



































 module.exports = app;