import React, { useState } from 'react';
import CevaList from './ToDoList';

function Todo(){
    const [text, setText] = useState('');
    const [texts, setTexts] = useState([]);

    const clicked = () =>{setTexts(texts => [...texts, text])};

    return(
        <div>
            <input type="text" id="fname" name="fname" placeholder="Input" onChange={(event)=>setText(event.target.value)}></input>
            <button type="button" onClick={clicked}>Click</button>
            <CevaList list={texts}/>
        </div>
    )
}

export default Todo;