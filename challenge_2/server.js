
/****************SERVER********************/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const Parser = require('./parser.js');
const parser = new Parser();
const fs = require('fs');
const multer = require('multer');

// midleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './client')));
app.use(multer().single('text'));
//routes
app.post('/upload_json', (req, res) => {
	console.log(req.file.buffer.toString());
	var json = JSON.parse(req.file.buffer.toString());
	res.set('Content-Type', 'text/plain');
	res.send(parser.cvsCreator(json));
});
app.listen(3000, () => {
	console.log("listening on port 3000");
});




