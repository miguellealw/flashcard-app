const express = require("express");
const routes = express.Router();

const isLoggedIn = require("../authController").isLoggedIn;

const cardController = require("./card.controller");

routes.route("/:slug/add").post(cardController.createCard);

routes
  .route("/:slug/:cardId")
  .get(cardController.getCardById)
  .patch(isLoggedIn, cardController.updateCardById)
  .delete(isLoggedIn, cardController.deleteCardById);

// routes.route("/:slug").get(cardController.getAllCards);

module.exports = routes;
