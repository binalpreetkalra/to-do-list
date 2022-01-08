import React, {useState, useEffect} from "react";
import './App.css';
import 'animate.css';

//Importing Components
import Form from  "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  //States
  //inputText is the actual value, setInputText is the function that allows you to change the value)
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); //an array of todos (objects), made it into an entirely diff state bc i want more functionality for it
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //Functions/Events
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

    //USE EFFECT
    useEffect(() => {
      filterHandler();
    }, [todos, status]); //two arguments - everytime todo value/status changes, this runs
    
  return (
    <div className="App">
      <header>
        <h1 class="animate__animated animate__bounceIn animate__slower animate__infinite">TIME TO BE PRODUCTIVE</h1>  
      </header>
        <h2 class="animate__animated animate__slideInLeft">What are your goals for today?</h2>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
      />
      <TodoList 
        filteredTodos={filteredTodos} 
        setTodos={setTodos} 
        todos={todos}/>
    </div>
  );
}

export default App;
