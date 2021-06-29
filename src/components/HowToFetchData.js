import React, { useEffect, useState } from "react";
import "../App.css"
import ItemCount from './ItemCount'


function HowToFetchData() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  console.log(data);

  const Objetos = () => { 
    return data
  }

  
  
   return ( 
    <div id="body">
        {data !== null ? ( 

          
        data.map((data, index) => {
              return(
                <div id="content">
                 <div id="tarjeta">
                  <h1>{data.title}</h1>
                  <img id="imagen" src={data.image}></img>
                  <h2>{data.description}</h2>
                  <h3>precio $ {data.price}  </h3>
                  <ItemCount obj = {data}/>
                </div>
                </div>
               )
           })
         ) : (
           <h3>Cargando</h3>
        )}
       </div>

      
   )
 
}

export default HowToFetchData;
