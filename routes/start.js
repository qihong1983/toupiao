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

	// var sql = 'SELECT `id`, `title`, `sendAuthor`, `desc` FROM `sendTable` WHERE `id` = "' + req.query.send_id + '"';
	var sql = "INSERT INTO `number`( `send_id`, `numberIcon`, `numberName`, `send_option_id`) VALUES (21,'xxx.png','小洪',3)";

	//update student set score=score+1 where id = 1

	console.log(sql, 'sql');
	var arr = [];

	connection.query(sql, function(err, result) {

		console.log(err, result);

		if (err) {
			res.json({
				status: false,
				msg: '失败'
			})
		} else {
			// var sql2 = "update sendOption set number = number + 1 where  id= " + req.query.send_option_id;
			var sql2 = "update sendOption set number = number + 1 where id = 3";

			connection.query(sql2, function(err1, result1) {
				res.json({
					status: true,
					msg: '成功'
				})
			});
		}
		// result.forEach(function(v, k) {

		// 	// send_id: 'xxx',
		// 	// title: '十一去哪玩'

		// 	console.log(result, 'result');
		// 	arr.push({
		// 		send_id: v.id,
		// 		title: v.title,
		// 		sendAuthor: v.sendAuthor,
		// 		desc: v.desc
		// 	});

		// 	console.log(arr);

		// });

		// res.json({
		// 	status: true,
		// 	msg: '成功',
		// 	data: result
		// })
	});

});

module.exports = router;