import React, {useContext, useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import {IoArrowUndoOutline} from 'react-icons/io5'
import { CartContext } from '../contexts/CartContext'
import { ItemContext } from '../contexts/ItemContext'

export const ProductDetail = () => {
    const {id} = useParams()
    const [singleProduct, setSingleProduct] = useState([])
    const {addToCart} = useContext(CartContext)
    const {items} = useContext(ItemContext)

    
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`)  // fetch the products
                const data = await response.json()
                setSingleProduct(data)
                console.log(singleProduct)
            } catch (error) {
                console.log(error.message)
            }
        }
        getProduct()
      }, [])

  return (
    <div className='m-auto flex flex-col h-screen justify-center items-center'>
        <Link to={`/`} className='bg-white rounded-full p-5 m-3 flex self-start border items-center hover:opacity-60 transition-all'>
            <span className='font-light text-xl px-1 capitalize'>continue shopping</span>
            <IoArrowUndoOutline size={30} />
        </Link>
        <div className='grid md:grid-cols-2 grid-cols-1 border mx-auto py-5'>
            <div className='flex items-center justify-center h-96 m-2'>
                <img src={singleProduct?.thumbnail} alt="" className='p-2 w-full h-full object-contain rounded-lg ' />
            </div>
            <div className=' px-3 mx-10 h-96 flex flex-col justify-center items-center '>
                <p className='font-bold  text-4xl py-5 px-3 self-start flex text-stone-700'>{singleProduct?.title}</p>
                <p className='text-stone-500'>{singleProduct?.description}</p>
                <p className='flex justify-between items-center p-5 w-full'>
                    <span className='font-bold text-3xl text-[#781d75]'>${singleProduct?.price}</span>
                    <span className='font-bold text-stone-500'>{singleProduct.discountPercentage}%</span>
                </p>
                <p onClick={()=> addToCart({...singleProduct, id})} className='flex justify-center items-center p-3 bg-[#781d75] rounded shadow-lg hover:opacity-80 transition-all w-full'>
                    <button className='uppercase button p-2 text-white font-bold'>
                        add to cart
                    </button>
                </p>
                <p className='flex justify-between items-center p-2 w-full'>
                    <span className='font-bold text-stone-500 hover:underline'>{singleProduct.brand}</span>
                    <span className='font-bold text-[#781d75] capitalize hover:underline'>{singleProduct?.category}</span>
                </p>
            </div>
        </div>
    </div>
  )
}
