import React,{ useEffect, useState} from 'react'
import { getFirestore } from "./FireBase"



function GetItem(item) {

    const[items, setItems] = useState([])

    const[loading, setLoading] = useState(false)

    const [id, setId] = useState([])
   
    const db = getFirestore()
   
    const itemCollection = db.collection("items")

    const pedido = db.collection("pedido")

    const [price, setPrice] = useState([])

    

  

    function sendOrden(){
      pedido.add(item).then(({id})=>{
        setId(id)
      }).catch(e => {console.log(e)}).finally(alert("pedido realizada"))
    }

    return (
        <div>

            { console.log(items)}
            <button onClick={sendOrden}>confirmar pedido</button>
           
        </div>
    )
}

export default GetItem
