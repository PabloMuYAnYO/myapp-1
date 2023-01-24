const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index..ejs', { title: 'Web Title' });
});

module.exports = router;
