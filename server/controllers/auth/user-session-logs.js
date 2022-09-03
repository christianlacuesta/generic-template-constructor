
const UserSessionLogs = require('../../models/auth/user-session-logs');

exports.getUserSessionLogs = (req, res, next) => {
    UserSessionLogs.findAll()
    .then(userSessionLogs => { 
        res.status(200).json(userSessionLogs);
    })
    .catch(err => {
        console.log(err)
    });
};

exports.getUserSessionLog = (req, res, next) => {
    const userSessionLogId = req.params.userSessionLogId;
    UserSessionLogs.findByPk(userSessionLogId)
    .then(userSessionLog => { 
        res.status(200).json(userSessionLog);
    })
    .catch(err => {
        console.log(err)
    });
};

exports.createUserSessionLog = (req, res, next) => {
    UserSessionLogs.create({
        userSessionId: req.body.userSessionId,
        transaction: req.body.transaction,
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
    .then(userSessionLog => { 
        res.status(201).json({
            message: 'Post Success',
            post: userSessionLog
        });
    })
    .catch(err => { 
        console.log(err) 
    });
};

exports.updateUserSessionLog = (req, res, next) => {
    const userSessionLogId = req.params.userSessionLogId;
    UserSessionLogs.findByPk(userSessionLogId)
    .then(userSessionLog => { 
        userSessionLog.userSessionId = req.body.userSessionId,
        userSessionLog.transaction = req.body.transaction,
        userSessionLog.mode = req.body.mode,
        userSessionLog.organization = req.body.organization, 
        userSessionLog.system = req.body.system, 
        userSessionLog.interface = req.body.interface, 
        userSessionLog.step = req.body.step,
        userSessionLog.form = req.body.form,
        userSessionLog.activeStep = req.body.activeStep,
        userSessionLog.record = req.body.record,
        userSessionLog.formMode = req.body.formMode,
        userSessionLog.clientIpAddress = req.body.clientIpAddress, 
        userSessionLog.userId = req.body.userId,
        userSessionLog.username = req.body.username,
        userSessionLog.password = req.body.password,
        userSessionLog.roleType = req.body.roleType,
        userSessionLog.accessType = req.body.accessType,
        userSessionLog.status = req.body.status,
        userSessionLog.loginAt = req.body.loginAt,
        userSessionLog.logoutAt = req.body.logoutAt, 
        userSessionLog.createdById = req.body.createdById,
        userSessionLog.createdByName = req.body.createdByName, 
        userSessionLog.updatedById = req.body.updatedById, 
        userSessionLog.updatedByName = req.body.updatedByName
        return userSessionLog.save();
    })
    .then(userSessionLog => {
        res.status(201).json({
            message: 'Put Success',
            post: userSessionLog
        });
    })
    .catch(err => {
        console.log(err)
    });
};

exports.deleteUserSessionLog = (req, res, next) => {
    const userSessionLogId = req.params.userSessionLogId;
    UserSessionLogs.findByPk(userSessionLogId)
    .then(config => { 
        return config.destroy();
    })
    .then(userSessionLog => {
        res.status(201).json({
            message: 'Delete Success',
            post: userSessionLog
        });
    })
    .catch(err => {
        console.log(err)
    });
};
