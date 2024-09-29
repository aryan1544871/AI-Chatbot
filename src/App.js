import React, { useEffect} from 'react'
import {llamaModel} from "./llama"

function App() {

  async function runModel(){
    const res = await llamaModel("Java code to add two numbers");
    const textResponse = res.choices[0].message.content;
    console.log(textResponse);
  }

  return (
    <div className="app">
     <section className="side-bar">
        <button>+ New Chat</button>
        <ul className = "history">
          <li>Aryan</li>
          <li>Kumar</li>
        </ul>
        <nav>
          <p>Made by Aryan</p>
        </nav>
     </section>
     <section className = "main">
      <h1>AI-Chatbot</h1>
      <ul className = "feed"></ul>
      <div className = "bottom-container">
        <div className = "input-container">
          <input/>
          <div id = "submit" onClick = {runModel}>➢</div>
        </div>
        <p className="info">By messaging AI-Chatbot, you agree to our Terms and have read our Privacy Policy.</p>
      </div>
     </section>

    </div>
  );
}

export default App;
