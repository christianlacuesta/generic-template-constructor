//Sample Route

const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/users/users');

router.get('/users', usersController.getUsers);

router.post('/users/onLogin', [], usersController.onLogin);

router.post('/users', [], usersController.createUser);

router.put('/users/:userId', [], usersController.updateUser);

router.delete('/users/:userId', usersController.deleteUser);

module.exports = router;

