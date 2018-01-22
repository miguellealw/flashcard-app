const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const keys = require("../config/keys");

const isDev = () => {
  return process.env.NODE_ENV === "development";
};

module.exports = app => {
  app.use(helmet());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //app.use(cookieParser());
  app.use(
    session({
      secret: keys.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    }),
  );

  // Init Passport
  app.use(passport.initialize());
  app.use(passport.session());

  if (isDev) {
    const morgan = require("morgan");
    app.use(morgan("dev"));
  }
};
