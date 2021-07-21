import React,{ useEffect, useState} from 'react'
import { getFirestore } from "./FireBase"



function GetItem(item) {

    const[items, setItems] = useState([])

    const[loading, setLoading] = useState(false)

    const [id, setId] = useState([])
   
    const db = getFirestore()
   
    const itemCollection = db.collection("items")

    const pedido = db.collection("pedido")

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


  

    function sendOrden(){
      pedido.add(item).then(({id})=>{
        setId(id)
      }).catch(e => {console.log(e)}).finally(console.log("se termino"))
    }

    return (
        <div>

            { console.log(items)}
            <button onClick={sendOrden}>confirmar pedido</button>
  
        </div>
    )
}

export default GetItem
