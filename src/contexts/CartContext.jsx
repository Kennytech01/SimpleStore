import React,{createContext, useContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    // const [cart, setCart] = useState([])
  
    // const addToCart =(product)=>{
    //   setCart([product])
    //     alert(`item added to cart`)
    // }
  return (
    <CartContext.Provider value={{}}>
        {children}
    </CartContext.Provider>
  )
}
