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

	var sql = 'SELECT `id`, `imgUrl`,`title`,`number`,`send_id` FROM `sendOption` where `send_id` = "' + req.query.send_id + '"';



	connection.query(sql, function(err, result) {

		var arr = [];
		// id: "投票项id",
		// imgUrl: "图片xxx.png",
		// title: "投票项标题",
		// number: 3,
		// send_id: "投票主题id"

		// console.log(result, 'result');

		result.forEach(function(v, k) {

			arr.push({
				id: v.id,
				imgUrl: v.imgUrl,
				title: v.title,
				number: v.number,
				send_id: v.send_id
			});
		});

		res.json({
			status: true,
			msg: '成功',
			data: arr
		})
	});
	// id: "投票项id",
	// imgUrl: "图片xxx.png",
	// title: "投票项标题",
	// number: 3,
	// send_id: "投票主题id"

	// res.json({
	// 	status: true,
	// 	msg: '成功'
	// })
});

module.exports = router;