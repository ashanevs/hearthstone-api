const Set = require("../db/models/Set");

module.exports = {
  index: (req, res) => {
    Set.find({})
      .populate("cards", "name")
      .exec(function(err, sets) {
        res.json(sets);
      });
  },
  getById: (req, res) => {
    Set.find({ _id: req.params.id })
      .populate("cards", "name")
      .exec(function(err, set) {
        res.json(set);
      });
  },
  getByName: (req, res) => {
    Set.find({ name: req.params.name })
      .populate("cards", "name")
      .exec(function(err, set) {
        res.json(set);
      });
  },
  create: (req, res) => {
    Set.create(req.body).then(set => {
      res.json(set);
    });
  },
  edit: (req, res) => {
    Set.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(set => res.json(set));
  },
  delete: (req, res) => {
    Set.findOneAndDelete({ name: req.params.name }).then(set => res.json(set));
  }
};
