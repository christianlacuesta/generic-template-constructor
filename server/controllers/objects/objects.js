// Sample Controller

const Objects = require('../../models/objects/objects');

exports.getObjects = (req, res, next) => {
    Objects.findAll()
    .then(objects => { 
        res.status(200).json(objects);
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getObjectsById = (req, res, next) => {

    if (req.body.objectId && req.body.objectId) { 
        Objects.findAll({where : {
            objectId : req.body.objectId}})
        .then(object => { 
            res.status(200).json(object);
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        res.status(200).json(null);
    }

};

exports.createObjects = async(req, res, next) => {

    Objects.create({
        name: req.body.name,
        label: req.body.label,
        label2: req.body.label2,
        config: req.body.config,
        createdById: req.body.createdById,
        createdByName: req.body.createdByName,
        updatedById: req.body.updatedById,
        updatedByName: req.body.updatedByName
    })
    .then(object => { 
        res.status(201).json({
            message: 'Post Success',
            post: object
        });
    })
    .catch(err => { 
        console.log(err) 
    });

};

exports.updateObject = (req, res, next) => {

    if (req.params && req.params.objectId) {

        const objectId = req.params.objectId;

        Objects.findByPk(objectId)
        .then(object => { 
            object.name = req.body.name,
            object.label = req.body.label,
            object.label2 = req.body.label2,
            object.config = req.body.config,
            object.createdById = req.body.createdById,
            object.createdByName = req.body.createdByName,
            object.updatedById = req.body.updatedById,
            object.updatedByName = req.body.updatedByName
            return object.save();
        })
        .then(object => {
            res.status(201).json({
                message: 'Put Success',
                post: object
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

exports.deleteObject = (req, res, next) => {
    const objectId = req.params.objectId;
        Objects.findByPk(objectId)
        .then(object => { 
            return object.destroy();
        })
        .then(object => {
            res.status(201).json({
                message: 'Delete Success',
                post: object
            });
        })
        .catch(err => {
            console.log(err)
        });
}