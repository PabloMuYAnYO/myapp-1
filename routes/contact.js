var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/contact.ejs', {title: 'Web Title' });
});

module.exports = router;
