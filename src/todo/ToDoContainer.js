import React, { useState } from 'react';
import ListListOfItems from './ToDoList';
import InputAndBtn from './CreateTodo';

function Todo(){
    const [initialText, setInitialText] = useState('');
    const [currentText, setCurrentText] = useState([]);

    const clicked = () =>{setCurrentText(currentText => [...currentText, initialText])};

    return(
        <div>
            <InputAndBtn setInitialText={setInitialText} clicked={clicked}/>
            <ListListOfItems list={currentText}/>
        </div>
    )
}

export default Todo;