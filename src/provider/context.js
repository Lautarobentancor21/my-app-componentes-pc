import React , {useContext, useState,createContext} from 'react'
const CartContext = createContext()


export function UseCart(){
    return useContext(CartContext)
}

export function CartProvider({children}){
    const [cart , setCart ] = useState([])

    function AddToCart(obj){
        setCart([...cart, obj])
        console.log(cart)
    }

    function DeleteItem(obj ){
        let removeItem = cart.filter(function(objeto){
            console.log(objeto)
            return objeto.obj.name !== obj.obj.name
        })

        setCart(removeItem)
       
        } 

    return (
            <CartContext.Provider value={{cart, AddToCart,DeleteItem}}>
                {children}
            </CartContext.Provider> 
    )


}