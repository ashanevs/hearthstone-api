const fs = require("fs");
const data = require("./data.json");

var newArray = [];
for (let i = 0; i < data.length; i++) {
  newArray.push.apply(newArray, data[i]);
}

var cardModel = newArray.map(card => {
  let newCard = {
    name: card.name,
    cardSet: null,
    type: card.type,
    rarity: card.rarity,
    faction: card.faction,
    cost: card.cost,
    text: card.text,
    flavor: card.flavor,
    playerClass: null,
    img: card.img,
    imgGold: card.imgGold
  };
  return newCard;
});

var setModel = newArray.map(set => {
  let newSet = {
    name: set.Name,
    numberCards: null,
    cards: null
  };
});

let stringified = JSON.stringify(cardModel, null, 2);
fs.writeFile("./db/cardData.json", stringified, "utf8", err => {
  if (err) {
    console.error(err);
  } else
    console.log(
      `successfully wrote ${cardModel.length} records to db/people.json`
    );
});
