import React from 'react'
import Home from "../pages/home"
import ArmaPc from "../pages/armaPC"
import About from "../pages/about"
import Products from "../pages/productos"
import carrito from "../pages/carrito"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from '../components/NavBar';

function AppRouter() {
    return ( 
        <Router>
            
            <NavBar/>
            <Switch>
            <Route exact path="/"  component={Home} ></Route>
            <Route path="/about"  component={About}  ></Route>
            <Route path="/productos"  component={Products} ></Route>
            <Route path="/arma"  component={ArmaPc} ></Route>
            <Route path="/carrito"  component={carrito}></Route>
            </Switch>
           
        </Router>
    )
}

export default AppRouter