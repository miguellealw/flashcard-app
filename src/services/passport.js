const passport = require("passport");
//const LocalStrategy = require("passport-local");
// const JWTStrategy = require("passport-jwt").Strategy;
// const ExtractJWT = require("passport-jwt").ExtractJwt;

//const keys = require("../config/keys");
const User = require("../modules/user/user.model");

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// const localOpts = {
//   usernameField: "email",
// };

// const localLogin = new LocalStrategy(
//   localOpts,
//   async (email, password, done) => {
//     try {
//       const user = await User.findOne({ email });
//       // Check if username is correct
//       if (!user) return done(null, false, { message: "Incorrect Username" });
//       // Check if password is correct
//       if (!user.comparePasswords(password)) {
//         return done(null, false, { message: "Incorrect Password" });
//       }
//       return done(null, user);
//     } catch (error) {
//       return done(error, false);
//     }
//   },
// );

// const JwtOpts = {
//   secretOrKey: keys.JWT_SECRET,
//   jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
// };

// const jwtAuth = new JWTStrategy(JwtOpts, async (payload, done) => {
//   try {
//     const user = await User.findById(payload._id);
//     if (!user) {
//       return done(null, false);
//     }
//     done(null, user);
//   } catch (error) {
//     done(error, false);
//   }
// });

//passport.use(localLogin);
//passport.use(jwtAuth);

module.exports = {
  //localAuth: passport.authenticate("local", { session: false }),
  //jwtAuth: passport.authenticate("jwt", { session: false }),
};
