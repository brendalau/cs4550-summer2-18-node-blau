const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    title: String,
    seats: Number
}, {collection: 'section'});