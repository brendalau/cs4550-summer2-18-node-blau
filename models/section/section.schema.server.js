const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    courseId: String,
    title: String,
    available: Number,
    seats: Number,
}, {collection: 'section'});