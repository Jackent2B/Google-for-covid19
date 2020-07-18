var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/statistics', function(req, res, next) {
  res.render('statistics');
});

router.get('/map', function(req, res, next) {
  res.render('map');
});

router.get('/news', function(req, res, next) {
  res.render('news');
});

router.get('/description', function(req, res, next) {
  res.render('description');
});



module.exports = router;
