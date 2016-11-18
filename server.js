const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8000
let contacts = require("./contact-data")

// use ejs views from the /views folder
app.set("view engine", "ejs");

// serve static assets (css, images, etc) from /public folder
app.use(express.static('public'));

app.get("/", (req, res) => {
  // render the views/index.ejs file
  res.render("index", { contacts })
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
