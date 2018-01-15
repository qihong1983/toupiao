var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: '39.106.140.80',
	user: 'root',
	password: 'Qihong38752673',
	database: 'toupiao'
});

//执行创建连接 
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {

	// {
	// 	title: "xxxx",
	// 	desc: "xxxxxx",
	// 	option: [{
	// 		thumbTitle: "xxxx",
	// 		thumbImg: "xxxx"
	// 	}],
	// 	isStartTime: true,
	// 	startTime: "2017-12-30 15: 30",
	// 	endTime: "2017-12-30 23:30",
	// 	isPass: true,
	// 	password: "xxxx"
	// 	sendAuthorId: 'xx',
	// 	sendAuthor: '小洪'
	// 	sendAuthorIcon: 'xxx.png'
	// }



	// res.query = {
	// 	title: "xxxx",
	// 	desc: "xxxxxx",
	// 	option: [{
	// 		thumbTitle: "xxxx",
	// 		thumbImg: "xxxx"
	// 	}],
	// 	isStartTime: true,
	// 	startTime: "2017-12-30 15: 30",
	// 	endTime: "2017-12-30 23:30",
	// 	isPass: true,
	// 	password: "xxxx"
	// 	sendAuthorId: 'xx',
	// 	sendAuthor: '小洪'
	// 	sendAuthorIcon: 'xxx.png'
	// };


	// var currentPage = 1;
	// if (req.query.currentPage == undefined) {
	// 	currentPage = 1;
	// } else {
	// 	currentPage = req.query.currentPage;
	// }

	// console.log(req.query.title);


	//SQL语句
	var sql = "INSERT INTO `toupiao`.`sendTable` ( `title`, `desc`, `isStartTime`, `startTime`, `endTime`, `isPass`, `password`, `sendAuthor`, `sendAuthorIcon`, `totalNumber`, `isEnd`, `sendAuthorId`) VALUES (" +
		"'', '十一', 'true', '2018-01-14 20:20', '2018-01-14 20:20', 'true', '1234', '小洪', 'png', '3', 'true', '小洪')";

	if (req.query.sendAuthorId == undefined) {
		res.json({
			status: false,
			msg: "sendAuthorId没有定义"
		})
		return false;
	}


	var last_id_sql = "select id from `sendTable` where sendAuthorId='" + req.query.sendAuthorId + "' order by id desc limit 1";

	connection.query(sql, function(err, result) {

		// console.log(err, 'err');



		connection.query(last_id_sql, function(last_id_err, last_id_result) {

			console.log(last_id_err, 'last_id_err');
			console.log(last_id_result, 'last_id_result');

			if (last_id_result.length == 0) {
				res.json({
					status: false,
					msg: "执行错误"
				})
				return false;
			}

			// console.log(last_id_result.id, 'last_id_result.id');

			last_id_result.forEach(function(v, k) {
				// console.log(v.id, 'v.id');

				var insert_option = "INSERT INTO `toupiao`.`sendOption` (`id`, `imgUrl`, `title`, `number`, `send_id`) VALUES (NULL, '.png', '妖岭', '1', " + v.id + ");";

				connection.query(insert_option, function(insert_option_err, insert_option_result) {

					console.log(insert_option_err, 'insert_option_err');

					res.json({
						status: true,
						msg: "成功123"
					})

				});
			})



		});



	});



});

module.exports = router;
