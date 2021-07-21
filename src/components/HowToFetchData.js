import React, { useEffect, useState } from "react";
import "../App.css"
import ItemCount from './ItemCount'
import { getFirestore } from "../firebase/FireBase"



function HowToFetchData() {
  const[items, setItems] = useState([])
  const[loading, setLoading] = useState(false)
  const db = getFirestore()
    
  const itemCollection = db.collection("items")

  useEffect(() =>{
      setLoading(true)
      itemCollection.get().then(
          (querySnapshot)=>{
            if(querySnapshot.size === 0){
              console.log('no hay resultados')
            }
            setItems(querySnapshot.docs.map(doc => doc.data()))
          }).catch((error)=>{console.log('Error searching items', error)}).finally(()=>{setLoading(false)})

  }, [] );
  console.log(items);
 
   return ( 
    <div id="body">
        {items !== null ? ( 

          
            items.map((data, index) => {
              return(
                <div id="content">
                 <div id="tarjeta">
                  <h1>{data.name}</h1>
                  <img id="imagen" src={data.src}></img> 
                   <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque libero eveniet veritatis. Ratione temporibus repelle</h2>
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
