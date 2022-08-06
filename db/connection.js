const mongoose = require("mongoose");

const connection = mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => {
    console.log("Connected to MongoDB");
    return db;
  })
  .catch((err) => console.log(err));

  module.exports = connection;
