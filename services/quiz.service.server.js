module.exports = app => {

    const quizModel = require('../models/quiz/quiz.model.server');
    const questionModel = require('../models/question/question.model.server');
    const submissionModel = require('../models/submission/submission.model.server');

    findAllQuizzes = (req, res) => {
        quizModel.findAllQuizzes()
            .then(quizzes => res.send(quizzes))
    }

    findQuizById = (req, res) => {
        quizModel.findQuizById(req.params['quizId'])
            .then(quiz => res.send(quiz))
    }

    findAllQuestions = (req, res) => {
        questionModel.findAllQuestions()
            .then(questions => res.send(questions))
    }

    findQuestionById = (req, res) => {
        questionModel.findQuestionById(req.params['questionId'])
            .then(question => res.send(question))
    }

    createSubmission = (req, res) => {
        submissionModel.createSubmission(req.body)
            .then(response => res.sendStatus(200));
    }

    findSubmissionById = (req, res) => {
        submissionModel.findSubmissionById(req.params['submissionId'])
            .then(submission => res.send(submission));
    }

    findAllSubmissionsForStudent = (req, res) => {
        submissionModel.findAllSubmissionsForStudent(req.params['quizId'])
            .then(submissions => res.send(submissions));
    }

    findAllSubmissionsForQuiz = (req, res) => {
        submissionModel.findAllSubmissionsForQuiz(req.params['quizId'])
            .then(submissions => res.send(submissions));
    }

    app.get('/api/quiz', findAllQuizzes);
    app.get('/api/quiz/:quizId', findQuizById);
    app.get('/api/question', findAllQuestions);
    app.get('/api/question/:questionId', findQuestionById);
    app.post('/api/quiz/:quizId/submission', createSubmission);
    app.get('/api/quiz/:quizId/submission/:submissionId', findSubmissionById);
    app.get('/api/quiz/:quizId/submission', findAllSubmissionsForStudent);
    app.get('/api/quiz/:quizId/submissions', findAllSubmissionsForQuiz);
};