import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sources, setSources] = useState([]);

  async function askQuestion() {
    setLoading(true);
    setError("");
    setAnswer("");
    setSources([]);

    try {
      const response = await fetch(
        `http://localhost:3000/ask?question=${question}`
      );

      const data = await response.json();
      setAnswer(data.answer);
      setSources(data.sources || []);
    } catch (err) {
      setError("Something went wrong. Is the backend running?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
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

      <h3>Retrieved Sources</h3>
      <ul>
        {sources.map((source) => (
          <li key={source.id}>
            <strong>Doc {source.id}</strong> — Score: {source.score}
            <br />
            {source.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;