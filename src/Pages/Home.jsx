import React, { useContext} from 'react'
import { ItemContext } from '../contexts/ItemContext'
import Shopping from '../assets/images/Shopping.jpg'
import { CartContext } from '../contexts/CartContext'
import {LiaPlusSolid, LiaStar} from 'react-icons/lia'
import {FaTimes} from 'react-icons/fa'

 export const Home = () => {
    const {items, toggle, popUP, handleClick, addToCart} = useContext(ItemContext)
    // const {addToCart} = useContext(CartContext)
//    console.log(popUP)

  return (
    <div className=''> 
        <div className='h-[90vh] group'>
            {/* <div className='bg-black/30 z-10 h-full absolute top-0 left-0 right-0 hidden group-hover:flex duration-500'></div> */}
            <img src={Shopping} alt="" className='h-full w-full object-cover'/>
            <div className='absolute -z-10 top-2 -left-[35rem] items-start justify-start h-1/2 group-hover:left-10 duration-500 transition-all '>
                <div className='bg-stone-2 rounded h-full flex flex-col justify-center'>
                    <p className='font-bold text-[#752d42] text-sm'>-TREND</p>
                    <h1 className='text-4xl  font-bold p-3 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D] underline'>SimpleStore sale stylish womens</h1>
                    <span className='flex items-center hover:underline decoration-[#781d75] decoration-4 underline-offset-4 duration-500 transition-all py-4 font-bold text-stone-600 text-xl'>
                        Discover More 
                    </span>
                </div>
            </div>
            <div></div>
        </div>
        <div className='text-center pt-10'>
            <p className='capitalize sm:text-4xl text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D] '>pick what you want!</p>
        </div>
        {/* items */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:m-10 m-5'>
            {
                items.map((product) => {
                    return (
                        <div className='rounded h-96 flex flex-col justify-between sm:p-4 p-1 bg-white shadow '>
                            <div  key={product.id} onClick={()=>handleClick(product)}  className='h-4/5 flex flex-col justify-center group cursor-pointer'>
                                <span className='flex text-sm justify-end font-bold  bg-gradient-to-tr from-[#781d75] to-[#EC094D] bg-clip-text text-transparent p-1 rounded'>-{product.discountPercentage}%</span>
                                <div className='h-1/2 flex justify-center items-center'>
                                    <img src={product?.images[0]} alt="" className='h-full w-ful object-top hover:scale-110 duration-500 transition-all rounded shadow-l'/>
                                </div>
                                <p className='font-bold text-[#781d75] line-clamp-3 p-1 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>{product.title}</p>
                                <p className='flex justify-between items-center p-2'>
                                    <p className='text-stone-100 font-bold bg-[#781d75] p-1 rounded'>${product.price}</p>
                                    <p className='capitalize text-stone-500 font-semibold group-hover:underline underline-offset-2'>{product.brand}</p>
                                </p>
                                {/* <p>{product?.id}</p>
                                <p>{product?.rating}</p> */}
                            </div>
                            <div className='h-1/2 flex justify-center items-center'>
                                <div onClick={()=>handleClick(product)} className='w-full flex items-center justify-between h-10 my-3 bg-stone-200/40 rounded hover:bg-[#781d75] transition-all duration-500'>
                                    <input type="button" value="Add" className=' w-full h-full font-bold hover:text-stone-100 text-stone-500' />
                                    <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {/* modal */}
        <div className=''>
            {toggle && (
                popUP.map((pop)=>{
                    return (
                        <div className='relative flex items-center justify-center h-screen w-full group'>
                            <div onClick={()=>handleClick(pop)}  className='fixed right-0 left-0 top-0 w-full h-screen bg-black/70 z-10'></div>
                            <div className='bg-white shadow-lg fixed z-[999] top-0 bottom-0 sm:m-24 m-10 my-28 rounded cursor-pointer '>
                                <button onClick={()=>handleClick(pop)} className='absolute right-4 top-4 text-xl font-bold '><FaTimes/></button>
                                <span className='absolute top-0 md:top-4 left-0 md:left-4 flex text-sm justify-end font-bold  bg-gradient-to-tr from-[#781d75] to-[#EC094D] bg-clip-text text-transparent p-1 rounded group-hover:underline'>{pop?.discountPercentage.toFixed(2)}%</span>
                                <div className='p-2 md:p-5 h-full flex md:flex-row flex-col justify-center items-center' >
                                    <div className='justify-center bg-white w-1/2 md:h-2/3 flex items-center relative'>
                                        <img src={pop?.images[0]} alt="" className=' object-center object-contain h-full w-full p-3' />
                                    </div>
                                    <div className='md:w-2/3 md:flex items-center p-2 '>
                                        <div className='relative'>
                                            <p className='flex justify-between items-center w-full p-2 top-4'>
                                                <p className='md:text-2xl text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>{pop.title}</p>
                                                <p className='text-stone-100 font-bold bg-[#781d75] p-1 px-2 rounded items-center flex text-sm'>{pop?.rating}<LiaStar/></p>
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

 