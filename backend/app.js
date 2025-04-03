const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" });
const { Prisma } = require("@prisma/client");
const postRouter = require("./routes/postRoutes");
const commentRouter = require("./routes/commentRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/posts", postRouter);
app.use("/posts/:postid/comments", commentRouter);

app.use((err, req, res, next) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    let statusCode;
    let message;

    // Mapping prisma error codes to their http status codes
    switch (err.code) {
      case "P2002":
        statusCode = 409;
        message =
          "Unique constraint violation: A record with this identifier already exists.";
        break;
      case "P2003":
        statusCode = 400;
        message =
          "Foreign key constraint violation: Invalid reference to another record.";
        break;
      case "P2004":
        statusCode = 400;
        message = "Query validation error: Invalid query parameters.";
        break;
      case "P2025":
        statusCode = 404;
        message = "Record not found: The requested resource does not exist.";
        break;
      default:
        statusCode = 500;
        message = "An unexpected database error occurred.";
        break;
    }
    // Not a prisma given error
    return res.status(statusCode).json({ error: message });
  }
  res.status(500).json({ error: "An unexpected error occurred" });
});

app.get("/", (req, res) => {
  res.json({ msg: "This is the home page" });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
