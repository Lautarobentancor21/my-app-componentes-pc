import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import NavBar from './components/NavBar';
import Contenedor from './components/Contenedor';
import ItemCount from './components/ItemCount';


function App() {
    return (
        <div className = "container1" >
        <NavBar / >
        <Contenedor nombre="componentes" nombre1="Arma tu pc" nombre2="Presupuestos" / > 
        < ItemCount />
        </div>  
    )
}

export default App;