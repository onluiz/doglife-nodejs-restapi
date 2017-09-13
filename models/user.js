var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Campo nome é obrigatório'
    },
    userName: {
        type: String,
        required: 'Campo usuário é obrigatório'
    },
    email: {
        type: String,
        required: 'Campo e-mail é obrigatório'
    },
    password: {
        type: String,
        required: 'Campo senha é obrigatório'
    },
});

module.exports = mongoose.model('User', userSchema);