const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const keys = require("../../config/keys");

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

// UserSchema.pre("save", async function(next) {
//   if (this.isModified("password") || this.isNew) {
//     this.password = await this._hashPassword(this.password);
//     return next();
//   }
//   return next();
// });

// UserSchema.methods = {
//   async _hashPassword(password) {
//     try {
//       const salt = await genSalt(10);
//       const hashedPassword = await hash(password, salt);
//       return hashedPassword;
//     } catch (error) {
//       throw new Error("Hashing Faild", error);
//     }
//   },
//   async comparePasswords(password) {
//     try {
//       return await compare(password, this.password);
//     } catch (error) {
//       throw new Error("Comparing Faild", error);
//     }
//   },
//   createToken() {
//     return jwt.sign({ _id: this._id }, keys.JWT_SECRET);
//   },
//   toJSON() {},
// };

const User = mongoose.model("User", UserSchema);
module.exports = User;
