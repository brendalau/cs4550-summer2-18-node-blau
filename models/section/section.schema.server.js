const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    courseId: String,
    title: String,
    seats: Number
}, {collection: 'section'});