const mongoose = require("../connection");

const SetSchema = mongoose.Schema({
  name: String,
  numberCards: Number,
  cards: [
    {
      ref: "Card",
      type: mongood.Schema.Types.ObjectId
    }
  ]
});

const Set = mongoose.model("Set", SetSchema);

module.exports = Set;
