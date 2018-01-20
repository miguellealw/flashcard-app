const express = require('express')
const constants = require('./config/constants')

const app = express()

app.listen(constants.PORT, () => {
  console.log(`
    Server Running on Port ${constants.PORT}
  `);
});