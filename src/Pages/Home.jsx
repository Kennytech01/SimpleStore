import React, { useContext} from 'react'
import { ItemContext } from '../contexts/ItemContext'
import Shopping from '../assets/images/Shopping.png'
import { Product } from '../Components/Product'
import {BsEmojiSunglasses} from 'react-icons/bs'
import { SidepriceTag } from '../Components/SidepriceTag'
import { FaShopify } from 'react-icons/fa'
import {BsCartPlus} from 'react-icons/bs'

 export const Home = () => {
    const {items} = useContext(ItemContext)
    
  return (
    <div className=''>
        <div className=' group relative  max-h-[100vh] '>
            <div className='min-h-full flex md:justify-start justify-end items-center relative p-5 blur-[1px md:blur-non'>
                <img src={Shopping} alt="" className=' object-cover object-center md:rounded-full p-1 lg:w-[32rem] w-[22rem] lg:h-[32rem] h-[22rem] border-[#781d75]/30 md:border-2 md:-scale-x-100 scale-x-100 '/>
            </div>
            <div className="items-center justify-center h-full ">
                <div className='bg-stone-2 rounded flex flex-col justify-center h-full mx-4 absolute top-0 lg:left-1/2 md:left-1/4 sm:left-10 left-2 duration-500 transition-all z-10'>
                    <p className=' text-[#752d42] text-4xl flex items-center'>
                        <span id='welcome'>-welcome there!</span> 
                        <BsEmojiSunglasses className='text-stone-700 ml-1'/>
                    </p>
                    <h2 className='p-2 py-5 font-light bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D] text-normal md:text-xl'>Get your order delivered at your doorsteps all day everyday</h2>
                    <button className='py-4 font-bold text-stone-100 text-xl flex'>
                        <a href='#products' className='bg-[#781d75] rounded p-2 hover:opacity-80 cursor-pointer transition-all flex items-center'>
                            Shop now
                            <FaShopify className='mx-1' size={30}/>
                        </a>
                    </button>
                </div>
            </div>
        </div>
        <div className='text-center flex justify-center items-center h-20'>
            <p className='flex capitalize items-center sm:text-3xl text-xl bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D] '>
                Shop Big Save BIGGER!...
                <FaShopify size={40} className='ml-2 text-[#781d75]'/>
            </p>
        </div>
        {/* items */}
        <div id='products' className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-10 m-5 h-full'>
            {
                items.map((product) => {
                    return (
                        <Product key={product.id} product={product}/>
                    )
                })
            }
        </div>
        <SidepriceTag/>
    </div>
  )
}

 