import { useState, useEffect } from 'react';

export default function useFetch(url){

    const[todos, setTodos] = useState({
        loading: true,
        todos: null
    });
    const delay = time => arg => new Promise(resolve => setTimeout(() => resolve(arg), time));

    useEffect(() => {
        (async () => {
            await fetch(url)
            .then(response => response.json())
            .then(delay(2000))
            .then(response => 
                setTodos({
                    loading: false,
                    todos: response
                })
            );
        })();
    }, [setTodos]);

    return todos;
}
