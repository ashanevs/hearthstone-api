const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const exphbs = require("express-handlebars");

const Class = require("./db/models/Class");

const cardRoute = require("./routes/card");
const setRoute = require("./routes/set");
const classRoute = require("./routes/class");

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());
app.use(express.static("./views/public"));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  Class.find({})
    .populate("class", "name")
    .exec(function(err, thisClass) {
      res.render("home", { thisClass });
    });
});

app.use("/api/cards/", cardRoute);
app.use("/api/sets", setRoute);
app.use("/api/classes", classRoute);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () =>
  console.log(`✅ PORT: ${app.get("port")} 🌟`)
);
