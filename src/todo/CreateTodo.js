import React from 'react';

function InputAndBtn({setInitialText, clicked}){
    
    return(
        <div>
            <input type="text" id="fname" name="fname" placeholder="Input" onChange={(event)=>setInitialText(event.target.value)}></input>
            <button type="button" onClick={clicked}>Click</button>
        </div>
    )
}

export default InputAndBtn;