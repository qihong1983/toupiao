var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {



	//把搜索值输出
	res.render('index.ejs', {
		name: 'tinyphp'
	});


});

module.exports = router;