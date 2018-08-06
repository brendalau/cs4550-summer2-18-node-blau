module.exports = app => {

    const sectionModel = require('../models/section/section.model.server');

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

    app.get ('/api/section', findAllSections);
    app.get ('/api/course/:courseId/section', findAllSectionsForCourse);
    app.get('/api/section/:sectionId', findSectionById);
    app.post('api/course/:courseId/section', createSection);
    app.put('/api/section/:sectionId', updateSection);
    app.delete('/api/section/:sectionId', deleteSection);
};

