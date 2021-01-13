import React, { useState } from 'react';
import CreateTodo from './CreateTodo';
// import HooksExample from './HooksExample';
import ToDoForm from './ToDoForm';
import TodoList from './ToDoList';

function TodoContainer(){
    const [todos, setTodos] = useState([]);

    const onCreateTodoClick = text => {
        setTodos([
            ...todos,
            text
        ]);
    };

    const deleteTodoClick = idx => {
        const newTodos = todos.filter((_, i)=>idx !== i);
        setTodos(newTodos);
    }

    return(
        <div>
            <CreateTodo onCreateTodo={onCreateTodoClick}/>
            <TodoList list={todos} onDeleteTodoClick={deleteTodoClick}/>
            <br/>
            {/* <HooksExample /> */}
            <ToDoForm />
        </div>
    )
}

export default TodoContainer;