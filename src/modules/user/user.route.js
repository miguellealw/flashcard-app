const express = require("express");
const Router = express.Router;
const passport = require("passport");

const localAuth = require("../../services/passport").localAuth;

const userController = require("./user.controller");

const routes = new Router();

routes.post("/signup", userController.signUp);
routes.post("/login", userController.logIn);
routes.get("/logout", userController.logout)

module.exports = routes;
