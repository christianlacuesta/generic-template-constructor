// Sample Controller

const Users = require('../../models/users/users');
const sequelize = require('../../helpers/database');
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getUsers = (req, res, next) => {
    Users.findAll()
    .then(users => { 
        res.status(200).json(users);
    })
    .catch(err => {
        console.log(err);
    });
};

exports.onLogin = async(req, res, next) => {

    const userResponse = await new Promise((resolve, reject) => { 
        return Users.findAll({
            where: { username: req.body.username}
        }).then(user => {
            resolve(user)
        }).catch(err => {

            console.log(err);
        })
    });

    //validation for the response of users


    //for Password Decryption

    if  (userResponse && userResponse.length > 0) {
        const match = await bcrypt.compare(req.body.password,  userResponse[0].password);

        if (match) {
            res.status(201).json({
                message: 'User Authentication Success',
                post: userResponse[0]
            });
        } else {
            res.status(201).json({
                message: 'User Authentication Failed',
                post: null
            });
        }
    } else {
        res.status(201).json({
            message: 'User Authentication Failed',
            post: null
        });
    }

}

exports.createUser = async(req, res, next) => {

    const records = sequelize.query(`SELECT * FROM sanctionsdb.users where idNo = :idNo`, {
        replacements: { idNo: req.body.idNo},
        type: QueryTypes.SELECT
    });

    const isExisted = await new Promise((resolve, reject) => { 
        records.then(users => { 
            resolve(users);
        })
        .catch(err => {
            console.log(err)
        });

    });


    if (isExisted && isExisted.length > 0) {

        res.status(201).json({
            message: 'User Already Existed',
            post: isExisted
        });  

    } else {

        // Password Encryption Using Bcrypt

        const hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
              if (err) reject(err)
              resolve(hash)
            });
        })
    
        Users.create({
            idNo: req.body.idNo,
            staffId: req.body.staffId,
            username: req.body.username,
            password: hashedPassword,
            accessType: req.body.accessType,
            title: req.body.title,
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
            nationality: req.body.nationality,
            organization: req.body.organization,
            department: req.body.department,
            section: req.body.section,
            position: req.body.position,
            email: req.body.email,
            phone: req.body.phone,
            mobile: req.body.mobile,
            groups: req.body.groups,
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
    }


};

exports.updateUser = (req, res, next) => {
    const userId = req.params.userId;
    Users.findByPk(userId)
    .then(user => { 
        user.idNo = req.body.idNo,
        user.staffId = req.body.staffId,
        user.username = req.body.username,
        user.password = req.body.password,
        user.accessType = req.body.accessType,
        user.title = req.body.title,
        user.firstName = req.body.firstName,
        user.middleName = req.body.middleName,
        user.lastName = req.body.lastName,
        user.gender = req.body.gender,
        user.dateOfBirth = req.body.dateOfBirth,
        user.nationality = req.body.nationality,
        user.organization = req.body.organization,
        user.department = req.body.department,
        user.section = req.body.section,
        user.position = req.body.position,
        user.email = req.body.email,
        user.phone = req.body.phone,
        user.mobile = req.body.mobile,
        user.groups = req.body.groups,
        user.createdById = req.body.createdById,
        user.createdByName = req.body.createdByName,
        user.updatedById = req.body.updatedById,
        user.updatedByName = req.body.updatedByName
        return user.save();
    })
    .then(user => {
        res.status(201).json({
            message: 'Put Success',
            post: user
        });
    })
    .catch(err => {
        console.log(err)
    });
};

exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;
    Users.findByPk(userId)
    .then(user => { 
        return user.destroy();
    })
    .then(user => {
        res.status(201).json({
            message: 'Delete Success',
            post: user
        });
    })
    .catch(err => {
        console.log(err)
    });
};