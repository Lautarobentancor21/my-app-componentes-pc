import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppRouter from "./routers/AppRouter"
import React from 'react'
import {CartProvider} from "./provider/context"





function App() {
    return (
        <div className = "container1" >
            <CartProvider>
             <AppRouter/>  
             </CartProvider>  
        </div>  
    )
}

export default App;