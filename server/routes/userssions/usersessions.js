const express = require('express');
const router = express.Router();
const userSessionController = require('../../controllers/usersessions/usersessions');

router.get('/usersession', userSessionController.getUserSessions);

router.post('/usersession/byid', [], userSessionController.getUserSessionById);

router.post('/usersession', [], userSessionController.createUserSession);

router.put('/usersession/:userSessionId', [], userSessionController.updateUserSession);

module.exports = router;

