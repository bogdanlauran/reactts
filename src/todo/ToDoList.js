import React from 'react';
import ListItem from './ToDoItem';

function TodoList(props){

    return(
        <ul>
            {props.list.map(text=>(
                    <ListItem value={text}/>
                ))}
        </ul>
    )
}

export default TodoList;