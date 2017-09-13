var mongoose = require('mongoose');
    User = mongoose.model('User'),
    bcrypt = require('../config/bcrypt');

exports.listAll = function(req, res) {
    User.find({}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.create = function(req, res) {
    bcrypt.crypt(req.body.password, function(hash) {
        var user = new User(req.body);
        user.password = hash;
        user.save(function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })
};

exports.findById = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update = function(req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete = function(req, res) {
    User.remove({
        _id: req.params.userId
    }, function(err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};