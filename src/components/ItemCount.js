import './estilos.css';
import React, {useState} from 'react'
import {UseCart} from '../provider/context'

export default function ItemCount(name) { 
    
    
    const {AddToCart} = UseCart()
    const [count, setCount] = useState(0);

    function aumentarCont(){
        setCount(count+ 1)
    }

    function decremento(){
        setCount(count-1)
        
    }


    let objPedido = {
        "name": name.name,
        "price": name.price,
         "id" : name.id,
         "src": name.src ,
         "total": name.price * count ,
         "cantidad" : count 
    }



    return(
        <div>
            <div id="contador"> 
                <button onClick={aumentarCont}>+</button>
                <p>{`cantidad ${count}`}</p>
                {count !== 0 ?  <button onClick={decremento}>-</button> : null }
            </div>
        <div> 
            
        {count !== 0 ? <button onClick={()=> AddToCart(objPedido)}>Agregar a carrito</button> : null } 
        
        </div>
            </div>
    )
}
