import React, { useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './ToDoList';

function TodoContainer(){
    const [todos, setTodos] = useState([]);

    const onCreateTodoClick = text => {
        setTodos([
            ...todos,
            text
        ]);
    };

    return(
        <div>
            <CreateTodo onCreateTodo={onCreateTodoClick}/>
            <TodoList list={todos}/>
        </div>
    )
}

export default TodoContainer;