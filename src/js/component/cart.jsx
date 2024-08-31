import React, { useState } from "react";

const Cart = (props)=>{
    // let totalItems = props.total
    const [totalItems, setTotalItems] = useState(props.total)
    const [carrito, setCarrito] = useState(1)
    function agregar(){
        console.log('agregar')
        // totalItems = totalItems + 1
        setTotalItems(totalItems + carrito)
        // totalItems++ =====>  totalItems = totalItems + 1
    }

    function sumarItem(){
        console.log('sumarItem')
        setCarrito( carrito + 1)
    }

    function restarItem(){
        console.log('restarItem')
        if(carrito >= 2){
            // restar
            setCarrito( carrito - 1)
        }
        // si numero es mayor a 2 resta
        // si no no hagas nada
    }
    return(
        <div className="text-center">

            <h1>Cart</h1>

            <h4>
                {totalItems}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
                  <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                </svg>
            </h4>

            <div className="card" style={{width: "18rem"}}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Aprende React</h5>
                    <p className="card-text">Libro aprende React , en este libro aprenderas sobre componenentes, props y hooks, especialmente el useState.</p>
                    <button onClick={restarItem}>-</button>
                    <input type="number" value={carrito} />
                    <button onClick={sumarItem}>+</button>
                    <a href="#" className="btn btn-primary" onClick={()=>agregar()}>Agregar al carrito</a>
                </div>
            </div>

            <button className="btn btn-danger" onClick={()=>setTotalItems(0)}>Limpiar carrito</button>
        </div>
    )
}

export default Cart