
const express = require("express");

const app = express();
const students = [
  {
    name: "Aman Shrey",
    email: "aman@gmail.com",
    enrolledCourse: "Python",
  },
  {
    name: "Shreya Gupta",
    email: "shreya@example.com",
    enrolledCourse: "Web Development",
  },
  {
    name: "Rahul Mishra",
    email: "rahul@example.com",
    enrolledCourse: "DSA in Java",
  },
];

app.get("/api", (req, res) => {
  res.render("students", { students });
});
