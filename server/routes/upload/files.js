let express = require('express');
let router = express.Router();
let upload = require('../../helpers/multer');
 
const fileWorker = require('../../controllers/upload/files');
 
router.post('/file/upload/:interfaceId/:systemId/:organizationId/:itemName/:createdById/:createdByName/:updatedById/:updatedByName', upload.single("file"), fileWorker.uploadFile);
 
router.get('/file/info', fileWorker.listAllFiles);
 
router.get('/file/:fileId', fileWorker.downloadFile);

router.post('/file/download', [], fileWorker.downloadFile2);
 
module.exports = router;