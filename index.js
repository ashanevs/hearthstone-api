const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const exphbs = require("express-handlebars");

const cardRoute = require("./routes/card");
const setRoute = require("./routes/set");
const classRoute = require("./routes/class");

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", { title: "Hearthstone Card Api" });
});
// app.get("/", (req, res) => {
//   res.redirect("/api/cards");
// });

app.use("/api/cards/", cardRoute);
app.use("/api/sets", setRoute);
app.use("/api/classes", classRoute);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () =>
  console.log(`✅ PORT: ${app.get("port")} 🌟`)
);
