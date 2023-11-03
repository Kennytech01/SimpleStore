import React, {createContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const ItemContext = createContext()

export const ItemProvider = ({children}) => {
  const {id} = useParams()
  const [items, setItems] = useState([])
  // const [singleProduct, setSingleProduct] = useState([])
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

    // useEffect(() => {
    //   const getProduct = async () => {
    //     const response = await fetch(`https://dummyjson.com/products/${id}`)  // fetch the products
    //     const data = await response.json() // convert the response to json
    //     setSingleProduct(data.products) // set the products in the state to the products we fetched
    //   }
    //   getProduct()
    // }, [])
           
  return (
    <ItemContext.Provider value={{items, toggle, popUP, handleClick}}>   
        {children}  
    </ItemContext.Provider>
  )
}
