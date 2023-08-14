const express = require("express");
const { roadmap } = require("../controllers/roadmap.controller");

const router = express.Router();

router.get("/roadmap", roadmap);

module.exports = router;
