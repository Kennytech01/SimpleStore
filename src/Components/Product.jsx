import React, {useContext} from 'react'
import { CartContext } from '../contexts/CartContext'
import { ItemContext } from '../contexts/ItemContext'
import {FaTimes} from 'react-icons/fa'
import {LiaPlusSolid, LiaStar} from 'react-icons/lia'

export const Product = ({product}) => {
    const {id, title, discountPercentage, images, price, brand, rating} = product
    const {addToCart} = useContext(CartContext)
    const {toggle, popUP, handleClick} = useContext(ItemContext)
    // console.log()
  return (
    <div>
        <div className='rounded h-96 flex flex-col justify-between sm:p-4 p-1 bg-white shadow'>
            <div  key={id} className='h-4/5 flex flex-col justify-center group cursor-pointer'>
                <span className='flex text-sm justify-end font-bold  bg-gradient-to-tr from-[#781d75] to-[#EC094D] bg-clip-text text-transparent p-1 rounded'>-{discountPercentage}%</span>
                <div className='h-1/2 flex justify-center items-center'>
                    <img src={images[0]} alt="" className='h-full w-ful object-top hover:scale-110 duration-500 transition-all rounded shadow-l'/>
                </div>
                <p className='font-bold text-[#781d75] line-clamp-3 p-1 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>{title}</p>
                <p className='flex justify-between items-center p-2'>
                    <p className='text-stone-100 font-bold bg-[#781d75] p-1 rounded'>${price.toLocaleString()}</p>
                    <p className='capitalize text-stone-500 font-semibold group-hover:underline underline-offset-2'>{brand}</p>
                </p>
            </div>
            <div className='h-1/2 flex justify-center items-center'>
                <div onClick={()=>addToCart(product,id)} className='w-full flex items-center justify-between h-10 m-3 mx-4 shadow bg-stone-200/40 rounded hover:bg-[#781d75] transition-all duration-300'>
                    <input type="button" value="Add" className=' w-full h-full font-bold hover:text-stone-100 text-stone-500' />
                    <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
                </div>
            </div>
        </div>
        {/* modal */}
        <div className=''>
            {toggle && (
                popUP.map((product)=>{
                    return (
                        <div className='relative flex items-center justify-center h-screen w-full group'>
                            <div onClick={()=>handleClick(pop)}  className='fixed right-0 left-0 top-0 w-full h-screen bg-black/20 z-[999]'></div>
                            <div className='bg-white shadow-lg fixed z-[999] top-0 bottom- rounded cursor-pointer overflow-auto'>
                                <button onClick={()=>handleClick(pop)} className='absolute right-0 p-3 text-xl font-bold '><FaTimes/></button>
                                <span className='absolute top-0 md:top-4 left-0 md:left-4 flex text-sm justify-end font-bold  bg-gradient-to-tr from-[#781d75] to-[#EC094D] bg-clip-text text-transparent p-1 rounded group-hover:underline'>{pop?.discountPercentage.toFixed(2)}%</span>
                                <div className='p-2 md:p-5 mt-10  h-full flex md:flex-row flex-col justify-center items-center' >
                                    <div className='justify-center w-1/2 md:h-2/3 h-full p-4 flex items-center relative'>
                                        <img src={images[0]} alt="" className=' object-center object-contain h-full w-full p-3' />
                                    </div>
                                    <div className='md:w-2/3 md:flex items-center p-2 '>
                                        <div className='relative'>
                                            <p className='flex justify-between items-center w-full p-2 top-4'>
                                                <p className='md:text-2xl text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>{title}</p>
                                                <p className='text-stone-100 font-bold bg-[#781d75] p-1 px-2 rounded items-center flex text-sm'>{rating}<LiaStar/></p>
                                            </p>
                                            <p className='py-4 text-base'>{pop?.description}</p>
                                            <p className='flex justify-between p-2'>
                                                <p className='text-stone-100 font-bold bg-[#781d75] p-1 rounded'>${pop?.price.toLocaleString()}</p>
                                                <p className='capitalize text-stone-500 font-semibold text-sm group-hover:underline'>{pop?.brand}</p>
                                            </p>
                                            <p className='w-full flex items-center justify-between h-10 my-3 bg-stone-200/40 rounded hover:bg-[#781d75] transition-all duration-500'>
                                                <input type="button" value="Add to Shopping Cart" className=' w-full h-full font-bold hover:text-stone-100 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'/>
                                                <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
                                            </p>
                                            <div className='text-stone-500 text-sm py-2 font-bold'>
                                                <p className='bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>Category: <span className='text-stone-500 font-normal capitalize'>{pop?.category}</span></p> 
                                                <p className='bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>Stock: <span className='text-stone-500 font-normal'>{pop?.stock} pieces avaliable</span></p>  
                                            </div> 
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    </div>
  )
}
