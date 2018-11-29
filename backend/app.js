const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();

let port = 3003;
// controllers
// var sjcCaseWFController = require('./controllers/sjcCaseWFController');

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});