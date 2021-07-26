import React from 'react'
import '../components/estilos.css';
import {Link} from "react-router-dom"

function home() {
    return (
        <div >
            <div id="box">
                <h2>tienda de ropa</h2>
                <img id="img" src="img/ropa.jpg"></img>
                <Link id="link" to="/productos">Productos</Link>
                
            </div>
        </div>
    )
}

export default home
