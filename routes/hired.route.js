const express = require("express");
const { hired } = require("../controllers/hired.controller");

const router = express.Router();

router.get("/hired", hired);

module.exports = router;
