const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');

const userModel = mongoose.model('UserModel', userSchema);

createUser = user =>
    userModel.create(user);

findAllUsers = () =>
    userModel.find();

findUserByCredentials = (username, password) =>
    userModel.findOne({username: username, password: password});

findUserById = userId =>
    userModel.findById(userId);

updateUser = (userId, newUser) =>
    userModel.update({_id: userId}, {
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
    createUser,
    findAllUsers,
    findUserByCredentials,
    findUserById,
    updateUser,
    deleteUser
}