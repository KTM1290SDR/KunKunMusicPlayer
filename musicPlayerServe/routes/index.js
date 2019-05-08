var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/text', function(req, res, next) { 
  res.send('收到你的消息')
})

module.exports = router;
