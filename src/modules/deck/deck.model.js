const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CardSchema = require("../card/card.schema");

const DeckSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide a Name for the Deck"],
    },
    cards: [CardSchema],
  },
  { timestamps: true },
);

const Deck = mongoose.model("Deck", DeckSchema);

moduel.exports = Deck;
