const express = require('express');
const router = express.Router();
const authUserRoleController = require('../../controllers/auth/user-role');

router.post('/auth/user-role/', [], authUserRoleController.getUserRole);

module.exports = router;