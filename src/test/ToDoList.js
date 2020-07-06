import React from 'react';
import Ceva from './ToDoItem';

function CevaList(props){

    return(
        <ul>
            {props.list.map(text=>(
                    <Ceva value={text}/>
                ))}
        </ul>
    )
}

export default CevaList;