const mongoose = require('mongoose')
const questionSchema = require('./question.schema.server');
const questionModel = mongoose.model('QuestionModel', questionSchema);

createQuestion = question =>
    questionModel.create(question)

findAllQuestions = () =>
    questionModel.find()

findQuestionById = questionId =>
    questionModel.findById(questionId)

updateQuestion = (questionId, newQuestion) =>
    questionModel.update({_id: questionId}, {
        $set: newQuestion
    })

deleteQuestion = questionId =>
    questionModel.remove({_id: questionId})

module.exports = {
    createQuestion,
    findAllQuestions,
    findQuestionById,
    updateQuestion,
    deleteQuestion
}