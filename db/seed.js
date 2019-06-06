const cards = require("./models/Card");
const cardsData = require("./cardData.json");
const sets = require("./models/Set");
const classes = require("./models/Class");
const classData = require("./classData.json");

cards
  .find({})
  .remove(() => cards.create(cardsData).then(res => console.log(res)));

sets
  .find({})
  .remove(() => sets.create(cardsData).then(res => console.log(res)));

classes
  .find({})
  .remove(() => classes.create(classData).then(res => console.log(res)));
