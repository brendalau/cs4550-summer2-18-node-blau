const mongoose = require('mongoose');
const enrollmentSchema = require('./enrollment.schema.server');

const enrollmentModel = mongoose.model('EnrollmentModel', enrollmentSchema);

findAllEnrollmentsForStudent = studentId => {
    return enrollmentModel.find({student: studentId})
        .populate('section')
        .exec();
}

findEnrollmentByCredentials = (sectionId, studentId) =>
    enrollmentModel.findOne({section: sectionId, student: studentId});

enroll = enrollment =>
    enrollmentModel.create(enrollment);

unenroll = enrollmentId =>
    enrollmentModel.delete({_id: enrollmentId});

module.exports = {
    findAllEnrollmentsForStudent,
    findEnrollmentByCredentials,
    enroll,
    unenroll
};