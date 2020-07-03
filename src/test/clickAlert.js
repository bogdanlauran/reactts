import React, { useState } from 'react';


function Bleh(props){
    const [text, setText] = useState('');
    const [texts, setTexts] = useState([]);
    
    const clicked = () =>{setTexts(texts => [...texts, text])};

    return(
        <div>
            <input type="text" id="fname" name="fname" placeholder="Input" onChange={(event)=>setText(event.target.value)}></input>
            {/* <button type="button" onClick={() => alert(text)}>Click</button> */}
            <button type="button" onClick={clicked}>Click</button>
            <ul>
                {texts.map(text=>(
                    <li>{text}</li> 
                ))}
            </ul>
        </div>
    )
}


function Main(){

    return(
        <div>
            <Bleh />
        </div>
    );
}

export default Main;