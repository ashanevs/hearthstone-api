const Card = require("../db/models/Card");

module.exports = {
  index: (req, res) => {
    Card.find({})
      .populate("cardSet", "name")
      .populate("playerClass", "name")
      .exec(function(err, cards) {
        res.json(cards);
      });
  },
  getById: (req, res) => {
    Card.findOne({ _id: req.params.id })
      .populate("cardSet", "name")
      .populate("playerClass", "name")
      .exec(function(err, card) {
        res.json(card);
      });
  },
  getByName: (req, res) => {
    Card.findOne({ name: req.params.name })
      .populate("cardSet", "name")
      .populate("playerClass", "name")
      .exec(function(err, card) {
        res.json(card);
      });
  },
  showCard: (req, res) => {
    Card.findOne({ name: req.params.name })
      .populate("cardSet", "name")
      .populate("playerClass", "name")
      .exec(function(err, card) {
        res.render("card", { card });
      });
  },
  cardSearch: (req, res) => {
    Card.findOne({ name: req.body.name })
      .populate("cardSet", "name")
      .populate("playerClass", "name")
      .exec(function(err, card) {
        res.render("card", { card });
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
