import React, {useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import {IoArrowUndoOutline} from 'react-icons/io5'
import { CartContext } from '../contexts/CartContext'
import { ItemContext } from '../contexts/ItemContext'

export const ProductDetail = () => {
    const {id} = useParams()
    const {addToCart} = useContext(CartContext)
    const {items} = useContext(ItemContext)

    const product = items.find((item)=> item.id === parseInt(id))
    // console.log(product)

    if(!product){
        return (
            <section className='font-bold text-xl text-center'>
                loading...
            </section>
        )
    }

    const {title, thumbnail, description, price, discountPercentage, brand, category} = product  

  return (
    <div className='m-auto flex flex-col h-screen justify-center items-center transition-all'>
        <Link to={`/`} className='bg-white rounded-full md:p-5 p-3 m-3 mt-40 md:mt-2 flex self-start border items-center hover:opacity-60 transition-all'>
            <span className='font-light text-xl px-1 capitalize'>continue shopping</span>
            <IoArrowUndoOutline size={30} />
        </Link>
        <div className='grid md:grid-cols-2 grid-cols-1 border rounded md:mx-20 mx-5 py-5 shadow'>
            <div className='flex items-center justify-center h-96 m-2'>
                <img src={thumbnail} alt="" className='p-2 w-full h-full object-contain rounded-lg ' />
            </div>
            <div className=' px-3 sm:mx-10 mx-0 h-96 flex flex-col justify-center items-center '>
                <p className='font-bold  md:text-4xl text-xl py-5 px-3 self-start flex text-stone-700'>{title}</p>
                <p className='text-stone-500 px-3'>{description}</p>
                <p className='flex justify-between items-center p-5 w-full'>
                    <span className='font-bold text-3xl text-[#781d75]'>${price}</span>
                    <span className='font-bold text-stone-500'>{discountPercentage}%</span>
                </p>
                <p onClick={()=> addToCart(product, product.id)} className='flex justify-center items-center p-3 bg-[#781d75] rounded shadow-lg hover:opacity-80 transition-all w-full'>
                    <button className='uppercase button p-2 text-white font-bold '>
                        add to cart
                    </button>
                </p>
                <p className='flex justify-between items-center p-2 w-full'>
                    <span className='font-bold text-stone-500 hover:underline'>{brand}</span>
                    <span className='font-bold text-[#781d75] capitalize hover:underline'>{category}</span>
                </p>
            </div>
        </div>
    </div>
  )
}
