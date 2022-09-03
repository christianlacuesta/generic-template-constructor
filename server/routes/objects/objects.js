//Sample Route

const express = require('express');
const router = express.Router();
const objectsController = require('../../controllers/objects/objects');

router.get('/objects', objectsController.getObjects);

router.post('/objects/byId', [], objectsController.getObjectsById);

router.post('/objects', [], objectsController.createObjects);

router.put('/objects/:objectId', [], objectsController.updateObject);

router.delete('/objects/:objectId', objectsController.deleteObject);

module.exports = router;

