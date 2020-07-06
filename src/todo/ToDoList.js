import React from 'react';
import ListItem from './ToDoItem';

function ListListOfItems(props){

    return(
        <ul>
            {props.list.map(text=>(
                    <ListItem value={text}/>
                ))}
        </ul>
    )
}

export default ListListOfItems;