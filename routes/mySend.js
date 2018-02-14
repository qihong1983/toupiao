var express = require('express');
var router = express.Router();

var mysql = require('mysql');



// var connection = mysql.createConnection({
// 	host: '39.106.140.80',
// 	user: 'root',
// 	password: 'Qihong38752673',
// 	database: 'toupiao',
// 	useConnectionPooling: true
// });

router.get('/', function(req, res, next) {



	var connection = mysql.createConnection({
		host: '39.106.140.80',
		user: 'root',
		password: 'Qihong38752673',
		database: 'toupiao',
		useConnectionPooling: true
	});

	connection.connect();



	//SQL语句
	var sql = 'SELECT icon FROM lunbo';

	res.json({
		status: true,
		msg: req.query.sendAuthorId
	});


});

module.exports = router;