const express = require("express");
const keys = require("./config/keys");
require("./config/db");

const middleware = require("./config/middleware");
const apiRoutes = require("./modules");

const app = express();

middleware(app);
apiRoutes(app);

// Error Handlers if other routes aren't found
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Error handler if error is thrown from anywhere
// in the server by next(error)
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: error.message,
  });
});

app.listen(keys.PORT, () => {
  console.log(`
    Server Running on Port ${keys.PORT}
    ----
    http://localhost:${keys.PORT}
  `);
});
