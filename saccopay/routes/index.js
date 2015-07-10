var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sacco Pay' });
});

router.get('/register', function(req, res){
	res.render('register', {title: 'Register New Mat'});
});

module.exports = router;
