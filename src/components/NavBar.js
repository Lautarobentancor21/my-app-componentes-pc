import './estilos.css';
import React from 'react';
import { Navbar } from 'react-bootstrap'
import CarWidget from './CarWidget'
import {Link} from "react-router-dom"




export default function NavBar () {
    return ( 
        
    <Navbar id="navbar">
        
      
            <Link to="/"><Navbar Brand  > inicio </Navbar></Link>   
            <Link to="/arma"> <Navbar Brand  > Armar tu pc </Navbar> </Link>  
            <Link to="/productos"><Navbar Brand > Productos </Navbar></Link>
            <Link to="/about"> <Navbar Brand  > Contacto </Navbar>  </Link>
            <Link to="/carrito"> <Navbar Brand  > Carrito </Navbar>  </Link>

          
       < CarWidget / >    
        </Navbar >
    )
}