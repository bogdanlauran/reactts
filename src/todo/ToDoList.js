import React from 'react';
import ListItem from './ToDoItem';
import propTypes from 'prop-types';

function TodoList(props){

    const deleteItem = idx => {
        props.onDeleteTodoClick(idx)
    };

    return(
        <ul className="list-group list-group-flush col-6">
            {props.list.map((text, idx)=>(
                    <ListItem value={text} key={idx} onDelete={() => deleteItem(idx)}/>
                ))}
        </ul>
    )
}

TodoList.propTypes = {
    onDeleteTodoClick: propTypes.func.isRequired
}

export default TodoList;