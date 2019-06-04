const unirest = require("unirest");
const fs = require("fs");

unirest
  .get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards")
  .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
  .header(
    "X-RapidAPI-Key",
    "5d9b3da060msh43e121b6f72e948p1a36acjsn04a1bf9f8d2d"
  )
  .end(function(result) {
    let stringified = JSON.stringify(result.body);
    fs.writeFile("./db/data.json", stringified, "utf8", err => {
      if (err) {
        console.error(err);
      } else
        console.log(
          `successfully wrote ${result.body.length} records to db/people.json`
        );
    });
  });