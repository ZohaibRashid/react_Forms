import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [inputText, setInputText] = useState("");

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setInputText(name);
  }

  return (
    <div className="container">
      <h1>Hello {inputText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
