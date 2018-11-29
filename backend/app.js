// includes
const express = require('express');
const bodyParser = require('body-parser');

//required files
let config = require('./config');

// initialize express app
const app = express();


// Environment
let environment = 'LOCAL';

let port = process.env.PORT || config[environment].SERVER_PORT;

// controllers
// var sjcCaseWFController = require('./controllers/sjcCaseWFController');

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});