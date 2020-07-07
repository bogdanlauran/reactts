import React from 'react';

function CreateTodo({onTextChange, onClicked}){
    
    return(
        <div>
            <input type="text" id="fname" name="fname" placeholder="Input" onChange={(event)=>onTextChange(event.target.value)}></input>
            <button type="button" onClick={onClicked}>Click</button>
        </div>
    )
}

export default CreateTodo;