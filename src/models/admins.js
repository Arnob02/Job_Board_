const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyname: {
    type: String,
    required: true,
  },
  companydescription: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },

  number: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});

// create collections

const Admin = new mongoose.model("Admin", companySchema);

module.exports = Admin;
