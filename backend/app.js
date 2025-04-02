const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" });
const postRouter = require("./routes/postRoutes");
const commentRouter = require("./routes/commentRoutes");

app.use("/posts", postRouter);
app.use("/posts/:postid/comments", commentRouter);

app.get("/", (req, res) => {
  res.json({ msg: "This is the home page" });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
