const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const keys = require("../../config/keys");

// const uniqueValidator = require("mongoose-unique-validator");

const bcrypt = require("bcryptjs");
const genSalt = bcrypt.genSalt;
const hash = bcrypt.hash;
const compare = bcrypt.compare;

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please Provide an Email"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Please Provide a Username"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    //required: [true, "Please Provide a Password"],
    trim: true,
  },
  decks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Deck",
    },
  ],
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });
// UserSchema.plugin(uniqueValidator, {
//   message: "{VALUE} is already taken",
// });

const User = mongoose.model("User", UserSchema);
module.exports = User;
