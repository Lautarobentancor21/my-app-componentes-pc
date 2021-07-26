import './estilos.css';
import React from 'react';
import {UseCart} from '../provider/context'
import {Link} from "react-router-dom"

function CarWidget(){

   const {cart} = UseCart();
   
    return (
        <div> 
           
            <Link id={cart.length < 1 ? "carrito" : "carrito2"} to="/carrito"> Carrito  </Link>                 
             {cart.length}
             
         </div>
    )
}

export default CarWidget;