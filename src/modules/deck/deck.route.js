const express = require("express");
const routes = express.Router();
const deckController = require("./deck.controller");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send("not authenticated");
}

routes
  .route("/")
  .get(isLoggedIn, deckController.getAllUserDecks)
  .post(isLoggedIn, deckController.createDeck);

routes
  .route("/:id")
  .get(deckController.getDeckById)
  .delete(deckController.removeDeckById);

module.exports = routes;
