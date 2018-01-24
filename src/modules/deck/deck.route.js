const express = require("express");
const app = express();

const routes = express.Router();
const deckController = require("./deck.controller");
// const cardController = require("../card/card.controller");

const cardRoutes = require("../card/card.route");

// Handle card routes
routes.use("/", cardRoutes);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send("not authenticated");
  // TODO redirect to login page on client
}

routes
  .route("/")
  .get(isLoggedIn, deckController.getAllUserDecks)
  .post(isLoggedIn, deckController.createDeck);

routes
  .route("/:slug")
  .get(deckController.getDeck)
  .patch(deckController.updateDeckBySlug);

routes.delete("/:id", deckController.removeDeckById);

module.exports = routes;
