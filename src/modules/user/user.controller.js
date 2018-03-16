const express = require("express");
const User = require("./user.model");
const promisify = require("es6-promisify");
const passport = require("passport");
const omit = require("lodash/omit");

async function signUp(req, res, next) {
  try {
    const user = new User({
      email: req.body.email,
      username: req.body.username,
    });
    const register = promisify(User.register, User);
    await register(user, req.body.password);

    // Pick properties from the user object to avoid sending
    // sensitive data to client
    const newUser = omit(user.toObject(), ["hash", "salt", "__v"]);

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
}

// TODO uncomment when client is usable
// use this when frontend is ready
// const logIn = passport.authenticate("local", {
//   failureRedirect: "/login",
//   //failureFlash: "Failed Login",
//   successRedirect: "/",
//   //successFlash: "You are now logged in",
// });

const logIn = function(req, res) {
  if (req.user) {
    const user = omit(req.user.toObject(), ["hash", "salt", "__v"]);
    return res.json(user);
  }
  return res.status(401);
};

function logout(req, res) {
  req.logout();
  res.redirect("/");
}

function currentUser(req, res) {
  const user = omit(req.user.toObject(), ["__v"]);
  if (req.user) return res.json(user);

  return res.status(401).json(null);
}

module.exports = {
  signUp,
  logIn,
  logout,
  currentUser,
};
