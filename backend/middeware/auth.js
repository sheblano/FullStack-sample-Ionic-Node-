const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
    try {
        let token = req.headers.authorization; //Bearer included
        token = token.split(" ")[1]; // remove Bearer

        const verifiedDecodedToken = jwt.verify(token, config.JWT_KEY);
        req.userExtractedData = verifiedDecodedToken; // to hold decoded user data into req.userExtractedData 
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            success: 0,
            errorMsg: 'Invalid Token'
        });
    }
};