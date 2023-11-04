import React, {createContext, useState, useEffect} from 'react'

export const ItemContext = createContext()

export const ItemProvider = ({children}) => {
  const [items, setItems] = useState([])
  const [toggle, setToggle] = useState(false)
  const [popUP, setPopUp] = useState([])
  


  useEffect(()=>{
    const body = document.querySelector('body');
    body.style.overflow = toggle? 'hidden' : 'auto';
  }, [toggle])

    const handleClick = () => {
      setToggle(!toggle)
      setPopUp([product])
    }

    useEffect(() => {
      const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products')  // fetch the products
        const data = await response.json() // convert the response to json
        setItems(data.products) // set the products in the state to the products we fetched
      }
      getProducts()
    }, [])
           
  return (
    <ItemContext.Provider value={{items, toggle, popUP, handleClick}}>   
        {children}  
    </ItemContext.Provider>
  )
}
