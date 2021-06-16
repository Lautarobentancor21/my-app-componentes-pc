import './estilos.css';
import React from 'react'
import dato from "./json/productos.json"
import ItemList from "./ItemList"

export default function ItemCount() { 
    
    function aumentarCont(){
        setClicks(clicks+ 1)
    }

    function decremento(){
        setClicks(clicks-1)
        if(clicks <= 0){
             alert("ya no puedes clickear")
             
        }
    }

    function comprar(){
        alert("agregado al carrito")
    }
   


const [clicks, setClicks] = React.useState(0);
    
    return(

    dato.map( (item,index)=>{
        return(<div id="producto" >
                <div id="card">
                    <div id="center"> 
                        <h2>{item.producto}</h2>
                        <img src={item.src}></img>
                       <h2>{item.precio} $</h2>
                   </div>
                   <div id="contador">
                       <button onClick={aumentarCont}>+</button>
                         <p>{`cantidad ${clicks}`}</p>
                        <button onClick={decremento}>-</button>
                    </div>
                    <div> 
                       
                        <button onClick={comprar}>Comprar</button>
                       
                    </div>
                </div>

             </div> )
        })
    )}
