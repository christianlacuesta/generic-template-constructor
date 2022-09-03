const stream = require('stream');
var path = require('path');
const Files = require('../../models/upload/files');


exports.uploadFile = (req, res) => {

	Files.create({
        interfaceId: req.params.interfaceId,
        systemId: req.params.systemId,
        organizationId: req.params.organizationId,
		type: req.file.mimetype,
		name: req.file.originalname,
		data: req.file.buffer,
        createdById: req.params.createdById,
        createdByName: req.params.createdByName,
        updatedById: req.params.updatedById,
        updatedByName: req.params.updatedByName
	}).then(file => {
		res.json({msg:'File uploaded successfully! -> filename = ' + req.file.originalname, file: file});
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}

exports.listAllFiles = (req, res) => {
	Files.findAll({attributes: ['fileId', 'name']}).then(files => {
	  res.json(files);
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}

exports.downloadFile = (req, res) => {
	Files.findByPk(req.params.fileId).then(file => {
		console.log('xxxxx', file)
		var fileContents = 'http://localhost:3000/files/1-0-1-scan-0002-rotated-2.jpg';
		//var fileContents = Buffer.from(file.data, "base64");
		var readStream = new stream.PassThrough();
		readStream.end(fileContents);
		
		res.set('Content-disposition', 'attachment; filename=' + file.name);
		res.set('Content-Type', file.type);

		readStream.pipe(res);
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}

exports.downloadFile2 = (req, res) => {
	var fileContents = path.join(__dirname,  '../../') + req.body.fileLink
	res.download(fileContents);
}


