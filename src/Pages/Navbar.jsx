import React, { useState, useEffect, useContext} from 'react'
import { Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import {FiUser} from 'react-icons/fi'
import {TfiHelpAlt} from 'react-icons/tfi'
import { SidebarContext } from '../contexts/SidebarContext'
import { FaShopify } from 'react-icons/fa'
import { LuSearch} from 'react-icons/lu'

export const Navbar = () => {
   const {isActive, setIsActive } = useContext(CartContext)
   const [dropDown, setDropDown] = useState(false)
   const {handleCart} = useContext(SidebarContext)
   const {itemAmount} = useContext(CartContext)


   const handleDrop = () => {
        setDropDown(!dropDown)
    }

 
    useEffect( () => {
        window.addEventListener('scroll', () => {
            window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
        });
      })

  return (
    <div className={`${isActive ? 'fixed w-full top-0 bg-[#781d75] z-[999] ' : 'bg-stone-100 '} transition-all flex justify-between items-center h-20 md:px-10 px-2  shadow text-stone-800 `}>
        {/* leftSide */}   
        <div className='mx-2 relative hidden lg:flex'>
            <p className={`${isActive? 'text-stone-100 ' : 'bg-gradient-to-r bg-clip-text text-transparent to-[#781d75] from-[#EC094D]'} font-bold text-3xl md:text-4xl text-center`}>SimpleStore</p>
        </div>
        <div className={`h-1/2 w-96  top-0 rounded bg-stone-100 flex items-center relative `}>
            <LuSearch className='bg-stone-white absolute left-3 top-1/3 '/>
            <input type="search" name="search" id="" placeholder=' Search on Simplestore...' className='text-stone-500  w-full h-full px-2 pl-8 rounded outline-none transition-all duration-1000' />
        </div>
        {/* right-Side */}
        <div className={`${isActive? 'text-stone-100' : 'bg-gradient-to-r bg-clip-text text-transparent to-[#781d75] from-[#EC094D]'} md:flex items-center sm:px-5 px-2 font-bold`} >
            <div onClick={handleCart} className= "cursor-pointer relative hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                <span className={` text-white bg-red-500 absolute -top-[0.2rem] shadow-lg text-sm p-2 right-1  rounded-full w-5 h-5 flex items-center justify-center`}>{itemAmount}</span>
                <span className={ ` ${isActive && 'text-stone-100'}  text-[#781d75] flex items-center px-3 py-2 rounded-lg`}>
                    <span >Cart</span>
                    <FaShopify  size={20} className='m-1'/>
                 </span>
            </div>
            <Link to = '/signin' className= "hidden md:flex hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                <span className='flex items-center px-3 py-2 rounded-lg '> <TfiHelpAlt className='text-[#781d75] mt-1 mx-2'/> Help</span>
            </Link>
            <Link to ='/signin'  className='hidden md:flex cursor-pointer hover:underline decoration-[#781d75] decoration-2 underline-offset-4 items-center px-3 py-2 rounded-lg relative transition-all duration-500'>
                <FiUser className='text-[#781d75] mx-2'/> 
                Account
            </Link>
        </div>
    </div>
  )
}
