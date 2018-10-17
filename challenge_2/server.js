
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const Parser = require('./parser.js');
const parser = new Parser();
const fs = require('fs');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './client')));

app.post('/upload_json', (req, res) => {
	var json = JSON.parse(req.body.text);
	res.set('Content-Type', 'text/plain');
	res.end(parser.cvsCreator(json));
});
app.listen(3000, () => {
	console.log("listening on port 3000");
});




