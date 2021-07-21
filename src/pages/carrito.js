import "../components/estilos.css"
import React from 'react'
import {UseCart} from '../provider/context'
import {Link} from "react-router-dom"
import Firebase from "../firebase/GetItem"



function carrito() {
  
    const {cart} = UseCart();
    const{DeleteItem} = UseCart()
    
    function suma( ){
    
       const _ = require('lodash')

       let total = _.sumBy(cart, c => c.obj.price)
       console.log(total)
       return(
           <div>
            <h2>precio total : ${total}</h2>
            <Firebase item = {cart} />
           </div>
          
           
       )

    }
  
    if(cart.length >= 1){
        return( <div>
            <h2>Carrito</h2>
            <div>
               { suma()} 
            </div>
            {cart.map(item => {
              return (
                  <div>
                      <div>
                          
                         <h2 className="h2"> nombre {item.obj.name}</h2>
                         <h3 className="h3"> precio $ {item.obj.price}</h3>
                         <button onClick={() => DeleteItem(item)}>eliminar item</button>
                                                        
                      </div>  
                  </div>
              )
          })} 
     </div>)
    }else if(cart.length < 1){
        return (
            <div className="card">
                
                <h2>no hay nada en el carrito</h2>
                <img className="img-carrito" src="/img/carrito.png"></img>
                <button><Link className="stylesLink" to="/productos"> volver a productos </Link></button>

            </div>
        )
    }

}

export default carrito
