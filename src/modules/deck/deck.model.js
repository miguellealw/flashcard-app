const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CardSchema = require("../card/card.schema");
const slugify = require("slugify");

const DeckSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Please Provide a Name for the Deck"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    cards: [CardSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true },
);

DeckSchema.pre("save", function(next) {
  if (!this.isModified("name")) return next();
  this.slug = slugify(this.name);
  next();
});

const Deck = mongoose.model("Deck", DeckSchema);

module.exports = Deck;
