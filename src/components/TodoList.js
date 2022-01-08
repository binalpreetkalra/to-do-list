import React from 'react';
//Import Components
import Todo from './Todo';

//{} means you can write JS code in it
//need to attach the ID as a key to ensure each list item renders properly
const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        todos={todos} 
                        setTodos={setTodos}
                        key={todo.id} 
                        todo={todo} 
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;