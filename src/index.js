const express = require("express");
const constants = require("./config/constants");
require("./config/db");
const middleware = require('./config/middleware')

const app = express();

middleware(app)

app.listen(constants.PORT, () => {
  console.log(`
    Server Running on Port ${constants.PORT}
    ----
    https://localhost:${constants.PORT}
  `);
});
