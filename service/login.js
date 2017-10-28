exports.auth = function (req, res) {
    var secret = require('../config/passport-secret').secret,
        jwt = require('jsonwebtoken'),
        User = require('../models/user'),
        bcrypt = require('../config/bcrypt');

    console.log('req.body.name', req.body.name)

    User.findOne({name: req.body.name}, function (err, user) {
        if (err) throw err;
        if(user) {
            bcrypt.compare(req.body.password, user.password, function(validPassword) {
                if(validPassword) {
                    var payload = {id: user._id};
                    var token = jwt.sign(payload, secret);
                    console.log(token);
                    res.json({message: "ok", token: token});
                } else {
                    res.status(401).json({message:"passwords did not match"});
                }
            });
        } else {
            return res.json({ success: false, message: 'Authentication failed. User not found.' });
        }
    })
};