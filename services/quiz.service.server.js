module.exports = app => {

    const quizModel = require('../models/quiz/quiz.model.server');

    createQuiz = (req, res) => {
        quizModel.createQuiz(req.body)
            .then(quiz => res.send(quiz))
    }

    findAllQuizzes = (req, res) => {
        quizModel.findAllQuizzes()
            .then(quizzes => res.send(quizzes))
    }

    findQuizById = (req, res) => {
        quizModel.findQuizById(req.params['quizId'])
            .then(quiz => res.send(quiz))
    }

    updateQuiz = (req, res) => {
        quizModel.updateQuiz(req.params['quizId'], req.body)
            .then(status => res.send(status))
    }

    deleteQuiz = (req, res) => {
        quizModel.deleteQuiz(req.params['quizId'])
            .then(status => res.send(status))
    }

    app.post('/api/quiz', createQuiz);
    app.get('/api/quiz', findAllQuizzes);
    app.get('/api/quiz/:quizId', findQuizById);
    app.put('/api/quiz/:quizId', updateQuiz);
    app.delete('/api/quiz/:quizId', deleteQuiz);
};