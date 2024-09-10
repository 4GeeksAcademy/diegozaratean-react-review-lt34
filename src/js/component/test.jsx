import React from "react";

const Test = () => {


    function getTask(){
        console.log('getTask')
        fetch('https://playground.4geeks.com/todo/users/chandler')
        .then( (response)=> response.json())
        .then( (data)=> console.log(data.todos))
    }

    function addTask(){
        console.log('addTask')
        // fetch('https://playground.4geeks.com/todo/users/chandler')
        // .then( (response)=> response.json())
        // .then( (data)=> console.log(data.todos))

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "label": "ver tv con joey",
                    "is_done": false
                }
            )
        };
        fetch('https://playground.4geeks.com/todo/todos/chandler', requestOptions)
        .then(response => response.json())
        .then((data)=> console.log(data));
    }

    function deleteTask(){
        console.log('deleteTask')
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };
        fetch('https://playground.4geeks.com/todo/todos/21', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))

    }

	return (
		<>
            <h1>Test chandler's todos</h1>
            <button onClick={getTask}>traer tareas</button>
            <button onClick={addTask}>crear tarea</button>
            <button onClick={deleteTask}>eliminar tarea</button>
        </>		
	);
};

export default Test;
