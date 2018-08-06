const mongoose = require('mongoose');
const enrollmentSchema = require('./enrollment.schema.server');

const enrollmentModel = mongoose.model('EnrollmentModel', enrollmentSchema);

findAllSectionsForStudent = studentId =>
     enrollmentModel.find({student: studentId})
        .populate('section')
        .exec();

enroll = enrollment =>
    enrollmentModel.create(enrollment);

unenroll = enrollmentId =>
    enrollmentModel.delete({_id: enrollmentId});

module.exports = {
    findAllSectionsForStudent,
    enroll,
    unenroll
};