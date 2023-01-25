var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/contact.ejs', {title: 'App con Node y Express' });
});

module.exports = router;
