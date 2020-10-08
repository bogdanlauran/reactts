import React, { useState, useEffect } from 'react';

export default function HooksExample() {
    const [todo, setTodo] = useState(null);
    const [seconds, setSeconds] = useState(0);

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(todo => {
    //         console.log('Facut request.');
    //         setTodo(todo);
    //     })

    useEffect(() => {
        (async () => {
            const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
            console.log('Facut request.', todo);
            setTodo(todo);
        })();
    }, []);

    useEffect(() => {
        // console.log('Este secunda:', seconds);

        setTimeout(() => {
            setSeconds(seconds + 1);
        }, 1000);
    }, [seconds]);

    return (
        <>

        </>
    )
}