import React, { useContext, useState } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import Shopping from '../assets/images/Shopping.jpg'
import {LiaPlusSolid} from 'react-icons/lia'
 export const Home = () => {
    const {items} = useContext(ItemContext)
    console.log(items)

  return (

    <div> 
        <div className='h-[90vh] relative group'>
            {/* <div className='bg-black/30 z-10 h-full absolute top-0 left-0 right-0 hidden group-hover:flex duration-500'></div> */}
            <img src={Shopping} alt="" className='h-full w-full  object-cover'/>
            <div className='absolute z-20 top-2 -left-[35rem] items-start justify-start h-1/2 group-hover:left-10 duration-500 transition-all '>
                <div className='bg-stone-2 rounded h-full flex flex-col justify-center'>
                    <p className='font-bold text-[#752d42] text-sm'>-TREND</p>
                    <h1 className='text-4xl  font-bold p-3 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D] underline'>SimpleStore sale stylish womens</h1>
                    <span className='flex items-center hover:underline decoration-[#781d75] decoration-4 underline-offset-4 duration-500 transition-all py-4 font-bold text-stone-600 text-xl'>
                        Discover More 
                        {/* <LiaExternalLinkAltSolid className='ml-1'/> */}
                    </span>
                </div>
            </div>
        </div>
        <div className='text-center pt-10'>
            <p className='capitalize text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D] '>pick what you want!</p>
        </div>   
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
            {
                items.map((product) => {
                    return (
                    <div key={product.id} className='rounded h-96 flex flex-col justify-between p-4 bg-white shadow '>
                        <div className='h-1/2 flex justify-center items-center hover:scale-110 duration-500 transition-all'>
                            <img src={product?.image} alt="" className='h-full w-ful object-top'/>
                        </div>
                        <div>
                            <p className='flex justify-between p-2'>
                                <p className='text-stone-100 font-bold bg-[#781d75] p-1 rounded'>${product?.price}</p>
                                <p className='capitalize text-stone-500 font-semibold'>{product?.category}</p>
                            </p>
                            <p className='font-bold text-[#781d75] '>{product?.title}</p>
                            <p className='w-full flex items-center justify-between h-10 my-3 bg-stone-200/40 rounded hover:bg-[#781d75] transition-all duration-500'>
                                <input type="button" value="Add" className=' w-full h-full font-bold hover:text-stone-100 text-stone-500' />
                                <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
                            </p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

 