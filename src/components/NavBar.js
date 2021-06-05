import './estilos.css';
import React from 'react';
import { Navbar } from 'react-bootstrap'
import CarWidget from './CarWidget'



export default function NavBar () {
    return ( <Navbar id="navbar">
       <a href="#"><Navbar Brand href = "#home" > Componentes </Navbar></a>   
       <a href="#"> <Navbar Brand href = "#About" > Armar tu pc </Navbar> </a>  
       <a href="#"> <Navbar Brand href = "#Contact" > Productos </Navbar></a>  
       <a href="#"> <Navbar Brand href = "#Contact" > Contacto </Navbar>  </a>
       < CarWidget / >    
        </Navbar >
    )
}