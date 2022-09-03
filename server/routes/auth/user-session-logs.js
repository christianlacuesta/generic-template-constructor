const express = require('express');
const router = express.Router();
const userSessionLogsController = require('../../controllers/auth/user-session-logs');

router.get('/auth/user-session-log', userSessionLogsController.getUserSessionLogs);

router.get('/auth/user-session-log/:userSessionLogId', userSessionLogsController.getUserSessionLog);

router.post('/auth/user-session-log', [], userSessionLogsController.createUserSessionLog);

router.put('/auth/user-session-log/:userSessionLogId', [], userSessionLogsController.updateUserSessionLog);

router.delete('/auth/user-session-log/:userSessionLogId', userSessionLogsController.deleteUserSessionLog);

module.exports = router;