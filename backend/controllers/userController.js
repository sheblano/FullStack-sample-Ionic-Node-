var user = require('../models/user.model');


module.exports = function (app) {
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({
    //     extended: true
    // }));

    // define a simple route
    app.get('/', (req, res) => {
        res.json({
            "message": "Welcome2 to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."
        });
    });
}