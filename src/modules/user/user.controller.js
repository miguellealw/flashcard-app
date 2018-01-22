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
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
  // try {
  //   if (!req.body.username || !req.body.email || !req.body.password) {
  //     res.json({success: false, message: 'Please enter all the mandatory fields'});
  //   }
  //   const user = await User.create(req.body);
  //   return res.status(201).json(user);
  // } catch (error) {
  //   return res.status(500).json(error);
  // }
}

// function logIn(req, res) {
//   try {
//     res.send(req.user);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }

const logIn = passport.authenticate("local", {
  failureRedirect: "/login",
  //failureFlash: "Failed Login",
  successRedirect: "/",
  //successFlash: "You are now logged in",
});

function logout(req, res) {
  req.logout();
  res.redirect("/");
}

module.exports = {
  signUp,
  logIn,
  logout
};
