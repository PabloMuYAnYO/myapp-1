const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/about.ejs', {title: 'App con Node y Express' });
});

module.exports = router;
