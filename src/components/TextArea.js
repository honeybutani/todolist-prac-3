import React, { useState } from "react";
import "../components/TextArea.css";
export default function TextArea({ addTask, toggle }) {
  const [userInput, setUserInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  //on esacape key pop out of text field and on enter if no value then show error else set to localstorage and show  
  const handleSubmit = (e) => {
    if (e.key === "Escape") { 
      toggle();
    } 
    else if (e.key === "Enter") {
      if (!e.currentTarget.value) {
        setErrorMessage("field cannot be empty!");
      } else {
        e.preventDefault();
        addTask(userInput);
        e.currentTarget.value = "";
        toggle();
      }
    }
  };
  return (
    <div className="textform-container">
      <input
        type="text"
        autoComplete="off"
        id="textinput"
        autoFocus
        className="textform"
        placeholder="Enter text"
        onChange={handleChange}
        onKeyUp={handleSubmit}
      />
      {errorMessage && (
        <p className="error" style={{ color: "#F61C04" }}>
          {" "}
          {errorMessage}{" "}
        </p>
      )}
    </div>
  );
}
