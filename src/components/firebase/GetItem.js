import React,{ useEffect, useState} from 'react'
import { getFirestore } from "./FireBase"

function GetItem() {
    const[items, setItems] = useState([])
    const[loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)

        const db = getFirestore()
    
        const itemCollection = db.collection("items")
        
      
        itemCollection.get().then(
            (querySnapshot)=>{
              if(querySnapshot.size === 0){
                console.log('no hay resultados')
              }
              setItems(querySnapshot.docs.map(doc => doc.data()))
            }).catch((error)=>{console.log('Error searching items', error)}).finally(()=>{setLoading(false)})

    }, [] );

    return (
        <div>

            { console.log(items)}
            
        </div>
    )
}

export default GetItem
