module.exports = app => {

    const questionModel = require('../models/question/question.model.server');

    createQuestion = (req, res) => {
        questionModel.createQuestion(req.body)
            .then(
                question => res.send(question),
                error => res.send(error)
            )
    }

    findAllQuestions = (req, res) => {
        questionModel.findAllQuestions()
            .then(questions => res.send(questions))
    }

    findQuestionById = (req, res) => {
        questionModel.findQuestionById(req.params['questionId'])
            .then(question => res.send(question))
    }

    updateQuestion = (req, res) => {
        questionModel.updateQuestion(req.params['questionId'], req.body)
            .then(status => res.send(status))
    }

    deleteQuestion = (req, res) => {
        questionModel.deleteQuestion(req.params['questionId'])
            .then(status => res.send(status))
    }

    app.post('/api/question', createQuestion);
    app.get('/api/question', findAllQuestions);
    app.get('/api/question/:questionId', findQuestionById);
    app.put('/api/question/:questionId', updateQuestion);
    app.delete('/api/question/:qustionId', deleteQuestion);
};