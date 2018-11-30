// includes
const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var cors = require('cors');
let config = require('./config');

// controllers
let UserController = require('./controllers/userController');

// Application Environment
let environment = 'LOCAL';
let port = process.env.PORT || config[environment].SERVER_PORT;

// initialize express app
const app = express();


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse requests of content-type - application/json
app.use(bodyParser.json());


UserController(app);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
