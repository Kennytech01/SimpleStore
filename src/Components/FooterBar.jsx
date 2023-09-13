import React, {useContext} from 'react'
import { SidepriceTag } from './SidepriceTag'
import {LuShoppingBag, LuSearch, LuHome, LuUser} from 'react-icons/lu'
import {LiaTimesSolid} from 'react-icons/lia'
import {HiMiniBars3BottomLeft} from 'react-icons/hi2'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { SidebarContext } from '../contexts/SidebarContext'


export const FooterBar = () => {
  const {mobile, clickMobile, handleClose, isOpen} = useContext(SidebarContext)
  

  return (
    <div>
        <div className='h-16 bg-white md:-bottom-28 bottom-0 fixed w-full transition-all duration-500 flex items-center justify-around'>
            {/* mobile */}
            <div className='flex flex-cols md:hidden px-3'>
                <HiMiniBars3BottomLeft size={20} onClick={clickMobile}/>
                {
                    mobile && (
                        <div  className='w-4/5 fixed  shadow-lg left-0 md:-left-0 top-0 h-full z-[999] duration-500 transition-all'>
                            <div  className='bg-black/30 fixed top-0 left-0 right-0 h-full w-full duration-500 transition-all'></div>
                            <div className='relative bg-white h-full'>
                                <p onClick={clickMobile} className=' flex items-end justify-end p-2 '><LiaTimesSolid size={30} /></p>
                                <div className='h-10 mx-2 items-center border-b'>
                                    <p className='font-bold text-3xl bg-gradient-to-tr bg-clip-text text-transparent from-[#781d75] to-[#EC094D] text-center'>SimpleStore</p>
                                </div>
                                <ul className='p-5 px-10 '>
                                    <NavLink to = '/' element={<Home/>} className= "hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                                        <li className='flex items-center px-3 py-2 rounded-lg'>Shops</li>
                                    </NavLink>
                                    <NavLink to = '/' element={<Home/>} className= "hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                                        <li className='flex items-center px-3 py-2 rounded-lg'>Offers</li>
                                    </NavLink>
                                    <NavLink to = '/' element={<Home/>} className= "hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                                        <li className='flex items-center px-3 py-2 rounded-lg'>FAQ</li>
                                    </NavLink>
                                    <NavLink to = '/' element={<Home/>} className= "hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                                        <li className='flex items-center px-3 py-2 rounded-lg'>Contact</li>
                                    </NavLink>
                                    <NavLink to = '/' element={<Home/>} className= "text-[#781d75]  rounded-lg" >
                                        <li className='flex items-center px-3 py-2 rounded-lg font-bold'>Become a Seller</li>
                                    </NavLink>
                                    <NavLink to = '/' element={<Home/>} className= "text-[#781d75] rounded-lg" >
                                        <li className='flex items-center px-3 py-2 rounded-lg font-bold'>Join</li>
                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <LuSearch size={20}/>
            </div>
            <div>
                <LuHome size={20}/>
            </div>
            <div>
                <LuShoppingBag onClick={handleClose} size={20}/>

            </div>
            <div>
                <LuUser/>
            </div>
       </div>
       <SidepriceTag/>
    </div>
  )
}
