const Class = require("../db/models/Class");

module.exports = {
  index: (req, res) => {
    Class.find({}).then(classes => {
      res.json(classes);
    });
  },
  getById: (req, res) => {
    Class.find({ _id: req.params.id }).then(thisClass => res.json(thisClass));
  },
  create: (req, res) => {
    Class.create(req.body).then(classes => {
      res.json(classes);
    });
  },
  edit: (req, res) => {
    Class.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(thisClass => res.json(thisClass));
  },
  delete: (req, res) => {
    Class.findOneAndDelete({ name: req.params.name }).then(thisClass =>
      res.json(thisClass)
    );
  }
};
