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
	var sql = 'SELECT `sendAuthorId`, `id`,`title` FROM `sendTable` WHERE sendAuthorId = "' + req.query.sendAuthorId + '"';


	connection.query(sql, function(err, result) {


		if (err) {
			res.json({
				status: false,
				msg: err
			})
		} else {

			var arr = [];


			result.forEach(function(v, k) {
				arr.push({
					send_id: v.id,
					title: v.title
				})
			})


			res.json({
				status: true,
				msg: arr
			})
		}



		// send_id: 'xxx',
		// 	title: '十一去哪玩'


	});

	// res.json({
	// 	status: true,
	// 	msg: req.query.sendAuthorId
	// });


});

module.exports = router;