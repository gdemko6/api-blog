const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" });

app.get("/", (req, res) => {
  res.json({ msg: "This is the home page" });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
