const userRoutes = require("./user/user.route");
const deckRoutes = require("./deck/deck.route");


module.exports = app => {
  app.use("/api/v1/user", userRoutes);
  app.use("/api/v1/deck", deckRoutes);
};
