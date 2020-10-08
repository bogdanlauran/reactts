import React, { useState } from 'react';
import propTypes from 'prop-types';

function CreateTodo({ onCreateTodo }) {
    const [text, setText] = useState('');

    const inputChange = event => {
        setText(event.target.value);
    };

    const createTodo = () => {
        onCreateTodo(text);
        setText('');
    };

    return (
        <div className="row mt-5">
            <input type="text" className="form-control col-2" placeholder="Todo.." onChange={inputChange} value={text}></input>
            <button className="btn btn-dark ml-3" onClick={createTodo}>Click</button>
        </div>
    )
}

export default CreateTodo;