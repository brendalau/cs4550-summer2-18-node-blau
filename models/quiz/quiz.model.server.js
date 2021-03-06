const mongoose = require('mongoose')
const quizSchema = require('./quiz.schema.server');
const quizModel = mongoose.model('QuizModel', quizSchema);

createQuiz = quiz =>
    quizModel.create(quiz)

findAllQuizzes = () =>
    quizModel.find()

findQuizById = quizId =>
    quizModel.findById(quizId)
        .populate('questions')
        .exec()

updateQuiz = (quizId, newQuiz) =>
    quizModel.update({_id: quizId}, {
        $set: newQuiz
    })

deleteQuiz = quizId =>
    quizModel.remove({_id: quizId})

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}