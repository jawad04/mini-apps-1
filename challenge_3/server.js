const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


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
  connection.query('SELECT * FROM checkout', function(error, results, fields) {
  	if (error) {
  	  callback(error, null);
  	} else {
  	  callback(null, results);
  	}
  });
}

var insertOne = function(count, name, email, password, line1, line2, city, state, zipCode, phone, creditCard, expDate, CVV, billingZip, callback) {
  const query = `INSERT INTO checkout (count, name, email, password, line1, line2, city, state, zipCode, phone, creditCard, expDate, CVV, billingZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  connection.query(query,[count, name, email, password, line1, line2, city, state, zipCode, phone, creditCard, expDate, CVV, billingZip, callback], function(error, result, fields) {
  	callback(error, null);
  });
};














app.listen(port, () => {
	console.log('Listening to port 3000');
});

