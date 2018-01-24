const express = require("express");
const Deck = require("./deck.model");

async function getAllUserDecks(req, res, next) {
  try {
    const decks = await Deck.find({ user: req.user._id }).populate("user");
    res.json(decks);
  } catch (error) {
    next(error);
  }
}

async function getAllDecks(req, res, next) {
  try {
    const decks = await Deck.find();
    res.json(decks);
  } catch (error) {
    next(error);
  }
}

async function getDeck(req, res, next) {
  try {
    const deck = await Deck.findOne({ slug: req.params.slug });
    res.json(deck);
  } catch (error) {
    next(error);
  }
}

async function createDeck(req, res, next) {
  try {
    const deck = new Deck({ name: req.body.name, user: req.user._id });
    await deck.save();
    res.status(201).json({ deck });
  } catch (error) {
    next(error);
  }
}

async function removeDeckById(req, res) {
  try {
    const removedDeck = await Deck.findByIdAndRemove(req.params.id);
    res.status(200).json(removedDeck);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllUserDecks,
  getAllDecks,
  createDeck,
  getDeck,
  removeDeckById,
};
