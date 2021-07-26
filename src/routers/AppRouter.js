import React from 'react'
import Home from "../pages/home"
import Products from "../pages/productos"
import carrito from "../pages/carrito"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from '../components/NavBar';


function AppRouter() {
    return ( 
        <Router>
            
            <NavBar/>
           
            <Switch>
            <Route path="/home"  component={Home} ></Route>
            <Route path="/productos"  component={Products} ></Route>
            <Route path="/carrito"  component={carrito}></Route>
            <Route path="/"  component={Home} ></Route>
            </Switch>

        </Router>
    )
}

export default AppRouter