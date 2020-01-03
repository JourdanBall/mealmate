const express = require('express');
const router = express.Router();
const uploadController = require('../controller/uploadController');

router.post('/test-upload', uploadController.uploadPicture,  (req,res)=>{
    res.sendStatus(200);
})
module.exports = router