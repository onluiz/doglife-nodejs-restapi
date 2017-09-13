module.exports = function(app) {
    var ticket = require('../service/ticket');

    app.route('/tickets')
        .get(ticket.listAll)
        .post(ticket.create);

};