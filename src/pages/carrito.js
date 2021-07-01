import "../components/estilos.css"
import React from 'react'
import {UseCart} from '../provider/context'
import {Link} from "react-router-dom"


function carrito() {

let condition = true

    

    const {cart} = UseCart();

    const{DeleteItem} = UseCart()

    function suma( ){
        const {cart} = UseCart();
       const _ = require('lodash')

       let total = _.sumBy(cart, c => c.obj.price)
       console.log(total)
       return(
           <h2>precio total : ${total}</h2>
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
                         <h2 className="h2"> nombre:{item.obj.title}</h2>
                         <h3 className="h3"> precio: $ {item.obj.price}</h3>
                         <button onClick={() => DeleteItem(item)}>eliminar item</button>
                      </div>  
                  </div>
              )
          })} 
     </div>)
    }else if(cart.length < 1){
        return (
            <div>
                
                <h2>no hay nada en el carrito</h2>
                <button><Link className="stylesLink" to="/productos"> volver a productos </Link></button>

            </div>
        )
    }

}

export default carrito
