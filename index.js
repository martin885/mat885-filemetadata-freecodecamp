'use strict'
const express = require('express');
const app = express();
var multer=require('multer');
var upload= multer({dest:'uploads/'});
var port = Number(process.env.PORT || 8080);


app.use('/', express.static(__dirname + '/public'));








app.post('/upload',upload.single('file'),function (req, res) {

if(req.file){
    res.json({size:req.file.size});
}
else{
    res.json({Error:'Select a file before'})
}
});

app.listen(port, function () {
    console.log('OK');
});