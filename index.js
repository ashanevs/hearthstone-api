const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const cardsController = require("./controllers/cards");
const setsController = require("./controllers/sets");
const classesController = require("./controllers/classes");

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.use("api/cards/", cardsController);
app.use("api/sets", setsController);
app.use("api/classes", classesController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () =>
  console.log(`✅ PORT: ${app.get("port")} 🌟`)
);
