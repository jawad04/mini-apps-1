const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, './client/dist')));

// app.get('/', function(req, res) {
// 	res.send('Hello there');
// });

app.listen(port, () => {
	console.log('listening to port 3000');
})