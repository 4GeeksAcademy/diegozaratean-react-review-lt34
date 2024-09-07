import React, { useEffect, useState } from "react";


const Getdata = () => {

    const [characters,setCharacters] = useState([])
    const [frutas,setFrutas] = useState(['mandarina','pitanga'])


    function getCharacters(){
        console.log('getCharacters')
        fetch('https://rickandmortyapi.com/api/character')
        .then( (response)=> response.json())
        // .then( (data)=> console.log(data.results))
        .then( (data)=> setCharacters(data.results))
    }

    useEffect(()=>{
        console.log('se cargo el componente')
        getCharacters()
    },[])

	return (
		<>
            <h1>Getdata</h1>
            {characters.map( (personaje)=> <p key={personaje.id}>{personaje.name}  id: {personaje.id} <img src={personaje.image} alt=""  /> </p> )}
        </>	
	);
};

export default Getdata;
