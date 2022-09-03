// Sample Controller

const UserSessions = require('../../models/usersessions/usersessions');

exports.getUserSessions = (req, res, next) => {
    UserSessions.findAll()
    .then(users => { 
        res.status(200).json(users);
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getUserSessionById = (req, res, next) => {

    if (req.body.userSessionId && req.body.username) { 
        UserSessions.findAll({where : {
            userSessionId : req.body.userSessionId, 
            username: req.body.username, 
            transaction: req.body.transaction}})
        .then(users => { 
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        res.status(200).json(null);
    }

};

exports.createUserSession = async(req, res, next) => {

    UserSessions.create({
        userId: req.body.userId,
        idNo: req.body.idNo,
        staffId: req.body.staffId,
        username: req.body.username,
        password: req.body.password,
        transaction: req.body.transaction,
        appState: req.body.appState,
        createdById: req.body.createdById,
        createdByName: req.body.createdByName,
        updatedById: req.body.updatedById,
        updatedByName: req.body.updatedByName
    })
    .then(user => { 
        res.status(201).json({
            message: 'Post Success',
            post: user
        });
    })
    .catch(err => { 
        console.log(err) 
    });

};

exports.updateUserSession = (req, res, next) => {

    if (req.params && req.params.userSessionId) {

        const userSessionId = req.params.userSessionId;

        UserSessions.findByPk(userSessionId)
        .then(usersession => { 
            usersession.userId = req.body.userId,
            usersession.idNo = req.body.idNo,
            usersession.staffId = req.body.staffId,
            usersession.username = req.body.username,
            usersession.password = req.body.password,
            usersession.transaction = req.body.transaction,
            usersession.appState = req.body.appState,
            usersession.createdById = req.body.createdById,
            usersession.createdByName = req.body.createdByName,
            usersession.updatedById = req.body.updatedById,
            usersession.updatedByName = req.body.updatedByName
            return usersession.save();
        })
        .then(usersession => {
            res.status(201).json({
                message: 'Put Success',
                post: usersession
            });
        })
        .catch(err => {
            console.log(err)
        });
    } else {
        res.status(201).json({
            message: 'Put Failed',
            post: null
        });
    }

};
