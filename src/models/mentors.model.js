// mentorsData.js
const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  picture: String,
  name: String,
  email: String,
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
