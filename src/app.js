const express = require("express");
const path = require("path");
const hbs = require("hbs");
const ejs = require("ejs");
const session = require("express-session");

// Sadab

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// routes

const faqRouter = require("../routes/faq.route");
const mentorsRouter = require("../routes/mentors.route");
const hiredRouter = require("../routes/hired.route");
const roadmapRouter = require("../routes/roadmap.route");

const Mentor = require("./models/mentors.model");
const { mentorsData } = require("../dummyData/dummyx");

// --End--

const app = express();

require("./db/conn");
const Register = require("./models/registers");
const Admin = require("./models/admins");
const Jobs = require("./models/jobs");
const Applications = require("./models/applications");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// Sadab

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(faqRouter);
app.use(mentorsRouter);
app.use(hiredRouter);
app.use(roadmapRouter);

app.use(
  session({
    secret: "12345", // Replace with a secret key for session encryption
    resave: false,
    saveUninitialized: true,
  })
);

// --End--

app.set("view engine", "ejs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/clogin", (req, res) => {
  res.render("clogin");
});

app.get("/cregister", (req, res) => {
  res.render("cregister");
});

// create job

app.get("/create", (req, res) => {
  res.render("cregister");
});

// applicant's apply now

app.get("/applynow", (req, res) => {
  res.render("applynow");
});

// company profile

app.get("/cprofile", async (req, res) => {
  const loggedemail = req.session.companyemail;
  console.log(loggedemail.email); // Print the email property
  res.render("cprofile", { loggedemail });
});

// fetch applications from Applications database

app.get("/chomepage", async (req, res) => {
  try {
    const applications = await Applications.find(); // Fetch all applications from the database
    res.render("chomepage", { data: applications });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

// show job-list

app.get("/job-list", async (req, res) => {
  try {
    const jobs = await Jobs.find(); // Fetch all applications from the database
    res.render("job-list", { data: jobs });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

// create a new use in our database
app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    if (password === cpassword) {
      const registerEmployee = new Register({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        gender: req.body.gender,
        number: req.body.number,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });

      const registered = await registerEmployee.save();
      res.status(201).render("index");
    } else {
      res.send("password not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// company register

app.post("/cregister", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    if (password === cpassword) {
      const companyEmployee = new Admin({
        companyname: req.body.fullname,
        companydescription: req.body.username,
        email: req.body.email,
        gender: req.body.gender,
        number: req.body.number,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });

      const companied = await companyEmployee.save();
      const applications = await Applications.find();
      res.status(201).render("chomepage", { data: applications });
    } else {
      res.send("password not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// login check

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const useremail = await Register.findOne({ email: email });

    if (useremail.password === password) {
      res.status(201).render("index");
    } else {
      res.send("Password not matching");
    }
  } catch (error) {
    res.status(400).send("invalid email or password");
  }
});

// company login

app.post("/clogin", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const companyemail = await Admin.findOne({ email: email });
    req.session.companyemail = companyemail;
    if (companyemail.password === password) {
      const applications = await Applications.find(); // Fetch all applications from the database

      res.render("chomepage", { data: applications });
    } else {
      res.send("Password not matching");
    }
  } catch (error) {
    console.error(error); // Log the actual error
    res.status(400).send("An error occurred");
  }
});

// app.post("/login", (req, res) => {
//   // ... Login logic
//   const userEmail = getUserEmailSomehow(); // Get the user's email from your login process
//   req.session.userEmail = userEmail; // Store the email in the session
//   res.redirect("/homepage");
// });

//create job

app.post("/create", async (req, res) => {
  try {
    const job = await Jobs.create({
      company: req.body.company,
      position: req.body.position,
      //status: req.body.status,
      workLocation: req.body.workLocation,
      workType: req.body.workType,
      //user: req.user.id,
    });
    const applications = await Applications.find();
    res.status(201).render("chomepage", { data: applications });
  } catch (error) {
    console.error(error); // Log the actual error
    res.status(400).send("An error occurred");
  }
});

// applicant apply now

app.post("/applynow", async (req, res) => {
  try {
    const applicationss = new Applications({
      applicantName: req.body.applicantName,
      companyName: req.body.companyName,
      position: req.body.position,
      applicantEmail: req.body.applicantEmail,
      skills: req.body.skills,
      worktype: req.body.worktype,
    });
    const jobbs = await Jobs.find();
    const applied = await applicationss.save();
    res.status(201).render("job-list", { data: jobbs });
  } catch (error) {
    console.error(error); // Log the actual error
    res.status(400).send("An error occurred");
  }
});

// SADAB ER KAJ !!!!!

async function insertMentorsData() {
  try {
    await Mentor.deleteMany(); // Clear existing data (optional)

    for (const mentorData of mentorsData) {
      const newMentor = new Mentor(mentorData);
      await newMentor.save();
    }
  } catch (error) {
    console.error("Error inserting mentors data:", error);
  }
}

insertMentorsData();

// --End--

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
