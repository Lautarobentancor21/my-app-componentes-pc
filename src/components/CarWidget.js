import './estilos.css';
import React from 'react';
import {UseCart} from '../provider/context'

function CarWidget(){

   const {cart} = UseCart();
   
    return (
        <div> 
            
             <h2>Carrito</h2> 
             {cart.length}
             {console.log(cart)}
            
         </div>
    )
}

export default CarWidget;