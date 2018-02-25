const express = require("express");
const mongoose = require("mongoose");

const Deck = require("./deck.model");
const User = require("../user/user.model");

const slugify = require("slugify");

async function getAllUserDecks(req, res, next) {
  try {
    // const decks = await Deck.find({ user: req.user._id }).populate("user");
    const user = await User.findOne({ email: req.user.email }).populate(
      "decks",
    );
    res.json(user.decks);
    // if (!user) throw new Error("User ");
    // res.json({ message: "There are currently no decks" });
  } catch (error) {
    next(error);
  }
}

// async function getAllDecks(req, res, next) {
//   try {
//     const decks = await Deck.find();
//     if(!decks) throw new Error("There are currently no decks")
//     res.json(decks);
//     // res.json({ message: "There are currently no decks" });
//   } catch (error) {
//     next(error);
//   }
// }

async function getDeckBySlug(req, res, next) {
  try {
    const deck = await Deck.findOne({ slug: req.params.slug });
    if (!deck) throw new Error("This deck does not exist");
    // if (deck) return res.json(deck);
    // res.json({ message: "This deck does not exist" });
    res.json(deck);
  } catch (error) {
    next(error);
  }
}

async function createDeck(req, res, next) {
  try {
    if (!req.body.name) throw new Error("Please provide a name for the deck");
    const deck = new Deck({ name: req.body.name });
    const user = await User.findOne({ email: req.user.email });
    user.decks.push(mongoose.Types.ObjectId(deck._id));
    await deck.save();
    await user.save();
    res.status(201).json(deck);
  } catch (error) {
    next(error);
  }
}

async function updateDeckBySlug(req, res, next) {
  try {
    if (!req.body.name)
      throw new Error("Please provide a new name for the deck");
    const updatedDeck = await Deck.findOneAndUpdate(
      { slug: req.params.slug },
      { $set: { name: req.body.name, slug: slugify(req.body.name) } },
      { new: true },
    )
      .exec()
      .catch(err => {
        throw new Error("Error updating deck");
      });
    res.status(200).json(updatedDeck);
  } catch (error) {
    next(error);
  }
}

async function deleteDeckById(req, res, next) {
  try {
    const removedDeck = await Deck.findByIdAndRemove(req.params.id).catch(
      err => {
        throw new Error("Attempted deleted deck not found");
      },
    );
    const newArr = await removeDeckIdFromUserDecksArray(
      req.user,
      req.params.id,
    );
    console.log('newArr', newArr)
    res.status(200).json(removedDeck);
  } catch (error) {
    next(error);
  }
}

// Helper Function to Remove deck id ref from user decks array
async function removeDeckIdFromUserDecksArray(currentUser, deckId) {
  const user = await User.findOne({ email: currentUser.email });
  const decks = user.decks;
  const indexOfRemovedDeckFromUser = decks.indexOf(deckId);
  const userWithRemovedDeck = decks.splice(indexOfRemovedDeckFromUser, 1);
  user.save();
  return userWithRemovedDeck;
}

module.exports = {
  getAllUserDecks,
  // getAllDecks,
  createDeck,
  getDeckBySlug,
  deleteDeckById,
  updateDeckBySlug,
};
