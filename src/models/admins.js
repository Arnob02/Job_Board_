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
  workLocation: {
    type: String,
    required: false,
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

  departments: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },
  awards: {
    type: String,
    required: false,
  },
});

// create collections

const Admin = new mongoose.model("Admin", companySchema);

module.exports = Admin;
