const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const applicationsSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      requied: [true, "Companay name is require"],
    },
    applicantName: {
      type: String,
      requied: [true, "Applicant's name is require"],
    },

    applicantEmail: {
      type: String,
      required: [true, "e-mail is required"],
    },
    position: {
      type: String,
      required: false,
    },
    skills: {
      type: String,
      required: [true, "Skills are required"],
    },
    worktype: {
      type: String,
      required: true,
    },

    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    // },
  },
  { timestamps: true }
);

const Applications = new mongoose.model("Applications", applicationsSchema);

module.exports = Applications;
