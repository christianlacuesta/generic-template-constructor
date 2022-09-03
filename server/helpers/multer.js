const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "files");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `${req.params.organizationId}-${req.params.systemId}-${req.params.interfaceId}-${req.params.itemName.toLocaleLowerCase()}-${file.originalname.toLocaleLowerCase()}`);
    },
  });

let upload = multer({storage: multerStorage});

module.exports = upload;