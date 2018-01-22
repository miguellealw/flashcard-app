const passport = require("passport");
const User = require("../modules/user/user.model");

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
