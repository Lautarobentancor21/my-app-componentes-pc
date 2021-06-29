import './estilos.css';
import React, {useState} from 'react'
import {UseCart} from '../provider/context'




export default function ItemCount(obj) { 
    


    const {AddToCart} = UseCart()
    const [count, setCount] = useState(0);

    

    function aumentarCont(){
        setCount(count+ 1)
    }

    function decremento(){
        setCount(count-1)
        
    }

    return(
        <div>
        <div id="contador">
         
           
        <button onClick={aumentarCont}>+</button>
          <p>{`cantidad ${count}`}</p>
        {count !== 0 ?  <button onClick={decremento}>-</button> : null }
     </div>
     <div> 

     
     {count !== 0 ? <button onClick={()=> AddToCart(obj) }>Agregar a carrito</button> : null } 
     
         
        
    </div>
     </div>
    )
}
