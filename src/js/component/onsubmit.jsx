import React, {useState} from "react";


const Onsubmit = ()=>{
    const [inputValue, setinputValue] = useState("")

    function envia(e){
        e.preventDefault()
        console.log('envia')
        console.log('Oprimiste ENTER')
        console.log('la tarea que se va a agregar es:', inputValue )
        setinputValue('')
        // inputValue = ''
    }

    return(
        <>        
            <h1>Onsubmit</h1>
            <form onSubmit={envia}>
                <input type="text" name="input1" onChange={ (event)=>setinputValue(event.target.value)} value={inputValue} />
            </form>
        </>
    )
}

export default Onsubmit