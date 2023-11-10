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

    const {title, thumbnail, description, price, discountPercentage,stock, brand, category} = product  

  return (
    <div className='m-aut transition-all'>
        <Link to={`/`}>
            <button className=' capitalize flex items-center text-white bg-[#781d75] rounded-full p-2 mx-3 my-10  hover:opacity-90 transition-all'>
                continue shopping 
                <IoArrowUndoOutline className='m-1'/>
            </button>
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
                    <span className=' text-stone-500'>Quantity: {stock}</span>
                </p>
                <p onClick={()=> addToCart(product, product.id)} className='flex justify-center items-center p-3 bg-[#781d75] rounded shadow-lg hover:opacity-80 transition-all w-full'>
                    <button className='uppercase button p-2 text-white font-bold '>
                        add to cart
                    </button>
                </p>
                <p className='flex justify-between items-center p-2 w-full'>
                    <span className='font-bold text-[#781d75] hover:underline'>
                        <span className='text-stone-500'>Brand: </span>
                        {brand}
                    </span>
                    <span className='font-bold text-[#781d75] capitalize hover:underline'>
                        <span className='text-stone-500'>category: </span> 
                        {category}
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}
