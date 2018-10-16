var express = require("express");
const models = require("./../models");
const uuidv1 = require("uuid/v1");
var multer  = require("multer");
var fs = require("fs");
var upload = multer({ dest: "uploads/" });
var router = express.Router();

router.post("/", upload.single("image"),  (req, res, next) => {
	fs.readFile(req.file.path, (err, data) => {
		models.images.create({
			uniqueId: uuidv1(),
			jsonData: "",
			mime: req.file.mimetype,
			size: req.file.size,
			profile_file: "",
			images: data
		}).then(result => {
            delete result.images
			res.send(result);
		}).catch(err => {
			res.send(err);
		});
        
	});
});

router.get('/:id', (req, res) => {
    models.images.findOne({
        where: { uniqueId : req.params.id },
    }).then(result => {
		
        var img = new Buffer(result.images, 'base64');
        res.writeHead(200, {
            'Content-Type': result.mime,
            'Content-Length': img.length,
            'Cache-Control': 'public, max-age=31557600'
        });
        res.end(img);
        
    }).catch(err => {
        res.json({
            error: 'error',
        });
    })
});

module.exports = router;