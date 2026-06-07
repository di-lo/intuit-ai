const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.json({ 
    name: "Dilara",
    company: "Intuit",
    role: "Software Engineer"
  });
});

app.listen(3000, () => {
  console.log("Server started");
});