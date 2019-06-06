const Card = require("./models/Card");
const cardsData = require("./cardData.json");
const theSet = require("./models/Set");
const setsData = require("./setData.json");
const Class = require("./models/Class");
const classData = require("./classData.json");

// Card.find({}).remove(() =>
//   Card.create(cardsData).then(res => console.log(res))
// );

// theSet.find({})
//   .remove(() => theSet.create(setsData).then(res => console.log(res)));

// Class.find({}).remove(() =>
//   Class.create(classData).then(res => console.log(res))
// );

Card.deleteMany({}).then(() => {
  theSet.deleteMany({}).then(() => {
    Class.deleteMany({}).then(() => {
      Card.create(cardsData).then(cardDocs => {
        theSet.create(setsData).then(setDocs => {
          Class.create(classData).then(classDocs => {
            for (let i = 0; i < cardDocs.length; i++) {
              const cardFromCollection = cardDocs[i];
              const cardFromJson = cardsData.find(card => {
                return card.name === cardFromCollection.name;
              });
              console.log(cardFromCollection);
              console.log(cardFromJson);
              // const cardSetFromCollection = card.cardSet;
            }
          });
        });
      });
    });
  });
});
