var express = require('express')
var app = express()
var session = require('express-session')
var bodyParser = require('body-parser')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://cs4550-summer2-18-angular-blau.herokuapp.com/");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
                    resave: false,
                    saveUninitialized: true,
                    secret: 'any string'
                }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://blau:cs4550@ds223509.mlab.com:23509/cs4550-summer-2018', { useNewUrlParser: true });

const userService = require('./services/user.service.server');
userService(app);

const sectionService = require('./services/section.service.server');
sectionService(app);

app.listen(process.env.PORT || 3000);