const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    address: String,
    admin: Boolean
}, {collection: 'user'});

module.exports = userSchema;