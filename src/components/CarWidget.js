import './estilos.css';
import React ,{useState}  from 'react';
import {UseCart} from '../provider/context'

function CarWidget(){

   const {cart} = UseCart();

   const{DeleteItem} = UseCart()
  
   
    return (
        <div> 
             <h2>Carrito</h2> 
             {cart.length}
             {console.log(cart)}
             {cart.map(item => {
                 return (
                     <div>
                         <h2 className="h2"> nombre:{item.obj.title}</h2>
                         <h3 className="h3"> precio: $ {item.obj.price}</h3>
                         <button onClick={() => DeleteItem(item)}>eliminar item</button>
                     </div>
                 )
             })}
         </div>
    )
}

export default CarWidget;