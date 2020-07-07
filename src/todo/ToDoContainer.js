import React, { useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './ToDoList';

function TodoContainer(){
    const [initialText, setInitialText] = useState('');
    const [currentText, setCurrentText] = useState([]);

    const clicked = () =>{setCurrentText(currentText => [...currentText, initialText])};

    return(
        <div>
            <CreateTodo onTextChange={setInitialText} onClicked={clicked}/>
            <TodoList list={currentText}/>
        </div>
    )
}

export default TodoContainer;