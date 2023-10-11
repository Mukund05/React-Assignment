import { useState, useEffect } from "react";
import ToDoItem from "./Components/ToDoItem";
import InputArea from "./Components/InputArea";
import axios from 'axios';
import './app.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const addItem = () => {
    console.log(inputText);
    axios.post('http://localhost:5000/api/todos', { task: inputText })
      .then(response => {
        setItems(prevItems => [...prevItems, response.data]);
      })
      .then(() => {
        console.log('Todo added successfully!');
      })
      .catch(error => {
        console.error('Error adding todo:', error);
      })
      .finally(() => {
        setInputText('');
      });
  };
  
  
  

  const deleteItem = (id) => {
    const todoId = items[id]._id;
  
    axios.delete(`http://localhost:5000/api/todos/${todoId}`)
      .then(response => {
        if (response.data) {
          setItems(prevItems => prevItems.filter((item) => item._id !== todoId));
        } else {
          console.error('Delete request was not successful.');
        }
      })
      .catch(error => console.error('Error deleting todo:', error));
  };

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onSubmit={addItem} onChange={handleChange} text={inputText} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem key={index} id={index} text={todoItem.text} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

