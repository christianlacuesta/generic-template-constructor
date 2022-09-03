const express = require('express');
const router = express.Router();
const rolesController = require('../../controllers/roles/roles');

router.get('/roles', rolesController.getRoles);

router.post('/roles/byId', [], rolesController.getRolesById);

router.post('/roles', [], rolesController.createRoles);

router.put('/roles/:roleId', [], rolesController.updateRoles);

router.delete('/roles/:roleId', rolesController.deleteRole);

module.exports = router;