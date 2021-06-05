import estilos from './estilos.css';
import 'react-bootstrap'
import React from 'react';


 

export default function Contenedor(props) {
    return (  
        <div className = "presentacion" >

        <div>
        <h2 > {props.nombre} </h2> 
        <p > aca esta escrito algo para solamente probar </p> 
        </div> 
        <div >
        <h2 > {props.nombre1} </h2> 
        <p> aca esta escrito algo para solamente probar </p> 
        </div> 
        <div>
        <h2 > {props.nombre2} </h2> 
        <p> aca esta escrito algo para solamente probar </p> 
        </div>

        </div>
    )

}