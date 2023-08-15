const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const jobsSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      requied: [true, "Companay name is require"],
    },
    position: {
      type: String,
      required: [true, "Job Position is required"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["pending", "reject", "interview"],
      default: "pending",
    },
    workType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "contaract"],
      default: "full-time",
    },
    workLocation: {
      type: String,
      default: "Dhaka",
      required: [true, "Work location is required"],
    },

    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "Admin",
    // },
  },
  { timestamps: true }
);

const Jobs = new mongoose.model("Jobs", jobsSchema);

module.exports = Jobs;
