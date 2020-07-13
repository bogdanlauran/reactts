import React, { useState } from 'react';

function CreateTodo({ onCreateTodo }) {
    const [text, setText] = useState('');

    const inputChange = event => {
        setText(event.target.value);
    };

    const createTodo = () => {
        onCreateTodo(text);
    };

    return (
        <div>
            <input type="text" placeholder="Todo.." onChange={inputChange}></input>
            <button type="button" onClick={createTodo}>Click</button>
        </div>
    )
}

export default CreateTodo;