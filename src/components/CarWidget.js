import './estilos.css';
import React ,{useState}  from 'react';




function CarWidget(){

    const [cart , setCart] = useState ([])




    return (
        <div> 
             <h2>Carrito</h2> 
             {cart.length}
         </div>
    )
}

export default CarWidget;