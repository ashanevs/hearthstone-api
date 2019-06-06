const fs = require("fs");
const data = require("./data.json");

var newArray = [];
for (let i = 0; i < data.length; i++) {
  newArray.push.apply(newArray, data[i]);
}

var cardModel = newArray.map(card => {
  let newCard = {
    name: card.name,
    cardSet: card.cardSet,
    type: card.type,
    rarity: card.rarity,
    faction: card.faction,
    cost: card.cost,
    text: card.text,
    flavor: card.flavor,
    playerClass: card.playerClass,
    img: card.img,
    imgGold: card.imgGold
  };
  return newCard;
});

var setModel = newArray.map(set => {
  let newSet = {
    name: set.cardSet,
    numberCards: null,
    cards: null
  };
  return newSet;
});

let repeatSet = {};
setModel = setModel.filter(eachSet => {
  if (eachSet.name in repeatSet) {
    return false;
  } else {
    repeatSet[eachSet.name] = true;
    return true;
  }
});

var classModel = newArray.map(theClass => {
  let newClass = {
    name: theClass.playerClass,
    cards: null
  };
  return newClass;
});

let repeatClass = {};
classModel = classModel.filter(eachClass => {
  if (eachClass.name in repeatClass) {
    return false;
  } else {
    repeatClass[eachClass.name] = true;
    return true;
  }
});

let stringifiedCard = JSON.stringify(cardModel, null, 2);
fs.writeFile("./db/cardData.json", stringifiedCard, "utf8", err => {
  if (err) {
    console.error(err);
  } else
    console.log(
      `successfully wrote ${cardModel.length} records to db/cardData.json`
    );
});

let stringifiedSet = JSON.stringify(setModel, null, 2);
fs.writeFile("./db/setData.json", stringifiedSet, "utf8", err => {
  if (err) {
    console.error(err);
  } else
    console.log(
      `successfully wrote ${setModel.length} records to db/setData.json`
    );
});

let stringifiedClass = JSON.stringify(classModel, null, 2);
fs.writeFile("./db/classData.json", stringifiedClass, "utf8", err => {
  if (err) {
    console.error(err);
  } else
    console.log(
      `successfully wrote ${classModel.length} records to db/classData.json`
    );
});
