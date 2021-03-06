const mongoose = require('mongoose');
const questionSchema = mongoose.Schema({
   title: String,
   points: Number,
   description: String,
   questionType: {
       type: String,
       enum: ['ESSAY', 'FILL_BLANK', 'MULTI_CHOICE', 'TRUE_FALSE']
   },
   blanks: [String],
   true: Boolean,
   choices: [{
       value: String,
       text: String,
       correct: Boolean
   }]
}, {collection: 'question'});

module.exports = questionSchema;