const Card = require("../db/models/Card");

module.exports = {
  index: (req, res) => {
    Card.find({}).then(cards => {
      res.json(cards);
    });
  },
  create: (req, res) => {
    Card.create(req.body).then(card => {
      res.json(card);
    });
  },
  edit: (req, res) => {
    Card.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(card => res.json(card));
  },
  delete: (req, res) => {
    Card.findOneAndDelete({ name: req.params.name }).then(card =>
      res.json(card)
    );
  }
};
