const express = require("express");

const app = express();

const docs = [
  "Interns can ask their manager about vacation days.",
  "The AI assistant project uses React, Express, REST APIs, JSON, and GitHub.",
  "Frontend code lives in React. Backend code lives in Express.",
  "Developers should create a new Git branch for every feature."
];

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

app.get("/ask", (req, res) => {
  const question = req.query.question.toLowerCase();

  const result = docs.find((doc) =>
    doc.toLowerCase().includes(question)
  );

  res.json({
    answer: result || "I could not find an answer."
  });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});