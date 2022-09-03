const express = require('express');
const router = express.Router();
const authUserInfoController = require('../../controllers/auth/user-info');

router.get('/auth/user-info/:username', authUserInfoController.getUserInfo);


module.exports = router;