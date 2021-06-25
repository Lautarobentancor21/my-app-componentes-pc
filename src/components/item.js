import './estilos.css';
import React from 'react'
import dato from "./json/productos.json"
import ItemCount from './ItemCount'

export default function Card() { 
    return(
    dato.map( (item,index)=>{
        return(<div id="producto" >
                <div id="card">
                    <div id="center"> 
                        <h2>{item.producto}</h2>
                        <img src={item.src}></img>
                       <h2>{item.precio} $</h2>
                   </div>

                   <ItemCount/>

                </div>

             </div> )
        })

    )
    }
