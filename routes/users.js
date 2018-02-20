var express = require('express');
var router = express.Router();
var request = require('request');
var converter = require('google-currency')

const idr = {
  from: "USD",
  to: "IDR",
  amount: 1
}

/* GET users listing. */
router.get('/', function(req, res, next) {

  request('https://blockchain.info/tobtc?currency=USD&value=1', function (error, response, body) {
    var ayam = converter(idr).then(value => {
      var result = value.converted * body

      console.log(result) // Return object
    })
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    res.send(body);
  });
});

module.exports = router;
