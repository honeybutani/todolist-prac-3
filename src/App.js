import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import "./components/Header.css";
import "./App.css";
import "./components/Button.css";
import Button from "./components/Button.js";
import ToDoList from "./components/ToDoList.js";
import "./components/todolist.css";
import TextArea from "./components/TextArea.js";

function App() {
  //fetch data from localstorage and show data of same day
  const getLocalItems = () => {
    let list = localStorage.getItem("toDoList");
    var taskdate = window.localStorage.getItem("date");
    const nowDate = new Date().toDateString();
    if (!list) {
      return [];
    }
    // compare the expiry time of the item with the current time
    else if (nowDate !== taskdate) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(list);
      return [];
    } else {
      return JSON.parse(list);
    }
  };
  const [toDoList, setToDoList] = useState(getLocalItems());
  const [Buttontoggle, setButtontoggle] = useState(false);

  /* handleToggle take id and using map method check click id and update using setstate  by changing color */
  const handleToggle = (id) => {
    let changetaskcolor = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(changetaskcolor);
    localStorage.setItem("toDoList", JSON.stringify(changetaskcolor));
  };
  //set data and date to localstorage
  const addTask = (userInput) => {
    var addtaskdate = new Date().toDateString();
    let copytasklist = [...toDoList];
    copytasklist = [
      ...copytasklist,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copytasklist);
    localStorage.setItem("toDoList", JSON.stringify(copytasklist));
    window.localStorage.setItem("date", addtaskdate);
  };
  const toggle = () => {
    setButtontoggle(!Buttontoggle);
  };
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      {Buttontoggle && <TextArea addTask={addTask} toggle={toggle} />}
      {!Buttontoggle && <Button toggle={toggle} />}
    </div>
  );
}

export default App;
