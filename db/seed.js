const Card = require("./models/Card");
const cardsData = require("./cardData.json");
const theSet = require("./models/Set");
const setsData = require("./setData.json");
const Class = require("./models/Class");
const classData = require("./classData.json");

const validCardData = cardsData.map(card => {
  const cardCopy = JSON.parse(JSON.stringify(card));
  delete cardCopy.cardSet;
  delete cardCopy.playerClass;
  return cardCopy;
});

const validSetData = setsData.map(set => {
  const setCopy = JSON.parse(JSON.stringify(set));
  delete setCopy.cards;
  return setCopy;
});

const validClassData = classData.map(theClass => {
  const classCopy = JSON.parse(JSON.stringify(theClass));
  delete classCopy.cards;
  return classCopy;
});

Card.deleteMany({}).then(_ => {
  Card.create(validCardData).then(cardDocs => {
    Class.deleteMany({}).then(_ => {
      Class.create(validClassData).then(classDocs => {
        theSet.deleteMany({}).then(_ => {
          theSet.create(validSetData).then(setDocs => {
            for (let i = 0; i < cardDocs.length; i++) {
              const cardFromCollection = cardDocs[i];
              const cardFromJson = cardsData.find(card => {
                return card.name === cardFromCollection.name;
              });
              Class.findOne({ name: cardFromJson.playerClass }).then(
                oneClass => {
                  theSet
                    .findOne({ name: cardFromJson.cardSet })
                    .then(oneSet => {
                      oneClass.cards.push(cardFromCollection._id);
                      cardFromCollection.playerClass = oneClass._id;
                      oneSet.cards.push(cardFromCollection._id);
                      cardFromCollection.cardSet = oneSet._id;
                      oneClass.save();
                      oneSet.save();
                      cardFromCollection.save();
                    });
                }
              );
            }
          });
        });
      });
    });
  });
});
