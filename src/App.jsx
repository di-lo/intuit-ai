import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function askQuestion() {
    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch(
        `http://localhost:3000/ask?question=${question}`
      );

      const data = await response.json();
      setAnswer(data.answer);
    } catch (err) {
      setError("Something went wrong. Is the backend running?");
    } finally {
      setLoading(false);
    }
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
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;