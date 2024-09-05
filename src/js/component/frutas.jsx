import React, { useState } from "react";

const Frutas = ()=>{

    const [frutas,setFrutas] = useState(['lulo','cas','piña','fresa','tomatillo','banano','cas'])
    const [texto,setTexto]=  useState('hola frutas')

    function addItem(){
        console.log('addItem')
        let elementos = [1,2,3,4,5]
        console.log(elementos)
        elementos.push(6)
        console.log(elementos)
        console.log(frutas)
        console.log(...frutas)
        // frutas.push('pitaya')
        // frutas = []
        setFrutas([...frutas,'mango'])
        console.log(frutas)
    }

    return(
        <>
            <h1>Frutas</h1>
            {texto}     
            <br/>
            {frutas}   
            <h2>iterar Frutas</h2>
            {frutas.map( (fruta,index)=> <p key={index}> {fruta} - {index} </p> )}
            <button onClick={()=>addItem()} >agregar fruta</button>
        </>
    )
}

export default Frutas