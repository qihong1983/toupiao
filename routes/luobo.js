var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: '39.106.140.80',
	user: 'root',
	password: 'Qihong38752673',
	database: 'toupiao',
	useConnectionPooling: true
});

//执行创建连接 
connection.connect();

//SQL语句
var sql = 'SELECT icon FROM lunbo';

/* GET home page. */
router.get('/', function(req, res, next) {


	connection.query(sql, function(err, result) {

		console.log(err);

		var arr = [];
		if (err) {
			res.json({
				aa: "aaa",
				status: false,
				msg: err.message
			})
			return;
		}


		result.forEach(function(v, k) {

			arr.push({
				images: v.icon
			})
		})

		//把搜索值输出
		res.json({
			aaa: "aaa",
			status: true,
			msg: "成功",
			data: arr
		});
	});

	// connection.end();

});

module.exports = router;
