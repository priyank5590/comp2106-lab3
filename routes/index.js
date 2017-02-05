var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Family' });
});


/* GET priyank page. */
router.get('/priyank', function(req, res, next) {
  res.render('priyank');
});

/* GET Hirangee page. */
router.get('/hirangee', function(req, res, next) {
  res.render('hirangee');
});

/* GET Harsha page. */
router.get('/harsha', function(req, res, next) {
  res.render('harsha');
});

/* GET Hemant page. */
router.get('/hemant', function(req, res, next) {
  res.render('hemant');
});

module.exports = router;
