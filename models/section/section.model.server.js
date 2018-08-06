const mongoose = require('mongoose');
const sectionSchema = require('./section.schema.server');

const sectionModel = mongoose.model('SectionModel', sectionSchema);

findAllSections = () =>
    sectionModel.find();

findAllSectionsForCourse = courseId =>
    sectionModel.find({courseId: courseId});

findSectionById = sectionId =>
    sectionModel.findById(sectionId);

createSection = (section) => {
    return sectionModel.create(section);
}

updateSection = (sectionId, newSection) => {
    return sectionModel.update({_id: sectionId}, {
        $set: {
            title: newSection.title,
            seats: newSection.seats
        }
    });
}

deleteSection = (sectionId) => {
    return sectionModel.remove({_id: sectionId});
}

module.exports = {
    findAllSections,
    findAllSectionsForCourse,
    findSectionById,
    createSection,
    updateSection,
    deleteSection
};
