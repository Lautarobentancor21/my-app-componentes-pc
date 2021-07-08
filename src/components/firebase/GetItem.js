import React,{ useEffect, useState} from 'react'
import { getFirestore } from "./FireBase"

function GetItem() {
    const[items, setItems] = useState([])
    const[loading, setLoading] = useState(false)
    const [id, setId] = useState([])
    const [price, setPrice] = useState([])

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




    const item = {
      client: "lautaro bentancor",
      pedido: [{pedido:"gorro de lana" , 
      quality: 2,
      price: 200 }]

    }

    function sendOrden(){
      pedido.add(item).then(({id})=>{
        setId(id)
      }).catch(e => {console.log(e)}).finally(console.log("se termino"))
    }

    function savePriced(e){
      setPrice(e.target.value)
    }

    function update(){
      const doc = db.collection("pedido").doc(id)
      doc.update({price: price})
    }



    return (
        <div>

            { console.log(items)}
            <button onClick={sendOrden}>Orden de compra</button>
            <label>Precio</label>
            <input onChange={savePriced}placeholder="Precio"></input>
            <button onClick={update}>Modificar precio</button>
            
        </div>
    )
}

export default GetItem
