import React, { useState } from "react";


const Onkeydown = ()=>{
    const [inputValue, setinputValue] = useState("")

    function oprimioTecla(e){
        console.log('oprimioTecla')
        console.log(e.key)
        console.log(e.keyCode)
        if(e.keyCode == 13){
            console.log('Oprimiste ENTER')
        }
    }

    return(
        <>        
            <h1>Onkeydown</h1>
            <input type="text" onKeyDown={oprimioTecla} name="input1" onChange={ (event)=>setinputValue(event.target.value)} value={inputValue} />
        </>
    )
}

export default Onkeydown