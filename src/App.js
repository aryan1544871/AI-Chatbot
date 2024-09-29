import React, { useEffect, useState} from 'react'
import {llamaModel} from "./llama"

function App() {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  function handleEnterKey(event){
    if(event.key === 'Enter'){
      runModel();
    }
  }
  function createNewChat(){
    setMessage(null);
    setValue ("");
    setCurrentTitle(null);
  }

  function handleClick(uniqueTitle){
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setValue ("");
  }

  async function runModel(){
    const res = await llamaModel(value);
    const textResponseObject = res.choices[0].message;
    setMessage(textResponseObject);

  }

  useEffect(()=>{
    if(!currentTitle && value && message){
      setCurrentTitle(value)
    }
    if(currentTitle && value && message){
      setPreviousChats (prevChats => (
        [...prevChats, 
          {
            title : currentTitle,
            role : "User",
            content : value
          },
          {
            title : currentTitle,
            role : "AI-Chatbot",
            content : message.content
          }
         ]
      ) )
    }

  },[message, currentTitle])

  const currentChat = previousChats.filter (preChats => preChats.title === currentTitle)
  const uniqueTitles = Array.from (new Set (previousChats.map (preChats => preChats.title )));
  return (
    <div className="app">
     <section className="side-bar">
        <button onClick={createNewChat}>+ New Chat</button>
        <ul className = "history">
          {uniqueTitles.map((uniqueTitle, index)=> <li key={index} onClick={()=> handleClick(uniqueTitle)}>{uniqueTitle}</li>)}
        </ul>
        <nav>
          <p>Made by Aryan</p>
        </nav>
     </section>
     <section className = "main">
      {!currentTitle && <h1>AI-Chatbot</h1>}
      <ul className = "feed">
        {currentChat?.map((chatMessage,index) =><li key = {index}>
          <p className='role'>{chatMessage.role}</p>
          <p>{chatMessage.content}</p>
        </li>)}
      </ul>
      <div className = "bottom-container">
        <div className = "input-container">
          <input placeholder='Message AI-Chatbot' value = {value} onChange = {(e) => setValue(e.target.value)} onKeyDown={handleEnterKey}/>
          <div id = "submit" onClick = {runModel}>➢</div>
        </div>
        <p className="info">AI-Chatbot</p>
      </div>
     </section>

    </div>
  );
}

export default App;
