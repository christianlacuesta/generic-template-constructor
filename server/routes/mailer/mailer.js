const express = require('express');
const router = express.Router();
const mailerController = require('../../controllers/mailer/mailer');

router.post('/mailer/send-workflow', [], mailerController.sendWorkflowMail);

module.exports = router;