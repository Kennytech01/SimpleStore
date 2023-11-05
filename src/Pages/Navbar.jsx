import React, { useState, useEffect, useContext} from 'react'
import { Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import {FiUser} from 'react-icons/fi'
import {TfiHelpAlt} from 'react-icons/tfi'
import { SidebarContext } from '../contexts/SidebarContext'
import { FaShopify } from 'react-icons/fa'


export const Navbar = () => {
   const {isActive, setIsActive } = useContext(CartContext)
   const [dropDown, setDropDown] = useState(false)
   const {handleClose} = useContext(SidebarContext)
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
    <div className={`${isActive ? 'fixed w-full top-0 bg-[#781d75] z-[999] ' : 'bg-stone-100 '} transition-all flex justify-between items-center h-20 px-10  shadow text-stone-800 `}>
        {/* leftSide */}   
        <div className='mx-2 relative flex'>
            <p className={`${isActive? 'text-stone-100' : 'bg-gradient-to-r bg-clip-text text-transparent to-[#781d75] from-[#EC094D]'} font-bold text-3xl md:text-4xl text-center`}>SimpleStore</p>
        </div>
        <div className={`h-1/2 w-96 hidden lg:flex top-0 `}>
            {
                isActive && (
                    <input type="search" name="search" id="" placeholder='Type your search...' className='text-stone-500 bg-stone-100 w-full h-full px-2 rounded outline-none transition-all duration-1000' />
                )
            }
        </div>
        {/* right-Side */}
        <div className={`${isActive? 'text-stone-100' : 'bg-gradient-to-r bg-clip-text text-transparent to-[#781d75] from-[#EC094D]'} hidden md:flex items-center px-5 font-bold`} >
            <div onClick={handleClose} className= "cursor-pointer relative hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                <span className='bg-red-500 absolute -top-[0.2rem] shadow-lg text-sm p-2 right-1 text-stone-50 rounded-full w-5 h-5 flex items-center justify-center'>{itemAmount}</span>
                <span className='flex items-center px-3 py-2 rounded-lg '>
                    Cart
                    <FaShopify  size={20} className={ ` ${isActive && 'text-stone-100'}  text-[#781d75] mx-2`}/>
                 </span>
            </div>
            <Link to = '/signin' className= "hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                <span className='flex items-center px-3 py-2 rounded-lg '> <TfiHelpAlt className='text-[#781d75] mt-1 mx-2'/> Help</span>
            </Link>
            <Link to ='/signin'  className=' cursor-pointer hover:underline decoration-[#781d75] decoration-2 underline-offset-4 items-center px-3 py-2 rounded-lg relative flex transition-all duration-500'>
                <FiUser className='text-[#781d75] mx-2'/> 
                Account
            </Link>
        </div>
    </div>
  )
}
