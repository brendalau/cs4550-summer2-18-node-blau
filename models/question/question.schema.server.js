const mongoose = require('mongoose');
const questionSchema = mongoose.Schema({
   title: String,
   points: Number,
   description: String,
   questionType: {
       type: String,
       enum: ['ESSAY', 'FILL_BLANK', 'MULTI_CHOICE', 'TRUE_FALSE']
   }
}, {collection: 'question'});

module.exports = questionSchema;