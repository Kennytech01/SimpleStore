import React,{createContext, useState, useEffect} from 'react'
import { toast } from 'react-toastify'
export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [itemAmount, setItemAmount] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [total, setTotal] = useState(0)
   
    
    // add to cart  
    const addToCart = (product,id) => {
      const newItem = {...product, amount: 1}
      // check if the item already in the cart
      const cartItem = cart.find((item)=>{
        return item.id === id;
       });
       
      if (cartItem) {
        const newCart = [...cart].map((item) => {
          if (item.id === id ){
            return {...item, amount: cartItem.amount + 1}
          } else{
            return item
          }
        });
        setCart(newCart)
       } else {
         setCart([...cart, newItem])
         toast.success('Product has been added to Cart', {position: 'bottom-left'}, {autoClose: 1000})
       }
    };
    
    // remove Item from Cart
    const removeCart = (id) => {
      const newCart = cart.filter((item)=> {
        return item.id !== id
      });
      setCart(newCart)
    }

    // clear Cart
    const clearCart = () => {
      setCart([])
    }

    // increase Amount 
    const increaseAmount = (id) => {
      const cartItem = cart.find((item) => item.id === id);
      addToCart(cartItem, id)
    }
    
    //decreaseAmount
    const decreaseAmount = (id) => {
      const cartItem = cart.find((item) => item.id === id);
      if(cartItem){
        const newCart = cart.map((item)=> {
          if (item.id === id){
            return {...item, amount: cartItem.amount - 1}
          }else {
            return item
          }
        });
        setCart(newCart)
      }
        if (cartItem.amount < 2) {
          removeCart(id)
        }
    }

    // update item
    useEffect(() => {
      if(cart){
        const amount = cart.reduce((accumulator,currentItem) => {
          return accumulator + currentItem.amount
        }, 0)
        setItemAmount(amount)
      }
    }, [cart])
    
    //calculate total
    useEffect(() => {
      const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount
      }, 0);
      setTotal(total);
    });
    
  return (
    <CartContext.Provider value={{addToCart, cart, removeCart, clearCart, increaseAmount, decreaseAmount, itemAmount, isActive, setIsActive, total}}>
        {children}
    </CartContext.Provider>
  )
}
