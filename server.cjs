const express = require("express");
const cors = require("cors");
const docs = require("./knowledge.cjs");

const app = express();
app.use(cors());

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
  const words = question.split(" ");

  const scoredDocs = docs.map((doc) => {
    let score = 0;

    for (const word of words) {
      if (doc.text.toLowerCase().includes(word)) {
        score++;
      }
    }

    return {
      id: doc.id,
      text: doc.text,
      score: score
    };
  });

  const topDocs = scoredDocs
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  res.json({
    answer: topDocs.length > 0 ? topDocs[0].text : "I could not find an answer.",
    sources: topDocs
  });
  
});
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});