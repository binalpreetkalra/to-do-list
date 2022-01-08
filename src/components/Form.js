import React from 'react';

//create new component
const Form = ({setInputText, inputText, todos, setTodos, setStatus}) => {
  //Here able to write javascript code/functions
  //can able all functions with handler at the end for consistency
    const inputTextHandler = (e) => {
      setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
      e.preventDefault(); //prevents default behaviour (refresh page)
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random()*1000}
      ]);
      setInputText(''); //reset state back to zero
    }
    const statusHandler = (e) => {
      setStatus(e.target.value);
    }
    //onChange - function is run everytime the input is changed
    return(
       <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form;