// Sample Controller

const Roles = require('../../models/roles/roles');

exports.getRoles = (req, res, next) => {
    Roles.findAll()
    .then(roles => { 
        res.status(200).json(roles);
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getRolesById = (req, res, next) => {

    if (req.body.roleId && req.body.roleId) { 
        Roles.findAll({where : {
            roleId : req.body.roleId}})
        .then(role => { 
            res.status(200).json(role);
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        res.status(200).json(null);
    }

};
exports.createRoles = async(req, res, next) => {

    Roles.create({
        name: req.body.name,
        label: req.body.label,
        label2: req.body.label2,
        createdById: req.body.createdById,
        createdByName: req.body.createdByName,
        updatedById: req.body.updatedById,
        updatedByName: req.body.updatedByName
    })
    .then(roles => { 
        res.status(201).json({
            message: 'Post Success',
            post: roles
        });
    })
    .catch(err => { 
        console.log(err) 
    });

};

exports.updateRoles = (req, res, next) => {

    if (req.params && req.params.roleId) {

        const roleId = req.params.roleId;

        Roles.findByPk(roleId)
        .then(role => { 
            role.name = req.body.name,
            role.label = req.body.label,
            role.label2 = req.body.label2,
            role.createdById = req.body.createdById,
            role.createdByName = req.body.createdByName,
            role.updatedById = req.body.updatedById,
            role.updatedByName = req.body.updatedByName
            return role.save();
        })
        .then(role => {
            res.status(201).json({
                message: 'Put Success',
                post: role
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

exports.deleteRole = (req, res, next) => {
    const roleId = req.params.roleId;
        Roles.findByPk(roleId)
        .then(role => { 
            return role.destroy();
        })
        .then(role => {
            res.status(201).json({
                message: 'Delete Success',
                post: role
            });
        })
        .catch(err => {
            console.log(err)
        });
}