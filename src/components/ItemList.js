import './estilos.css';
import React from 'react'
import info from "./json/info.json"



export default function ItemList() {
    return(
        info.map( (icono, index) => {
            return ( 
                <div>

                <img src={icono.src}></img>
                <h1>{icono.producto}</h1>
                <h2>precio:{icono.precio}</h2>
                <h3>descripcion: {icono.descripcion}</h3>
                
                
                
                </div>
            )
        })
    
    )
}