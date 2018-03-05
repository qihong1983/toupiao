var express = require('express');
var router = express.Router();

var mysql = require('mysql');

router.get('/', function(req, res, next) {

	var connection = mysql.createConnection({
		host: '39.106.140.80',
		user: 'root',
		password: 'Qihong38752673',
		database: 'toupiao',
		useConnectionPooling: true
	});

	connection.connect();


	if (req.query.myAbout) {
		var sql = 'SELECT `id`,`title` FROM `sendTable` WHERE `sendAuthorId`= "' + req.query.myAbout + '"';


		var arr = [];
		connection.query(sql, function(err, result) {


			result.forEach(function(v, k) {

				// send_id: 'xxx',
				// title: '十一去哪玩'

				arr.push({
					send_id: v.id,
					title: v.title
				});

			});


			res.json({
				status: true,
				msg: '返回成功',
				data: arr
			})

			// res.json({
			// 	status: true,
			// 	msg: req.query.myAbout
			// })
		});

	} else {



		res.json({
			status: false,
			msg: '没有传参'
		})
	}



	console.log(sql, 'sql');



});

module.exports = router;