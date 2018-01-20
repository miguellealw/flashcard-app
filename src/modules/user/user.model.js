const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Provide Your Name"],
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Please Provide a Username"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide a Password"],
    trim: true,
  },
  decks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Deck",
    },
  ],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
