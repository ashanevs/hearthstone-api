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

// Card.deleteMany({}).then(_ => {
//   Card.create(validCardData).then(cardDocs => {

// cardDocs.forEach((cardFromCollection, cardIndex) => {
//   const cardFromJson = cardsData.find(card => {
//     return card.name === cardFromCollection.name;
//   });
//   console.log(cardFromCollection);
//   console.log(cardFromJson);
// });

//     const cardFromCollection = cardDocs[0];
//     const cardFromJson = cardsData.find(card => {
//       return card.name === cardFromCollection.name;
//     });
//     console.log(cardFromCollection);
//     console.log(cardFromJson);
//   });
// });

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
              Class.findOne({ name: cardFromJson.playerClass })
                .then(oneDoc => {
                  oneDoc.cards.push(cardFromCollection._id);
                  cardFromCollection.playerClass = oneDoc._id;
                  cardFromCollection.save();
                  oneDoc.save();
                })
                .then(_ => {
                  theSet
                    .findOne({ name: cardFromJson.cardSet })
                    .then(oneSet => {
                      oneSet.cards.push(cardFromCollection._id);
                      cardFromCollection.cardSet = oneSet._id;
                      cardFromCollection.save();
                      oneSet.save();
                    });
                });
            }
          });
        });
      });
    });
  });
});

// Card.deleteMany({}).then(() => {
//   theSet.deleteMany({}).then(() => {
//     Class.deleteMany({}).then(() => {
//       Card.create(cardsData).then(cardDocs => {
//         theSet.create(setsData).then(setDocs => {
//           Class.create(classData).then(classDocs => {
//             for (let i = 0; i < cardDocs.length; i++) {
//               const cardFromCollection = cardDocs[i];
//               const cardFromJson = cardsData.find(card => {
//                 return card.name === cardFromCollection.name;
//               });
//               console.log(cardFromCollection);
//               console.log(cardFromJson);
//               // const cardSetFromCollection = card.cardSet;
//             }
//           });
//         });
//       });
//     });
//   });
// });
