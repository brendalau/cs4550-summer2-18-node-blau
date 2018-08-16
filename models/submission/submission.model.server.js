const mongoose = require('mongoose')
const submissionSchema = require('./submission.schema.server');
const submissionModel = mongoose.model('SubmissionModel', submissionSchema);

createSubmission = submission =>
    submissionModel.create(submission);

findSubmissionById = submissionId => {
    return submissionModel.findById(submissionId)
        .populate({
          path: 'quiz',
          populate: {
              path: 'questions'
          }
         })
        .populate('student')
        .populate('answers')
        .populate('answers.question')
        .exec();
}

findAllSubmissionsForStudent = studentId =>
    submissionModel.find({student: studentId});

findAllSubmissionsForQuiz = quizId =>
    submissionModel.find({quiz: quizId})
        .populate({
          path: 'quiz',
          populate: {
            path: 'questions'
          }
        })
        .populate('student')
        .exec();

module.exports = {
    createSubmission,
    findSubmissionById,
    findAllSubmissionsForStudent,
    findAllSubmissionsForQuiz
}