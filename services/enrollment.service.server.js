module.exports = app => {

    const enrollmentModel = require('../models/enrollment/enrollment.model.server');

    findAllSectionsForStudent = (req, res) => {
        console.log('find all called');
        enrollmentModel.findAllSectionsForStudent(req.params['sid'])
            .then(enrollments => res.send(enrollments));
    }

    enroll = (req, res) => {
        enrollmentModel.enroll(req.body);
    };

    unenroll = (req, res) => {
        enrollmentModel.unenroll(req.body);
    };

    app.get('/api/student/:sid/section', findAllSectionsForStudent);
    app.post('/api/student/:sid/section/:kid', enroll);
    app.delete('/api/student/:sid/section/:kid', unenroll);
};