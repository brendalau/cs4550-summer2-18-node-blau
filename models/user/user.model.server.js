const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');

const userModel = mongoose.model('UserModel', userSchema);

findAllUsers = () =>
    userModel.find();

findUserByUsername = username =>
    userModel.findOne({username: username});

findUserByCredentials = (username, password) =>
    userModel.findOne({username: username, password: password});

findUserById = userId =>
    userModel.findById(userId);

findUserByIdExpanded = userId =>
    userModel.findById(userId)
        .populate('sections')
        .exec()

createUser = user =>
    userModel.create(user);

updateUser = (newUser) =>
    userModel.update({_id: newUser._id}, {
        $set: {
            password: newUser.password,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            phoneNumber: newUser.phoneNumber,
            email: newUser.email,
            address: newUser.address
        }
    });

deleteUser = userId =>
    userModel.remove({_id: userId});

module.exports = {
    findAllUsers,
    findUserByUsername,
    findUserByCredentials,
    findUserById,
    findUserByIdExpanded,
    createUser,
    updateUser,
    deleteUser
}