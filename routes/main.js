var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about');
});
/* GET SST page. */
router.get('/sst', function(req, res) {
  res.render('sst');
});
/* GET contact page. */
router.get('/khungkrabaen', function(req, res) {
  res.render('khungkrabaen');
});
/* GET map page. */
router.get('/map', function(req, res) {
  res.render('map');
});
/* GET contact page. */
router.get('/contact', function(req, res) {
  res.render('contact');
});
module.exports = router;
