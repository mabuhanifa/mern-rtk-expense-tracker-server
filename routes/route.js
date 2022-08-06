const routes = require("express").Router();

routes
  .route("/api/catagories")
  .get((req, res) => res.json("Get request success"));

module.exports = routes;
