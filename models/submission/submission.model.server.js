const mongoose = require('mongoose')
const submissionSchema = require('./submission.schema.server');
const submissionModel = mongoose.model('SubmissionModel', submissionSchema);

createSubmission = submission =>
    submissionModel.create(submission)

findAllSubmissions = () =>
    submissionModel.find()

findAllSubmissionsForStudent = studentId =>
    submissionModel.find({student: studentId})

findSubmissionById = submissionId =>
    submissionModel.findById(submissionId)
        .populate('quiz')
        .populate('student')
        .populate('answers')
        .exec()

findAllSubmissionsForQuiz = quizId =>
    submissionModel.find({quiz: quizId})
        .populate('quiz')
        .populate('student')
        .populate('answers')
        .exec()

updateSubmission = (submissionId, newSubmission) =>
    submissionModel.update({_id: submissionId}, {
        $set: newSubmission
    })

deleteSubmission = submissionId =>
    submissionModel.remove({_id: submissionId})

module.exports = {
    createSubmission,
    findAllSubmissions,
    findAllSubmissionsForStudent,
    findSubmissionById,
    findAllSubmissionsForQuiz,
    updateSubmission,
    deleteSubmission
}