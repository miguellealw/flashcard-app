const express = require("express");
const keys = require("./config/keys");
require("./config/db");

const middleware = require("./config/middleware");
const apiRoutes = require("./modules");

const app = express();

middleware(app);
apiRoutes(app);

app.listen(keys.PORT, () => {
  console.log(`
    Server Running on Port ${keys.PORT}
    ----
    http://localhost:${keys.PORT}
  `);
});
