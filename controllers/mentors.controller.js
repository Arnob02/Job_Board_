const path = require("path");
const dummy = require("../dummyData/dummyx");
const Booking = require("../src/models/booking.model");
const Mentor = require("../src/models/mentors.model");
const mongoose = require("mongoose");

exports.mentors = async (req, res) => {
  // console.log("Database connected:", mongoose.connection.readyState);
  const mentorsData = await dummy.getmentorsfromdb();
  // console.log("Eimatro", mentorsData);

  res.render("mentors", { mentorsData });
};

exports.mentorSelected = (req, res) => {
  // console.log("Entered here");
  const mentorsData = req.body;

  //console.log("Received mentor data:", mentorsData);

  res.render("mentorSelected", { mentorsData });
};

exports.bookSession = (req, res) => {
  const mentorName = req.query.mentorName;
  // console.log("mentorNameeeeeeee", mentorName);
  // console.log("Entered booked session");
  res.render("bookSession", { mentorName });
};

exports.bookSuccess = async (req, res) => {
  const booking = req.body;
  //console.log("Entered bookingdets", booking);
  const { name, email, time, date } = req.body;

  // Create a new instance of the Booking model with the form data
  const newBooking = new Booking({
    name,
    email,
    time,
    date,
  });

  // Save the newBooking instance to the database
  await newBooking.save();
  res.render("bookingSuccess", { booking });
};

// exports.bookSuccess = async (req, res) => {
//   try {
//     const newBooking = new Booking({
//       name: req.body.name,
//       email: req.body.email,
//       time: req.body.time,
//       date: req.body.date,
//     });
//     await newBooking.save();
//     res.render("bookingSuccess", { booking });
//   } catch (error) {
//     console.error(error); // Log the actual error
//     res.status(400).send("An error occurred");
//   }
// };
