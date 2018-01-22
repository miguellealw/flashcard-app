const bodyParser = require("body-parser");
const passport = require("passport");

const isDev = () => {
  return process.env.NODE_ENV === "development";
};

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Init Passport
  app.use(passport.initialize());
  app.use(passport.session());

  if (isDev) {
    const morgan = require("morgan");
    app.use(morgan("dev"));
  }
};
