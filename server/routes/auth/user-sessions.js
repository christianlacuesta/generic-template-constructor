const express = require('express');
const router = express.Router();
const userSessionsController = require('../../controllers/auth/user-sessions');

router.get('/auth/user-session-ip', userSessionsController.getUserIp);

router.get('/auth/user-session', userSessionsController.getUserSessions);

router.get('/auth/user-session/:userSessionId', userSessionsController.getUserSession);

router.post('/auth/user-session', [], userSessionsController.createUserSession);

router.put('/auth/user-session/:userSessionId', [], userSessionsController.updateUserSession);

router.delete('/auth/user-session/:userSessionId', userSessionsController.deleteUserSession);

router.get('/auth/user-session/username/:username', userSessionsController.getLastUserSession);

module.exports = router;