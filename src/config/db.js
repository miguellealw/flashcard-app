const mongoose = require("mongoose");
const DB_URL = require("./keys").DB_URL;

try {
  /* Mongoose Connection */
  mongoose.connect(DB_URL);
} catch (err) {
  mongoose.createConnection(DB_URL);
}

const db = mongoose.connection;
db
  .on("error", err => {
    throw err;
  })
  .once("open", () => {
    console.log(`
    MongoDB Running
    `);
  });
