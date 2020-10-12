import React from 'react';
import propTypes from 'prop-types';
import './ToDoItem.css';

function ListItem(props) {

    const deleteTodo = () => {
        props.onDelete();
    };

    return (
        <li className="todo-item list-group-item">
            <span>
                {props.value}
            </span>
            <button className="btn btn-danger btn-sm rounded-1" type="button" onClick={deleteTodo}>
                <i className="fa fa-trash"></i>
            </button>
            
        </li>

    )
}

ListItem.propTypes = {
    onDelete: propTypes.func.isRequired 
};

export default ListItem;