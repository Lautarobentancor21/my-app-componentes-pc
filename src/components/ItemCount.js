import './estilos.css';
import React from 'react'



export default function ItemCount() { 
    
    function aumentarCont(){
        setCount(count+ 1)
    }

    function decremento(){
        setCount(count-1)
        if(count <= 0){
             
        }
    }

    function comprar(){
        alert("agregado al carrito")
    }

   


const [count, setCount] = React.useState(0);
    
    return(
        <div>
        <div id="contador">
         
           
        <button onClick={aumentarCont}>+</button>
          <p>{`cantidad ${count}`}</p>
        {count !== 0 ?  <button onClick={decremento}>-</button> : null }
     </div>
     <div> 

     
     {count !== 0 ? <button onClick={comprar}>Agregar a carrito</button> : null } 
     
         
        
    </div>
     </div>
    )
}
