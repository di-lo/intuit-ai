import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
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
      <button>Ask</button>
    </div>
  );
}

export default App;
