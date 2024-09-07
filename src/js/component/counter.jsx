import React, { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(20)

    //useEffect( funcion callback, , [elemento a rastrear] )
    
    useEffect(()=>{
        console.log('SE cargo la pagina')
    },[])
    
    useEffect(()=>{
        console.log('count cambio')
    },[count])

    useEffect(()=>{
        console.log('count2 cambio')
    },[count2])

    useEffect(()=>{
        console.log('count o count2 cambio')
    },[count,count2])

    function suma(){
        console.log('suma')
        setCount( count + 1 )
    }

    function resta(){
        console.log('resta')
        setCount2( count2 - 1 )
    }
	return (
        <>
		    <h1>Counter</h1>	
            <p>{count}</p>
            <button onClick={suma}>Agregar</button>
            <p>{count2}</p>
            <button onClick={resta}>Quitar</button>
        </>
	);
};

export default Counter;
