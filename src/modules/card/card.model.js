const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  front: String,
  back: String,
});

module.exports = CardSchema;
