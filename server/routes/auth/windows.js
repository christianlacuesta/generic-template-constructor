const express = require('express');
const router = express.Router();

const windowsController = require('../../controllers/auth/windows');

router.post('/auth/windows-auth/', [], windowsController.authenticate);

module.exports = router;