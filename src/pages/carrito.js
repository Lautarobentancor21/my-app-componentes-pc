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

       let total = _.sumBy(cart, c => c.total)
       
       return(
           <div>
            <h2>precio total : ${total}</h2>
            {console.log(cart)}
            <Firebase item = {cart} />
           </div>
          
           
       )

    }


    if(cart.length >= 1){
        return( <div id="box2" >
            <h2>Carrito</h2>
            <div>
               { suma()} 
            </div>
            {cart.map((item,index)  => {
               
              return (
                  
                  <div id="box3" >
                      <div id="carrito3" >

                         
                         
                         <h2 className="h2"> {item.name}</h2>
                         <h3 className="h3"> precio $ {item.price}</h3>
                         <h3> total $ {item.total}</h3>
                         <h3> cantidad {item.cantidad}</h3>
                         <img id="img2" src={item.src}></img>
                         <button id="botton" onClick={() => DeleteItem(item.id)}>eliminar item</button>
                                                        
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
