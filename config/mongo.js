module.exports = function () {
    var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/doglifedb', {useMongoClient: true});

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('we are connected!');
    });

    var User = require('../models/user');
    var Dog = require('../models/dog');
};