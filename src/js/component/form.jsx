import React, { useState } from "react";

const Form = () => {
    const [name , setName] = useState('vacio')
    const [lastname , setLastname] = useState('vacio ape')

    console.log('se cargo el componente form')

    function cambioName(e){
        console.log('cambioName')
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setName(e.target.value)
    }

    

	return (
        <>
            <h1>Form</h1>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input value={name}   onChange={cambioName}  type="text" className="form-control" id="name"  placeholder="Ingresa tu nombre"/>
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Apellido</label>
                <input value={lastname} onChange={(e)=>{setLastname(e.target.value)}} type="text" className="form-control" id="lastname" placeholder="Ingresa tu Apellido"/>
            </div>
            
        </>
		
	);
};

export default Form;
