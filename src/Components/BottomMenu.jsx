import React, {useContext, useEffect} from 'react'
import { LuUser, LuHome} from 'react-icons/lu'
import {HiMiniBars3BottomLeft} from 'react-icons/hi2'
import { Link,} from 'react-router-dom'
import { SidebarContext } from '../contexts/SidebarContext'
import { FcShop } from 'react-icons/fc'
import AOS from 'aos'
import "aos/dist/aos.css"
import {IoArrowUndoOutline} from 'react-icons/io5'


export const BottomMenu = () => {
  const {mobile, clickMobile} = useContext(SidebarContext)

  
  useEffect(() => {
    AOS.init({
      duration: 1000
    })    
  },[])

  return (
    <div>
        <div className='h-16 z-[99] bg-white md:-bottom-28 bottom-0 fixed w-full transition-all duration-500 flex items-center justify-around'>
            {/* mobile */}
            <div className='flex flex-cols md:hidden px-3'>
                <HiMiniBars3BottomLeft size={20} onClick={clickMobile} className='cursor-pointer'/>
                {
                    mobile && (
                        <div>
                            <div onClick={clickMobile} className='bg-black/70 backdrop-blur fixed top-0 left-0 right-0 h-full w-full transition-all z-10'></div>
                            <div data-aos="fade-right" className='sm:w-2/4 w-full  fixed z-10 shadow-lg left-0 md:-left-0 top-0 h-full duration-500 transition-all'>  
                            <div className='relative bg-white h-full'>
                                <div className='h-20 mx-2 flex items-center justify-between border-b relative'>
                                    <p className='p-2 flex items-center'>
                                        <span className='font-bold text-3xl bg-gradient-to-tr bg-clip-text text-transparent from-[#781d75] to-[#EC094D] via-[#fb923c] text-center'>SimpleStore</span>
                                        <FcShop size={40} className='ml-2 text-[#781d75]'/>
                                    </p>
                                    <p onClick={clickMobile} className=' flex items-end justify-end p-2 text-stone-700 '><IoArrowUndoOutline size={30} /></p>
                                </div>
                                <div className='p-5 sm:px-10  px-5 flex flex-col'>
                                    <Link to = '/shop' className= "text-stone-600 py-2 text-lg hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                                        Shops
                                    </Link>
                                    <Link to = '/' className= "text-stone-600 py-2 text-lg hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                                        Offers                                 
                                    </Link>
                                    <Link to = '/' className= "text-stone-600 py-2 text-lg hover:underline decoration-[rgb(120,29,117)] decoration-2 underline-offset-4" >
                                        FAQ
                                    </Link>
                                    <Link to = '/' className= "text-stone-600 py-2 text-lg hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                                        Contact
                                    </Link>
                                    <Link to = '/signup' className= "text-[#781d75]  py-2 text-lg font-bold" >
                                        <span className='bg-[#781d75] text-white p-2 rounded hover:opacity-70 transition-all'>Become a Seller</span>
                                    </Link>
                                    <Link to = '/signin' className= "text-[#781d75] py-2 text-lg font-bold my-1" >
                                    <span className='bg-[#781d75] text-white p-2 rounded hover:opacity-70 transition-all'>Join</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                }
            </div>
            <Link to='/' className='flex items-center flex-col font-bold text-stone-700'>
                <LuHome size={20} className='cursor-pointer'/>
                Home
            </Link>
            <Link to={`/signin`} className='flex items-center flex-col font-bold text-stone-700'>
                <LuUser className='cursor-pointer' />
                Account
            </Link>
       </div>
    </div>
  )
}
