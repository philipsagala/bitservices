var express = require('express');
var router = express.Router();

const currencyController = require('../controllers').currency;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/currency', currencyController.create);

module.exports = router;
