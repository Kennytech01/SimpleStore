import React, {createContext, useState, useEffect} from 'react'

export const ItemContext = createContext()

export const ItemProvider = ({children}) => {
    const [items, setItems] = useState([])
    const [popUP, setPopUp] = useState([])
    const [toggle, setToggle] = useState(false)

   
  // useEffect(()=>{
  //     const BODY = document.querySelector('body');
  //     BODY.style.overflow = setToggle? 'hidden' : 'auto';
  // }, [setToggle])

  const handleClick = (product) => {
    setPopUp([product])
    setToggle(!toggle)
    // console.log(popUP)
}
   
    useEffect(() => {
      try {
        const fetchItems = async ()=> {
          // https://dummyjson.com/products'
          // https://fakestoreapi.com/products
          // https://jsonplaceholder.typicode.com/posts
          // https://api.escuelajs.co/api/v1/products
          // https://fakeecommerceapi.onrender.com/api/v1/products
          const reponse = await fetch("https://fakestoreapi.com/products");
          const data = await reponse.json();
          setItems(data)
          // console.log(data)
        }
        fetchItems();
      } catch (error) {
        console.log(error)
      }
    }, [])

    
  return (
    <ItemContext.Provider value={{items, popUP, toggle, handleClick}}>   
        {children}  
    </ItemContext.Provider>
  )
}
