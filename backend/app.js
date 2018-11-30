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

// connect to the database
mongoose.connect('mongodb://atlasAdmin:' + config[environment].MONGO_ATLAS_PW + '@cluster0-shard-00-00-lzlp6.mongodb.net:27017,cluster0-shard-00-01-lzlp6.mongodb.net:27017,cluster0-shard-00-02-lzlp6.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true});

UserController(app);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
