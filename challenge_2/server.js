
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');

app = express();
app.use(express.static('./client'));

app.use(parser.json());
app.use(morgan('dev'));

port = 3000;
app.listen(port);
console.log(`CSV istening on port ${port}...`);

app.get('/', (req, res) => {
  res.render(path.join(__dirname, './client/index.html'));
});

app.post('/upload_json', (req, res) => {
	console.log(req.body)
})