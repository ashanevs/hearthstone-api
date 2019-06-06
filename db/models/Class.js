const mongoose = require("../connection");

const ClassSchema = mongoose.Schema({
  name: String,
  cards: [
    {
      ref: "Card",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
