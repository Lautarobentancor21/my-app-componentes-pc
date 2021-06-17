import React, { useEffect, useState } from "react";

function HowToFetchData() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
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
                  <h1>{data.id}</h1>
                  <h2>{data.description}</h2>
                  <img src={data.image}></img>
                </div>
               )
           })
         ) : (
           <h3>Cargada</h3>
        )}
       </div>
   )
  // //   <div>
  // //     {data !== null ? (
  // //       data.map((data, index) => {
  // //           return(
  // //             <div>
  // //               <h1>{data.id}</h1>
  // //               <h2>{data.title}</h2>
  // //             </div>
  // //           )
  // //       })
  // //     ) : (
  // //       <h3>Cargada</h3>
  // //     )}
  // //   </div>
  // // );
}

export default HowToFetchData;
