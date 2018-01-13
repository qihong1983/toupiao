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

//SQL语句
var sql = 'SELECT icon FROM lunbo';

/* GET home page. */
router.get('/', function(req, res, next) {
	// res.render('index', {
	// 	title: 'Express'
	// });

	// console.log(connection);

	connection.query(sql, function(err, result) {

		var arr = [];
		if (err) {
			console.log('[SELECT ERROR] - ', err.message);
			return;
		}
		// console.log(params.id);

		//console.log(result);

		result.forEach(function(v, k) {
			console.log(k, v);
			arr.push({
				images: v.icon
			})
		})

		//把搜索值输出
		// res.send(result);

		res.json({
			status: true,
			data: arr
		});
	});

});

module.exports = router;