import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  async function askBackend() {

    const response = await fetch("http://localhost:3000/hello");

    const data = await response.json();

    setMessage(data.message);

  }
  return (
    <div>
      <h1>Intuit AI Assistant</h1>
      <textarea
        rows="10"
        cols="80"
        placeholder="Your conversation will appear here..."
      ></textarea>
      <br />
      <input placeholder="Ask a question" />
      <button onClick={askBackend}>Ask</button>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
