import React from 'react';


function Bleh(props){
    return(
        <div>
            <input type="text" id="fname" name="fname" placeholder="Input" onChange={(event)=>props={text:event.target.value}}></input>
            <button type="button" onClick={() => alert(props.text)}>Click</button>
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