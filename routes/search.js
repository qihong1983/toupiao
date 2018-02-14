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

	// console.log(req.query);

	var currentPage = 1;

	if (req.query.currentPage == undefined) {
		currentPage = 1;
	} else {
		currentPage = req.query.currentPage;
	}

	if (req.query.name == undefined) {
		res.json({
			status: false,
			msg: "name字段没有定义"
		});
	} else {
		//SQL语句
		var sql = 'SELECT `title`,`totalNumber`,`startTime`,`endTime`,`isPass`,`sendAuthor`,`isEnd` FROM `sendTable` WHERE title like "%' + req.query.name + '%" ORDER by startTime desc limit ' + (currentPage - 1) * 10 + ', 10';

		connection.query(sql, function(err, result) {

			res.json({
				status: true,
				msg: "成功",
				data: result
			})

		});

	}

	// connection.query(sql, function(err, result) {

	// 	var arr = [];
	// 	if (err) {
	// 		res.json({
	// 			status: false,
	// 			msg: err.message
	// 		})
	// 		return;
	// 	}


	// 	result.forEach(function(v, k) {

	// 		arr.push({
	// 			images: v.icon
	// 		})
	// 	})

	// 	//把搜索值输出
	// 	res.json({
	// 		status: true,
	// 		msg: "成功",
	// 		data: arr
	// 	});
	// });

	// connection.end();

});

module.exports = router;