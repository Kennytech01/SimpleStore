import React, {createContext, useState, useEffect} from 'react'

export const ItemContext = createContext()

export const ItemProvider = ({children}) => {
    const [items, setItems] = useState([])
    const [toggle, setToggle] = useState(false)
    const [popUP, setPopUp] = useState([])
   
  // useEffect(()=>{
  //     const BODY = document.querySelector('body');
  //     BODY.style.overflow = setToggle? 'hidden' : 'auto';
  // }, [setToggle])

      const handleClick = (product) => {
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
    
    // console.log(items)
   
    // useEffect(() => {
    //   try {
    //     const fetchItems = async ()=> {
    //       const reponse = await fetch("https://dummyjson.com/products");
    //       const data = await reponse.json();
    //       setItems(data.products)
          
    //     }
    //     fetchItems();
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }, [])
    // console.log(items)
    
        
  return (
    <ItemContext.Provider value={{items, toggle, popUP, handleClick}}>   
        {children}  
    </ItemContext.Provider>
  )
}
