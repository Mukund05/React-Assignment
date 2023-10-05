import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  function addItem() {
    if (inputText === "") {
      alert("Please add a task");
    } else {
      setTodos([...todos, inputText]);
      setInputText("");
    }
  }

  function deleteItem(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Todo List</h1>
        </div>
        <div className="form">
          <input
            type="text"
            placeholder="Add a task"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="button" onClick={addItem}>Add</button>
        </div>
        <div className="list">
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {index+1}. {todo}
                <button className="button" onClick={() => deleteItem(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
