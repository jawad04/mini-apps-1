const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//app.use(express.static('public')
//app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
// app.get('/', function(req, res) {
// 	res.send('Get request is working');
// });
app.listen(port, () => {
	console.log('Listening to port 3000');
});

