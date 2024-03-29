var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cap', { title: 'Search Results for Class cap' });
});

module.exports = router;