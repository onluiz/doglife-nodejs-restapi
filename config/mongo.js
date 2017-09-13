module.exports = function () {
    var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    //mongoose.connect('mongodb://localhost/test1db', {useMongoClient: true});
    mongoose.connect('mongodb://dev:dev312@ds115214.mlab.com:15214/heroku_s1ltk9tx', {useMongoClient: true});

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('we are connected!');
    });

    var Task = require('../models/task');
    var User = require('../models/user');
    var Ticket = require('../models/ticket');
};