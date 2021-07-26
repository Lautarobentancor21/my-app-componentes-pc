import './estilos.css';
import React from 'react';
import { Navbar } from 'react-bootstrap'
import CarWidget from './CarWidget'
import {Link} from "react-router-dom"




export default function NavBar () {
    return ( 
        
            <Navbar id="navbar">
        
       
            <Link to="/home"><Navbar Brand  > inicio </Navbar></Link>   
            <Link to="/productos"><Navbar Brand > Productos </Navbar></Link>
            

          
             < CarWidget / >    
            </Navbar >
    )
}