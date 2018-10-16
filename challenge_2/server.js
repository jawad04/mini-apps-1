var express = require('express');
var app = express();
//app.use(bodyParser.json());
var path = require('path');

app.get('/', function(req, res) {
  res.send('hello world from express');
});
app.use(express.static('client'));

app.listen(3000, () => {console.log('listening on port 3000')});
