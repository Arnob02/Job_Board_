const path = require("path");
const { roadmapsData } = require("../src/models/roadmap.model");

exports.roadmap = (req, res) => {
  res.render("roadmap", { roadmapsData });
};
