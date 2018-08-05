const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/cs4550-summer-2018", { useNewUrlParser: true });

const userModel = require('./models/user/user.model.server');
const sectionModel = require('./models/section/section.model.server');




