import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function askQuestion() {
    const response = await fetch(
      `http://localhost:3000/ask?question=${question}`
    );

    const data = await response.json();
    setAnswer(data.answer);
  }

  return (
    <div>
      <h1>Intuit AI Assistant</h1>

      <textarea
        rows="8"
        cols="50"
        value={answer}
        placeholder="Answer will appear here..."
        readOnly
      />

      <br />

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question"
      />

      <button onClick={askQuestion}>Ask</button>
    </div>
  );
}

export default App;