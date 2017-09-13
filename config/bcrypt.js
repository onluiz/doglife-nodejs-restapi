var bcrypt = require('bcrypt');
const saltRounds = 10;

exports.crypt = function(plainText, callback) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(plainText, salt, function(err, hash) {
            callback(hash);
        });
    });
};

exports.compare = function(plainText, hash, callback) {
    bcrypt.compare(plainText, hash, function(err, res) {
        callback(res);
    })
};