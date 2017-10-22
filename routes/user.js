module.exports = function (app) {

    var user = require('../service/user');

    app.route('/users')
        .get(user.listAll)
        .post(user.create);


    app.route('/users/:userId')
        .get(user.findById)
        .put(user.update)
        .delete(user.delete);
};