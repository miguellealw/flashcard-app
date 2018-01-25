const express = require("express");
const app = express();

const routes = express.Router();
const deckController = require("./deck.controller");
// const cardController = require("../card/card.controller");

const isLoggedIn = require("../authController").isLoggedIn;

const cardRoutes = require("../card/card.route");

// Handle card routes
routes.use("/", cardRoutes);

routes
  .route("/")
  .get(isLoggedIn, deckController.getAllUserDecks)
  .post(isLoggedIn, deckController.createDeck);

routes
  .route("/:slug")
  .get(deckController.getDeckBySlug)
  .patch(isLoggedIn, deckController.updateDeckBySlug);

routes.delete("/:id", isLoggedIn, deckController.deleteDeckById);

module.exports = routes;
