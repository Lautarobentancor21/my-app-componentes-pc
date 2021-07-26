import React , {useContext, useState,createContext} from 'react'
import {getFirestore} from '../firebase/FireBase'
const CartContext = createContext()


export function UseCart(){
    return useContext(CartContext)
}

export function CartProvider({children}){
 
    const [cart , setCart ] = useState([])

    function AddToCart(obj){
        setCart([...cart, obj])
    }


    function Delete(){

        let removeItem = cart.filter(function(objeto){ 
            return objeto !== objeto ; 
        });
        
           setCart(removeItem)
       
        } 
    

    function DeleteItem(item){

        let removeItem = cart.filter(function(objeto){ 
            return objeto.id !== item ; 
        });
        
           setCart(removeItem)
       
        } 

        

    return (
            <CartContext.Provider value={{cart, AddToCart,DeleteItem , Delete}}>
                {children}
            </CartContext.Provider> 
    )


}