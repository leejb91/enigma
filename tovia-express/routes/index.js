var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

router.post('/api/encrypt', function(req, res, next) {
	res.json({message: 'new secret message you cant understand without the passcode'});
});

module.exports = router;
