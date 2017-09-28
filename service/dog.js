var mongoose = require('mongoose');
Dog = mongoose.model('Dog');

exports.findById = function(req, res) {
    Dog.findById(req.params.dogId, function(err, dog) {
        if (err)
            res.send(err);
        res.json(dog);
    });
}

exports.listAll = function(req, res) {
    Dog
        .find({})
        .sort("-created_date")
        .exec(function(err, dog) {
            if (err)
                res.send(err);
            res.json(dog);
        });
};

exports.create = function(req, res) {
    var dog = new Dog(req.body);
    console.log('create', dog);
    dog.save(function(err, dog) {
        if (err)
            res.send(err);
        console.log('after create', dog);
        res.json(dog);
    });
};

exports.update = function(req, res) {
    Dog.findOneAndUpdate({_id: req.params.dogId}, req.body, {new: true}, function(err, dog) {
        if (err)
            res.send(err);
        res.json(dog);
    });
};

exports.delete = function(req, res) {
    console.log('delete', req.params.dogId)
    Dog.remove({
        _id: req.params.dogId
    }, function(err, dog) {
        if (err)
            res.send(err);
        res.json({ message: 'Dog deleted.' });
    });
};