const User = require('../models/user.model');
const mongoose = require('mongoose');

module.exports = function (app) {

    /**
     * Ping Server API
     */
    app.get('/', (req, res) => {
        res.json({
            "message": "welcome to my app"
        });
    });

    /**
     * Add random users to the database for testing the app
     */
    app.get('/api/user/addUsers', (req, res) => {
        const random = Math.floor(Date.now() / 1000); // timestamp in seconds
        const user = new User({
            // _id: new mongoose.Types.ObjectId(),
            firstName: `test ${random}`,
            lastName: 'user',
            email: `test${random}@shebl.com`,
            phoneNumber: `${random}${random}`,
            username: `test${random}`,
            password: `${random}`,
            profilePicUrl: 'https://s3-us-west-1.amazonaws.com/co-directory-images/john-sample-395b3514.jpg',

            accounts: [{
                // _id: new mongoose.Types.ObjectId(),
                number: (random + 1000).toString(),
                accType: 'Payroll',
                balance: Math.floor(Math.random() * 50000),
                date: new Date,
                transactions: [{
                        // _id: new mongoose.Types.ObjectId(),
                        trxType: 'in',
                        date: new Date,
                        value: 1000
                    },
                    {
                        // _id: new mongoose.Types.ObjectId(),
                        trxType: 'out',
                        date: new Date,
                        value: 5000
                    }
                ]
            },
            {
                // _id: new mongoose.Types.ObjectId(),
                number: (random + 2000).toString(),
                accType: 'Saving Account',
                balance: Math.floor(Math.random() * 20000),
                date: new Date,
                transactions: [{
                        // _id: new mongoose.Types.ObjectId(),
                        trxType: 'in',
                        date: new Date,
                        value: 3000
                    },
                    {
                        // _id: new mongoose.Types.ObjectId(),
                        trxType: 'out',
                        date: new Date,
                        value: 2500
                    }
                ]
            }
        ]
        });

        user.save().then(result => {
            console.log(result);
            res.status(201).json({
                success: 1,
                result: user
            })
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                success: 0,
                errorMsg: err
            })
        })

    });

    /**
     * Get the user details 
     * @input user._id
     */
    app.get('/api/user/:userId', (req, res) => {
        const id = req.params.userId;
        User.findById(id).exec()
            .then(result => {
                console.log(result);
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({
                        success: 0,
                        errorMsg: 'no data found for this user id'
                    });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    success: 0,
                    errorMsg: err
                });
            })
    });

    

}