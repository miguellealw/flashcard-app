const userRoutes = require("./user/user.route");

module.exports = app => {
  app.use("/api/v1/user", userRoutes);
};
