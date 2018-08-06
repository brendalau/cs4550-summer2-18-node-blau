module.exports = app => {

    const userModel = require('../models/user/user.model.server');

    findAllUsers = (req, res) =>
        userModel.findAllUsers()
            .then(users => {
                res.send(users);
            });

    login = (req, res) => {
        const user = req.body;
        userModel.findUserByCredentials(user.username, user.password)
            .then(u => {
                if (u) {
                    req.session['currentUser'] = u;
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
            });
    };

    currentUser = (req, res) => {
        const currentUser = req.session['currentUser'];
        if (currentUser) {
            userModel.findUserByIdExpanded(currentUser._id)
                .then(user => res.send(user));
        } else {
            res.sendStatus(403);
        }
    }

    register = (req, res) => {
        const newUser = req.body;
        userModel.findUserByUsername(newUser.username)
            .then(user => {
                if (user === null) {
                    return userModel.createUser(newUser);
                } else {
                    res.sendStatus(404);
                }
            })
            .then(u => {
                req.session['currentUser'] = u;
                res.sendStatus(200);
            });
    }

    logout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }

    updateUser = (req, res) => {
        userModel.updateUser(req.body)
            .then(response => res.sendStatus(200));
    }

    app.get ('/api/currentUser', currentUser);
    app.get ('/api/user', findAllUsers);
    app.post('/api/login', login);
    app.post('/api/register', register);
    app.post('/api/logout', logout);
    app.put('/api/profile', updateUser);
};