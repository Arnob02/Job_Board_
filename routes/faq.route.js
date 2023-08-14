const express = require("express");
const { showFAQ } = require("../controllers/faq.controller");

const router = express.Router();

router.get("/faq", showFAQ);

module.exports = router;
