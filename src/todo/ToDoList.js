import React from 'react';
import ListItem from './ToDoItem';

function TodoList(props){

    const deleteItem = text => {props.onDeleteTodoClick(text)};

    return(
        <ul>
            {props.list.map(text=>(
                    <ListItem value={text} onDelete={deleteItem}/>
                ))}
        </ul>
    )
}

export default TodoList;