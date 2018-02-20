var models  = require('../models');
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    request('https://api.coinmarketcap.com/v1/ticker/?convert=IDR&limit=1', function (error, response, body) {
        var json = JSON.parse(body);
        json.forEach(function(value) {           
            var newDate = new Date(value.last_updated * 1000);
            models.btc.count({
                where: { last_updated_timestamp: value.last_updated }
            }).then(function(ifExist) {
                if (ifExist == 0) {
                    models.btc.create({ 
                        name: value.name,
                        symbol: value.symbol,
                        source: 'coinmarketcap.com',
                        price_usd: value.price_usd,
                        price_btc: value.price_btc,
                        day_volume_usd: value['24h_volume_usd'],
                        market_cap_usd: value.market_cap_usd,
                        available_supply: value.available_supply,
                        total_supply: value.total_supply,
                        max_supply: value.max_supply,
                        percent_change_hour: value['percent_change_1h'],
                        percent_change_day: value['percent_change_24h'],
                        percent_change_week: value['percent_change_7d'],
                        price_idr: value.price_idr,
                        day_volume_idr: value['24h_volume_idr'],
                        market_cap_idr: value.market_cap_idr,
                        last_updated: newDate,
                        last_updated_timestamp: value.last_updated
                    });
                }
            });
        });
        res.send(body);
    });
});

module.exports = router;
