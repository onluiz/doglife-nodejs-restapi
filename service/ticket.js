var mongoose = require('mongoose');
Ticket = mongoose.model('Ticket');

exports.listAll = function(req, res) {
    Ticket
        .find({})
        .sort("-date")
        .exec(function(err, ticket) {
            if (err)
                res.send(err);
            res.json(ticket);
        });
};

exports.create = function(req, res) {
    var ticket = new Ticket(req.body);
    ticket.save(function(err, ticket) {
        if (err)
            res.send(err);
        res.json(ticket);
    });
};