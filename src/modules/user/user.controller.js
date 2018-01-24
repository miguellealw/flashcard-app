const express = require("express");
const User = require("./user.model");
const promisify = require("es6-promisify");
const passport = require("passport");

async function signUp(req, res, next) {
  try {
    const user = new User({
      email: req.body.email,
      username: req.body.username,
    });
    const register = promisify(User.register, User);
    await register(user, req.body.password);
    // TODO change what is returned after signup
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

// use this when frontend is ready
// const logIn = passport.authenticate("local", {
//   failureRedirect: "/login",
//   //failureFlash: "Failed Login",
//   successRedirect: "/",
//   //successFlash: "You are now logged in",
// });

const logIn = function(req, res) {
  res.json(req.user)
}

function logout(req, res) {
  req.logout();
  res.redirect("/");
}

module.exports = {
  signUp,
  logIn,
  logout
};
