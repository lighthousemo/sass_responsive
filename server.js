const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8000
let contacts = require("./contact-data")

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // render the views/index.ejs file
  res.render("index", { contacts })
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
