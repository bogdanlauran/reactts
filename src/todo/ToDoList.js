import React from 'react';
import ListItem from './ToDoItem';

function TodoList(props){

    const deleteItem = text => {props.remove(text)};

    return(
        <ul>
            {props.list.map(text=>(
                    <ListItem value={text} delete={deleteItem}/>
                ))}
        </ul>
    )
}

export default TodoList;