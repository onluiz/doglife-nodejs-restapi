module.exports = function (app) {
    var jwt = require('jsonwebtoken');
    var passport = require("passport");

    app.route('').get(function (req, res) {
        res.json({message: 'Hi!'})
    });

    app.route('/').get(function (req, res) {
        res.json({message: '/Hi!'})
    });

    app.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
        res.json("Success! You can not see this without a token");
    });

    require('../routes/login')(app);
    require('../routes/user')(app);
    require('../routes/dog')(app);
};