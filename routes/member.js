var express = require('express');
var router = express.Router();

var mysql = require('mysql');

router.get('/', function(req, res, next) {

	var connection = mysql.createConnection({
		host: '39.106.140.80',
		user: 'root',
		password: 'Qihong38752673',
		database: 'toupiao',
		useConnectionPooling: true,
		multipleStatements: true
	});

	connection.connect();

	var sql1 = 'SELECT `id`,`numberIcon` FROM `number` WHERE `send_id` = "' + req.query.send_id + '";';
	var sql2 = 'SELECT count(*) FROM `number` WHERE `send_id` = "' + req.query.send_id + '"';
	var sql = sql1 + sql2;
	connection.query(sql, function(err, result) {



		res.json({
			status: true,
			msg: '成功',
			total: result[1][0]['count(*)'],
			data: result[0]
		})
	});



	//INSERT INTO `number`(`id`, `send_id`, `numberIcon`, `numberName`) VALUES (1,21,'.png','小洪')


});

module.exports = router;