const mongoose = require('mongoose');
var schema = mongoose.Schema;

const userSchema = new schema({
    _id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    accounts: [{
        _id: mongoose.Types.ObjectId,
        date: Date,
        balance: Number,
        branchName: String
    }],
}, {
    timestamps: true
});

let user = mongoose.model('user', userSchema);
module.exports = user;