const Currency = require('../models').currency;

module.exports = {
  create(req, res) {
    return Currency.create({
        name: req.body.name,
        rate: req.body.rate,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};