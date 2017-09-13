var mongoose = require('mongoose');

var ticketSchema = mongoose.Schema({
    author: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    authorAvatar: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    date: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    description: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    tags: {
        type: Array
    }
});

module.exports = mongoose.model('Ticket', ticketSchema);