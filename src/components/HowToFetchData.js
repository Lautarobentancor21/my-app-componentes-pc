import React, { useEffect, useState } from "react";
import "../App.css"

function HowToFetchData() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=7")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  console.log(data);
   return ( 
    <div>
        {data !== null ? (
        data.map((data, index) => {
              return(
                 <div>
                  <h1>{data.title}</h1>
                  <img id="imagen" src={data.image}></img>
                  <h2>{data.description}</h2>
                  <h3>precio :{data.price}  </h3>
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
