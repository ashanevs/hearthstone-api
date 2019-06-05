const mongoose = require("../connection");

const CardSchema = mongoose.Schema({
  name: String,
  cardSet: String,
  //cardSet: {
  //   ref: "Set",
  //   type: mongoose.Schema.Types.ObjectId
  // }
  type: String,
  rarity: String,
  faction: String,
  cost: Number,
  text: String,
  flavor: String,
  playerClass: String,
  // playerClass: {
  //   ref: "Class",
  //   type: mongoose.Schema.Types.ObjectId
  // }
  img: String,
  imgGold: String
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
