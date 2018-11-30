module.exports = (app) => {
    const user = require('../controllers/userController.js');

    // Create a new Note
    app.post('/user', user.create);

    // Retrieve all user
    app.get('/user', user.findAll);

    // Retrieve a single Note with noteId
    app.get('/user/:noteId', user.findOne);

    // Update a Note with noteId
    app.put('/user/:noteId', user.update);

    // Delete a Note with noteId
    app.delete('/user/:noteId', user.delete);
}