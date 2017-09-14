var mongoose = require('mongoose');

var dogSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of your dog'
    },
    nickname: {
        type: String,
        required: 'Kindly enter the nickname of your dog'
    },
    birthdate: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Dog', dogSchema);