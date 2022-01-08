import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    //Events
    const deleteHandler=() => {
        setTodos(todos.filter((el) => el.id !== todo.id));  //if element when going through the list matchs todo id, then get rid of it
    };

    //updates specific property of completed if its true or false depending on if it matches
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){ //if some element called item (whatever the user clicks) matches the id of of the item in the list, modifies only that item
                return {
                    ...item, 
                    completed: !item.completed,
                    }; //only trying to modify completed property
                }
                return item;
            })
        );
    };

    return(
        //if this is true, can add class of completed, if not, nothing is added
        <div className ="todo">
            <li className ={`todo-item ${todo.completed ? "completed" : ""} `}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;