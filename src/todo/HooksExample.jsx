import React from 'react';
import useFetch from './UseFetch';

export default function HooksExample() {
    

    const todos = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <div>
            <h1>Hello!</h1>
                {todos.loading ? (<h3>loading...</h3>) 
                : (todos.todos.map(todo => <pre>{JSON.stringify(todo, null, "\t")}</pre>))}
        </div>
    );
}