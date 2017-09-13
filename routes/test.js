module.exports = function(app) {
    app.route('/test/crypt').post(function(req, res) {
        var plainText = req.body.text;
        var bcrypt = require('../config/bcrypt');
        res.json({plain: plainText, crypted: bcrypt.crypt(plainText)});
    });
};