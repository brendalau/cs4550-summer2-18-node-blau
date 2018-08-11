module.exports = app => {

    const sectionModel = require('../models/section/section.model.server');
    const enrollmentModel = require('../models/enrollment/enrollment.model.server');

    findAllSections = (req, res) => {
        sectionModel.findAllSections()
            .then(sections => res.send(sections));
    }

    findAllSectionsForCourse = (req, res) => {
        sectionModel.findAllSectionsForCourse(req.params['courseId'])
            .then(sections => res.send(sections));
    }

    findSectionById = (req, res) => {
        sectionModel.findOne(req.params['courseId'])
            .then(sections => res.send(sections));
    }

    createSection = (req, res) => {
        console.log('create called');
        sectionModel.createSection(req.body)
            .then(response => res.sendStatus(200));
    }

    updateSection = (req, res) => {
        sectionModel.updateSection(req.params['sectionId'], req.body)
            .then(response => res.sendStatus(200));
    }

    deleteSection = (req, res) => {
        sectionModel.deleteSection(req.params['sectionId'])
            .then(response => res.sendStatus(200));
    }

    enroll = (req, res) => {
        var sectionId = req.params.sectionId;
        var currentUser = req.session.currentUser;
        var studentId = currentUser._id;
        var enrollment = {
            section: sectionId,
            student: studentId
        };

        sectionModel.decrementSeats(sectionId)
            .then(function () {
                return enrollmentModel.enroll(enrollment)
            })
            .then(function (enrollment) {
                res.json(enrollment);
            })
    }

    unenroll = (req, res) => {
        var sectionId = req.params.sectionId;
        var currentUser = req.session.currentUser;
        var studentId = currentUser._id;

        sectionModel.incrementSeats(sectionId)
            .then(response => {
                return enrollmentModel.findEnrollmentByCredentials(sectionId, studentId);
            })
            .then(enrollment => {
                return enrollmentModel.unenroll(enrollment);
            })
            .then(enrollment => {
                res.json(enrollment);
            })
    }

    findAllEnrollmentsForStudent = (req, res) => {
        enrollmentModel.findAllEnrollmentsForStudent(req.params['studentId'])
            .then(enrollments => {
                res.send(enrollments);
            });
    }

    findEnrollmentByCredentials = (req, res) => {
        var sectionId = req.params['sectionId'];
        var currentUser = req.session.currentUser;
        var studentId = currentUser._id;

        enrollmentModel.findEnrollmentByCredentials(sectionId, studentId)
            .then(enrollment => {
                res.send(enrollment);
            });
    }

    app.get('/api/section', findAllSections);
    app.get('/api/course/:courseId/section', findAllSectionsForCourse);
    app.get('/api/section/:sectionId', findSectionById);
    app.post('api/course/:courseId/section', createSection);
    app.put('/api/section/:sectionId', updateSection);
    app.delete('/api/section/:sectionId', deleteSection);
    app.put('/api/section/:sectionId/enroll', enroll);
    app.delete('/api/section/:sectionId/unenroll', unenroll);
    app.get('/api/student/:studentId/section', findAllEnrollmentsForStudent);
    app.get('/api/section/:sectionId/confirm', findEnrollmentByCredentials);
};