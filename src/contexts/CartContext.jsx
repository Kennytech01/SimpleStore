import React,{createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addCart =()=>{
        alert('added to cart')
    }
  return (
    <CartContext.Provider value={{addCart}}>
        {children}
    </CartContext.Provider>
  )
}
