import React, {useContext, useState} from 'react'
import { CartContext } from '../contexts/CartContext'
import {LiaPlusSolid} from 'react-icons/lia'
import { Link } from 'react-router-dom'

export const Product = ({product}) => {
    const {id, title, discountPercentage, price, stock, thumbnail} = product
    const {addToCart, leftOut} = useContext(CartContext)


    const addCart = () => {
        addToCart(product, id)
    }

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

return (
    <div  className='rounded h-96 flex flex-col justify-between sm:p-4 p-1 bg-white shadow'>
        <Link onClick={scrollToTop} to={`/productdetail/${product,id}`} c className='h-4/5 flex group flex-col justify-center'>
            <span className='flex text-sm justify-end font-bold  bg-gradient-to-tr from-[#781d75] to-[#EC094D] bg-clip-text text-transparent p-1 rounded'>-{discountPercentage}%</span>
            <div className='h-1/2 flex justify-center items-center'>
                <img src={thumbnail} alt="" className='h-full w-ful object-top hover:scale-110 duration-500 transition-all rounded '/>
            </div>
            <p className='font-bold text-[#781d75] line-clamp-3 p-1 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>{title}</p>
            <p className='flex justify-between items-center p-2'>
                <p className='text-stone-100 font-bold bg-[#781d75] p-1 rounded'>${price.toLocaleString()}</p>
                <p className='flex flex-col transition-all text-stone-500 font-semibold'>
                    Quantity: {stock}
                    {/* <span className='text-[#781d75]'>{leftOut} item(s) added</span> */}
                </p>
            </p>
        </Link>
        <div className='h-1/2 flex justify-center items-center'>
            <div 
                onClick={addCart} 
                className='cursor-pointer w-full flex items-center justify-between h-10 m-3 mx-4 shadow bg-stone-200/40 rounded hover:bg-[#781d75] transition-all duration-300'>
                <input type="button" value="Add To Cart" className=' w-full h-full font-bold hover:text-stone-100 text-stone-500' />
                <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
            </div>
        </div>
    </div>
    )
}
