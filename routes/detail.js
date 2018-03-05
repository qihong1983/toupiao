var express = require('express');
var router = express.Router();

var mysql = require('mysql');



// router.aaa('aaaa', function(req, res, next, id) {
// 	console.log(1111111);
// });



// router.get('/', function(req, res, next) {

// 	console.log(req.params, 'nodejs参数11');

// 	req.paramval = req.params;
// 	// console.log(req.query.send_id, '参数');

// 	// next(aaa);

// 	// res.json({
// 	// 	status: true,
// 	// 	msg: req.query.send_id
// 	// })
// 	next(req.paramval);
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

	// var sql = 'SELECT `id`,`title` FROM `sendTable` WHERE `sendAuthorId`= "' + req.query.myAbout + '"';

	var sql = 'SELECT `id`, `title`, `sendAuthor`, `desc` FROM `sendTable` WHERE `id` = "' + req.query.send_id + '"';


	console.log(sql, 'sql');
	var arr = [];

	connection.query(sql, function(err, result) {
		result.forEach(function(v, k) {

			// send_id: 'xxx',
			// title: '十一去哪玩'

			console.log(result, 'result');
			arr.push({
				send_id: v.id,
				title: v.title,
				sendAuthor: v.sendAuthor,
				desc: v.desc
			});

			console.log(arr);

		});

		res.json({
			status: true,
			msg: '成功',
			data: arr
		})
	});

	// console.log(arr, 'arr');


	// next();
});

// router.use(function(req, res, next) {
// 	console.log(req.params, 'nodejs参数');
// 	console.log(req.query.send_id, '参数');

// 	res.json({
// 		status: true,
// 		msg: req.query.send_id
// 	})
// });

// router.use(function(msg, req, res, next) {
// 	console.log(req.params, 'nodejs参数');
// 	console.log(req.query.send_id, '参数');

// 	res.json({
// 		status: true,
// 		msg: req.query.send_id,
// 		test: 'aaaaaaa',
// 		param: msg
// 	})
// });

module.exports = router;