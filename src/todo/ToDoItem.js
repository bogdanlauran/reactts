import React from 'react';

function ListItem(props){

    const deleteTodo = () => {props.delete(props.value)};

    return(
        <li>{props.value} <button class="btn btn-danger btn-sm rounded-0" type="button" onClick={deleteTodo}><i class="fa fa-trash"></i></button></li> 

    )
}

export default ListItem;