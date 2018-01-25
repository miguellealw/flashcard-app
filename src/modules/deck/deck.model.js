const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CardSchema = require("../card/card.model");
const mongooseUniqueValidator = require("mongoose-unique-validator");

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
      ref: "User",
    },
  },
  { timestamps: true },
);

DeckSchema.pre("save", function(next) {
  if (!this.isModified("name")) return next();
  this.slug = slugify(this.name);
  next();
});

DeckSchema.plugin(mongooseUniqueValidator, {
  message: "'{VALUE}' is already taken",
});

// DeckSchema.pre("findOneAndUpdate", function(next) {
//   // this.update({}, {$set: {slug: }})
//   console.log(this.schema)
//   next();
// });

const Deck = mongoose.model("Deck", DeckSchema);

module.exports = Deck;
