/* 
  Michael Hunter and Ryan Giard
  CS 340 group 91
  App.js
*/

/*
  Code citation:
  The SETUP portion of this code is from the nodejs starter app: https://github.com/osu-cs340-ecampus/nodejs-starter-app
  Code in the ROUTES section is adapted from the examples in the nodejs starter app.
*/

/*
    SETUP
*/
PORT = 31415; // Set a port number at the top so it's easy to change in the future

// Express
var express = require('express'); // We are using the express library for the web server
var app = express(); // We need to instantiate an express object to interact with the server in our code

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public')); // this is needed to allow for the form to use the ccs style sheet


// Handlebars
const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars'); // Import express-handlebars
app.engine('.hbs', engine({ extname: ".hbs" })); // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs'); // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

// Database
var db = require('./database/db-connector')


/*
  ROUTES
*/

// GET ROUTES
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/accounts', function (req, res) {
    res.render('accounts');
});

app.get('/characters', function (req, res) {
    res.render('characters');
});

app.get('/guilds', function (req, res) {
    res.render('guilds');
});

app.get('/classes', function (req, res) {
    res.render('classes');
});

app.get('/hats', function (req, res) {
    res.render('hats');
});

// POST, PUT, DELETE ROUTES

/*
    LISTENER
*/
app.listen(PORT, function () { // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});