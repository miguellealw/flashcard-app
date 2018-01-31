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

    // Pick properties from the user object to avoid sending
    // sensitive data to client
    const sanitizedUser = (({ _id, email, username, decks }) => ({
      _id,
      email,
      username,
      decks,
    }))(user);

    res.status(201).json(sanitizedUser);
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
  res.json(req.user);
};

function logout(req, res) {
  req.logout();
  // res.json({ success: true });
  res.redirect("/");
}

function currentUser(req, res) {
  if (req.user) {
    return res.json({ userData: req.user });
  }
  return res.json({ userData: null });
}

module.exports = {
  signUp,
  logIn,
  logout,
  currentUser,
};
