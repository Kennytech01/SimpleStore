import React, { useContext, useState, useEffect} from 'react'
import { ItemContext } from '../contexts/ItemContext'
import Shopping from '../assets/images/Shopping.png'
import { Product } from '../Components/Product'
import {BsEmojiSunglasses} from 'react-icons/bs'
import { SidepriceTag } from '../Components/SidepriceTag'
import { FaShopify } from 'react-icons/fa'
import { Category } from '../Components/Category'
import { MdSearchOff } from "react-icons/md";


 export const Home = () => {
    const {items, searchItem} = useContext(ItemContext)
    const [isActive, setIsActive] = useState(false)

    useEffect( () => {
        window.addEventListener('scroll', () => {
            window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
        });
    })

    const SearchResult = items.filter((product) => {
        if(searchItem == "" || product.title.toLowerCase().includes(searchItem.toLowerCase())){
            return product
        }
    })


  return (
    <div className='min-h-screen'>
        <div id='hero' className='group relative  max-h-screen sm:bg-violet-300/20 bg-violet-700/10 flex items-center  justify-around translation '>
            <div className='min-h-full flex md:justify-start justify-end items-center relative p-5 '>
                <img src={Shopping} alt="" className=' object-cover object-center lg:rounded-full lg:w-[32rem] w-[22rem] lg:h-[32rem] h-[22rem] border-green lg:border-b -scale-x-100 '/>
            </div>
            <div className="items-center justify-center h-80 sm:relative absolute left-0 right-0 mx-5 duration-500 transition-all">
                <div className='rounded flex flex-col justify-center p-2 relative sm:bg-black/0 h-full '>
                    <p className=' text-4xl flex flex-wrap items-center'>
                        <span id='welcome' className='font-bold text-green-focus flex items-center drop-shadow'>Welcome <span className='text-green pl-2'>there!</span></span> 
                        <BsEmojiSunglasses className='text-green-focus ml-1'/>
                    </p>
                    <h2 className='p-2 py-5 text-xl md:font-light text-green-focus'>Get your order delivered at your doorsteps all day everyday</h2>
                    <button className='py-4 font-bold text-stone-100 text-xl flex '>
                        <a href='#products' className='border-green-focus border hover:text-white hover:bg-green-focus rounded p-2 cursor-pointer transition-all flex items-center'>
                            Shop now
                            <FaShopify className='mx-1' size={30}/>
                        </a>
                    </button>
                </div>
            </div>
        </div>
        <div className='text-center flex justify-center items-center h-20'>
            <p className='flex capitalize items-center sm:text-3xl text-xl bg-gradient-to-r bg-clip-text text-transparent from-green-focus'>
                Shop Big Save
                <span className='font-bold text-3xl pl-2'>BIGGER!...</span>
                <FaShopify size={40} className=' text-green animate-bounce'/>
            </p>
        </div>
        {
            (SearchResult.length) ?
                <div className='flex relative mx-10 gap-4'>
                    <Category/>
                    <div>
                        <div id='products' className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full'>
                        {
                            SearchResult.map((product) => {
                                return (
                                    <Product key={product.id} product={product}/>
                                )
                            })
                        }
                        </div>
                        <SidepriceTag/>
                    </div>
                </div>
                :
                <div className='text-center py-10  text-stone-600 font-bold text-2xl  flex justify-center items-center '>
                    <span className='flex items-center'>
                        <MdSearchOff size={40} className='mx-1 text-[#781d75] '/>
                        No match Found!
                    </span>
                </div>
        }
    </div>
  )
}

 