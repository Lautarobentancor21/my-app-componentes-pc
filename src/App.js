import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import NavBar from './components/NavBar';
import Contenedor from './components/Contenedor';



function App() {
    return (

        <div className = "container1" >
        <NavBar / >
        <Contenedor nombre="componentes" nombre1="Arma tu pc" nombre2="Presupuestos" / > 
        </div>  


    )

}

export default App;