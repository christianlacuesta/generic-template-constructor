
const UserSessions = require('../../models/auth/user-sessions');

exports.getUserIp = (req, res, next) => {
    var ip;
    if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
    } else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
    } else {
    ip = req.ip;
    }
    return ip;
}

exports.getUserSessions = (req, res, next) => {
    UserSessions.findAll()
    .then(userSessions => { 
        res.status(200).json(userSessions);
    })
    .catch(err => {
        console.log(err)
    });
};

exports.getUserSession = (req, res, next) => {
    const userSessionId = req.params.userSessionId;
    UserSessions.findByPk(userSessionId)
    .then(userSession => { 
        res.status(200).json(userSession);
    })
    .catch(err => {
        console.log(err)
    });
};

exports.createUserSession = (req, res, next) => {
    console.log(req.body)
    UserSessions.create({
        mode: req.body.mode,
        organization: req.body.organization, 
        system: req.body.system, 
        interface: req.body.interface, 
        step: req.body.step,
        form: req.body.form,
        activeStep: req.body.activeStep,
        record: req.body.record,
        formMode: req.body.formMode,
        clientIpAddress: req.body.clientIpAddress, 
        userId: req.body.userId,
        username: req.body.username,
        password: req.body.password,
        roleType: req.body.roleType,
        accessType: req.body.accessType,
        status: req.body.status, 
        loginAt: req.body.loginAt, 
        logoutAt: req.body.logoutAt, 
        createdById: req.body.createdById,
        createdByName: req.body.createdByName, 
        updatedById: req.body.updatedById, 
        updatedByName: req.body.updatedByName
    })
    .then(userSession => { 
        res.status(201).json({
            message: 'Post Success',
            post: userSession
        });
    })
    .catch(err => { 
        console.log(err) 
    });
};

exports.updateUserSession = (req, res, next) => {
    const userSessionId = req.params.userSessionId;
    UserSessions.findByPk(userSessionId)
    .then(userSession => { 
        userSession.mode = req.body.mode,
        userSession.organization = req.body.organization, 
        userSession.system = req.body.system, 
        userSession.interface = req.body.interface, 
        userSession.step = req.body.step,
        userSession.form = req.body.form,
        userSession.activeStep = req.body.activeStep,
        userSession.record = req.body.record,
        userSession.formMode = req.body.formMode,
        userSession.clientIpAddress = req.body.clientIpAddress, 
        userSession.userId = req.body.userId,
        userSession.username = req.body.username,
        userSession.password = req.body.password,
        userSession.roleType = req.body.roleType,
        userSession.accessType = req.body.accessType,
        userSession.status = req.body.status,
        userSession.loginAt = req.body.loginAt,
        userSession.logoutAt = req.body.logoutAt, 
        userSession.createdById = req.body.createdById,
        userSession.createdByName = req.body.createdByName, 
        userSession.updatedById = req.body.updatedById, 
        userSession.updatedByName = req.body.updatedByName
        return userSession.save();
    })
    .then(userSession => {
        res.status(201).json({
            message: 'Put Success',
            post: userSession
        });
    })
    .catch(err => {
        console.log(err)
    });
};

exports.deleteUserSession = (req, res, next) => {
    const userSessionId = req.params.userSessionId;
    UserSessions.findByPk(userSessionId)
    .then(config => { 
        return config.destroy();
    })
    .then(userSession => {
        res.status(201).json({
            message: 'Delete Success',
            post: userSession
        });
    })
    .catch(err => {
        console.log(err)
    });
};

exports.getLastUserSession = (req, res, next) => {
    const username = req.params.username;
    UserSessions.findOne({
        where: { username: username},
        order: [ [ 'createdAt', 'DESC' ]],
    })
    .then(userInfo => { 
        res.status(200).json(userInfo);
    })
    .catch(err => {
        console.log(err)
    });
};