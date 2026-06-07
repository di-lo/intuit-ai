const express = require("express");

const app = express();

app.get("/", (req, res) => {

  res.send("Backend is running!");

});

app.get("/hello", (req, res) => {
  res.json({ 
    name: "Dilara",
    company: "Intuit",
    role: "Software Engineer"
  });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});