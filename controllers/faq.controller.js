const path = require("path");
const { faqsData } = require("../src/models/faq.model");
exports.showFAQ = (req, res) => {
  res.render("faq", { faqsData });
};
