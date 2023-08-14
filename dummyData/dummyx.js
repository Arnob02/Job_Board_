const Mentor = require("../src/models/mentors.model");
exports.getmentorsfromdb = async function () {
  const mentorsFromDB = await Mentor.find();
  return mentorsFromDB;
};

exports.mentorsData = [
  {
    picture:
      "https://images.pexels.com/photos/7533317/pexels-photo-7533317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    picture:
      "https://images.pexels.com/photos/7533317/pexels-photo-7533317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    picture:
      "https://images.pexels.com/photos/7533317/pexels-photo-7533317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
  },
  {
    picture:
      "https://images.pexels.com/photos/7533317/pexels-photo-7533317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
  },
  {
    picture:
      "https://images.pexels.com/photos/7533317/pexels-photo-7533317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Daniel Lee",
    email: "daniel.lee@example.com",
  },
  {
    picture:
      "https://images.pexels.com/photos/7533317/pexels-photo-7533317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
  },
  {
    picture:
      "https://images.pexels.com/photos/7533317/pexels-photo-7533317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Matthew Davis",
    email: "matthew.davis@example.com",
  },
  {
    picture:
      "https://images.pexels.com/photos/7533317/pexels-photo-7533317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Ava Taylor",
    email: "ava.taylor@example.com",
  },
  {
    picture:
      "https://images.pexels.com/photos/7533317/pexels-photo-7533317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Alexander Martinez",
    email: "alexander.martinez@example.com",
  },
  {
    picture:
      "https://images.pexels.com/photos/7533317/pexels-photo-7533317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Sophia Anderson",
    email: "sophia.anderson@example.com",
  },
];
