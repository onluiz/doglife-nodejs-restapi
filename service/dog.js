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
    dog.save(function(err, dog) {
        if (err)
            res.send(err);
        res.json(dog);
    });
};