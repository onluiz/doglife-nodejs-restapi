module.exports = function(app) {
    var dog = require('../service/dog');

    app.route('/dogs/:dogId')
        .get(dog.findById);

    app.route('/dogs')
        .get(dog.listAll)
        .post(dog.create);

};