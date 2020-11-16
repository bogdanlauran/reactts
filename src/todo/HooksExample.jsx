import React from 'react';
import useFetch from './UseFetch';

export default function HooksExample() {
    //const [todo, setTodo] = useState(null);
    //const [seconds, setSeconds] = useState(0);

    const todos = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <div>
            <h1>Hello!</h1>
                {todos.loading ? (<h3>loading...</h3>) 
                : (todos.todos.map(todo => <pre>{JSON.stringify(todo, null, "\t")}</pre>))}
        </div>
    );

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(todo => {
    //         console.log('Facut request.');
    //         setTodo(todo);
    //     })

    // useEffect(() => {
    //     (async () => {
    //         const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
    //         console.log('Facut request.', todo);
    //         setTodo(todo);
    //     })();
    // }, []);

    // useEffect(() => {
    //     // console.log('Este secunda:', seconds);

    //     setTimeout(() => {
    //         setSeconds(seconds + 1);
    //     }, 1000);
    // }, [seconds]);

    // return (
    //     <>

    //     </>
    // )
}