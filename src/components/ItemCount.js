import './estilos.css';
import React from 'react'
import "./img/intel7.jpg";
import foto from "./img/intel7.jpg";

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

    return (
        <div id="producto" >
            <div id="card">
                <div id="center"> 
                    <h2>procesador i7</h2>
                    <img src={foto}></img>
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
        </div>
    )
}
