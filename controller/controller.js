const model = require("../models/model");

function create_Categories(req, res) {
  const Create = new model.Categories({
    type: "Savings",
    color: "#1F3B5C",
  });

  Create.save(function (err) {
    if (!err) return res.json(Create);
    return res
      .status(400)
      .json({ message: `Error while creating categories ${err}` });
  });
}

function create_Categories(req, res) {
  res.json("route");
}

module.exports = { create_Categories };
