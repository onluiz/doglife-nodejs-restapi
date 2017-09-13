module.exports = function (app) {

    var login = require('../service/login');

    app.route('/login')
        .post(login.auth);
};