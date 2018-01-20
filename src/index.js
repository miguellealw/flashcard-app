const express = require('express')
const constants = require('./config/constants')
require('./config/db')

const app = express()

app.listen(constants.PORT, () => {
  console.log(`
    Server Running on Port ${constants.PORT}
    ----
    https://localhost:${constants.PORT}
  `);
});