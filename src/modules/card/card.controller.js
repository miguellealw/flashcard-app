const express = require("express");
const Card = require("./card.model");
const Deck = require("../deck/deck.model");

async function getAllCards(req, res) {
  try {
    const deck = await Deck.findOne({ slug: req.params.slug });
    res.json(200).json(deck);
  } catch (error) {
    next(error);
  }
}

async function createCard(req, res, next) {
  try {
    const deck = await Deck.findOne({ slug: req.params.slug });
    const card = deck.cards.push({
      front: req.body.front,
      back: req.body.back,
    });
    await deck.save();
    const createdCard = deck.cards[deck.cards.length - 1];
    return res.status(201).json(createdCard);
  } catch (error) {
    next(error);
  }
}

async function getCardById(req, res, next) {
  try {
    // Find deck from slug and send back only the "cards" property
    const deck = await Deck.findOne({ slug: req.params.slug }, "cards");
    // Find card from id in params
    const fetchedCard = deck.cards.find(card => card.id === req.params.cardId);
    if(fetchedCard) {
      return res.status(200).json(fetchedCard);
    }
    res.json({ message: "This card no longer exists" });
  } catch (error) {
    next(error);
  }
}

// TODO work on updating a card
async function updateCardById(req, res, next) {
  try {
    const deck = await Deck.findOne({ slug: req.params.slug }, "cards");
    const fetchedCard = deck.cards.find(card => card.id === req.params.cardId);

    const updateOpts = {};

    // for (const ops of req.body) {
    //   // const val = req.body[key];
    //   // updateOpts[key] = val;
    //   console.log(ops.propName)
    // }
    // console.log(updateOpts);
    // console.log(req.body)
    // res.send("testing");
    const updatedCard = await fetchedCard.update({ _id: fetchedCard._id }, { $set: req.body });
    res.json(updatedCard)
  } catch (error) {
    next(error);
  }
}

async function deleteCardById(req, res, next) {
  try {
    const deck = await Deck.findOne({ slug: req.params.slug }, "cards");
    const fetchedCard = deck.cards.find(card => card.id === req.params.cardId);
    if (fetchedCard) {
      const removedCard = await fetchedCard.remove();
      await deck.save();
      return res.status(200).json(removedCard);
    }
    res.json({ message: "This card no longer exists" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCards,
  createCard,
  getCardById,
  deleteCardById,
  updateCardById,
};
