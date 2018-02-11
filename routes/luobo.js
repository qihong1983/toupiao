var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var dbConfig = {
	host: '39.106.140.80',
	port: 3306,
	user: 'root',
	password: 'Qihong38752673',
	database: 'toupiao',
	useConnectionPooling: false
}

function handleDisconnect() {
	var connection = mysql.createConnection(dbConfig);

	//执行创建连接 
	connection.connect(function(err) {
		if (err) {
			// We introduce a delay before attempting to reconnect,
			// to avoid a hot loop, and to allow our node script to
			// process asynchronous requests in the meantime.
			console.log('error when connecting to db:', err);
			setTimeout(handleDisconnect, 1000);
		}
	});

	connection.on('error', function(err) {
		console.log('db error', err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}

handleDisconnect();



//SQL语句
var sql = 'SELECT icon FROM lunbo';

/* GET home page. */
router.get('/', function(req, res, next) {

	connection.query(sql, function(err, result) {

		console.log(err);

		var arr = [];
		if (err) {
			res.json({
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
			status: true,
			msg: "成功",
			data: arr
		});
	});

	// connection.end();

});

module.exports = router;