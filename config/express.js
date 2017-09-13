module.exports = function () {
    var express = require('express');
    var app = express();
    var cors = require('cors');
    var bodyParser = require('body-parser');
    var port = process.env.PORT || 8080;
    var router = express.Router();
    var passport = require("passport");
    passport.use(require('../config/passport-config').getJWTStrategy());

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    require('../routes/index')(app);
    app.use(function(req, res) {
        res.status(404).send({url: req.originalUrl + ' not found'})
    });
    app.use('/api', router);
    app.listen(port);

    console.log('Magic happens on port ' + port);
};