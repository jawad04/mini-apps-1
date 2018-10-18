const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const mysql = require('mysql');

//app.use(express.static('public')
//app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
// app.get('/', function(req, res) {
// 	res.send('Get request is working');
// });

/*************** ADD DATABASE *************/
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'jawad',
	password: 'jawad123',
	database: 'checkout'
});

var getAll = function(callback) {
  connection.query('SELECT * FROM account', function(error, results, fields) {
  	if (error) {
  	  callback(error, null);
  	} else {
  	  callback(null, results);
  	}
  });
}

var insertOne = function(count, name, email, password, line1, line2, city, state, zipCode, phone, creditCard, expDate, CVV, billingZip, callback) {
  const query = `INSERT INTO checkout (count, name, email, password, line1, line2, city, state, zipCode, phone, creditCard, expDate, CVV, billingZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  connection.query(query,[count, name, email, password, line1, line2, city, state, zipCode, phone, creditCard, expDate, CVV, billingZip, callback], function(error, result, fields) {
  	callback(error, null);
  });
};


app.get('/checkout', function(req, res){
	getAll((err, results) => {
	  if (err) {
	  	res.status(500).send();
	  } else {
	  	res.send(results);

	  }
	})
})



app.post('/checkout', function(req, res) {
	insertOne(req.body.count, req.body.name, req.body.email, req.body.password, req.body.line1, req.body.line2, req.body.city, req.body.state, req.body.zipCode, req.body.phone, req.body.creditCard, req.body.expDate, req.body.CVV, req.body.billingZip, (err, result) => {
	  if (err) {
	  	res.status(500).send();
	  } else {
	  	res.status(200).send();
	  }
	})

});



app.listen(port, () => {
	console.log('Listening to port 3000');
});

