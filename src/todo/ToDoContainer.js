import React, { useState } from 'react';
import ListListOfItems from './ToDoList';

function Todo(){
    const [initialText, setInitialText] = useState('');
    const [currentText, setCurrentText] = useState([]);

    const clicked = () =>{setCurrentText(currentText => [...currentText, initialText])};

    return(
        <div>
            <input type="text" id="fname" name="fname" placeholder="Input" onChange={(event)=>setInitialText(event.target.value)}></input>
            <button type="button" onClick={clicked}>Click</button>
            <ListListOfItems list={currentText}/>
        </div>
    )
}

export default Todo;