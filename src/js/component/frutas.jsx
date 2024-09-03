import React, { useState } from "react";

const Frutas = ()=>{

    const [frutas,setFrutas] = useState(['lulo','cas','piña','fresa','tomatillo','banano','cas'])
    const [texto,setTexto]=  useState('hola frutas')

    return(
        <>
            <h1>Frutas</h1>
            {texto}     
            <br/>
            {frutas}   
            <h2>iterar Frutas</h2>
            {frutas.map( (fruta,index)=> <p key={index}> {fruta} - {index} </p> )}
        </>
    )
}

export default Frutas