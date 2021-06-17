import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import NavBar from './components/NavBar';
import Contenedor from './components/Contenedor';
import ItemList from "./components/ItemList"
import Data from "./components/HowToFetchData"


function App() {
    return (
        <div className = "container1" >
        <NavBar / >
        <Contenedor / > 
       
        < ItemList / >

        < Data / >
      


        </div>  
    )
}

export default App;