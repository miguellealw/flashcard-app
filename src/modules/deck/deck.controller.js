const express = require("express");

const Deck = require("./deck.model");

const slugify = require("slugify");

async function getAllUserDecks(req, res, next) {
  try {
    const decks = await Deck.find({ user: req.user._id }).populate("user");
    if (decks) return res.json(decks);
    res.json({ message: "There are currently no decks" });
  } catch (error) {
    next(error);
  }
}

async function getAllDecks(req, res, next) {
  try {
    const decks = await Deck.find();
    if (decks) return res.json(decks);
    res.json({ message: "There are currently no decks" });
  } catch (error) {
    next(error);
  }
}

async function getDeck(req, res, next) {
  try {
    const deck = await Deck.findOne({ slug: req.params.slug });
    if (deck) return res.json(deck);
    res.json({ message: "This deck does not exist" });
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

async function updateDeckBySlug(req, res, next) {
  try {
    const updatedDeck = await Deck.findOneAndUpdate(
      { slug: req.params.slug },
      { $set: { name: req.body.name, slug: slugify(req.body.name) } },
      { new: true },
    ).exec();
    res.status(200).json(updatedDeck);
  } catch (error) {
    next(error);
  }
}

async function removeDeckById(req, res, next) {
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
  updateDeckBySlug,
};
