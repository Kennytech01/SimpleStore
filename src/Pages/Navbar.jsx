import React, { useState, useEffect, useContext} from 'react'
import { NavLink} from 'react-router-dom'
import { Home } from './Home'
import { CartContext } from '../contexts/CartContext'
import {FiUser} from 'react-icons/fi'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {TfiHelpAlt} from 'react-icons/tfi'
import { SidebarContext } from '../contexts/SidebarContext'
import {LuShoppingBag} from 'react-icons/lu'

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
    <div className={`${isActive ? 'sticky top-0' : 'mx-10 m'} z-40 transition-all duration-500 shadow border`}>
        <div className={`${isActive? 'bg-[#e2d9e1]' : null} flex justify-between items-center h-20 transition-all`}>
            {/* leftSide */}    
            <div className='mx-2 relative flex'>
                <p className={`${isActive? 'bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]' : 'bg-gradient-to-r bg-clip-text text-transparent to-[#781d75] from-[#EC094D]'} font-bold text-3xl  text-center`}>SimpleStore</p>
            </div>
            <div className={`h-1/2 w-96 hidden lg:flex top-0 `}>
                {
                    isActive && (
                        <input type="search" name="search" id="" placeholder='Type your search...' className='text-stone-500 bg-stone-100 w-full h-full px-2 rounded outline-none transition-all duration-1000' />
                    )
                }
            </div>
            {/* right-Side */}
            <div>
                <ul className={`${isActive? 'bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]' : 'bg-gradient-to-r bg-clip-text text-transparent to-[#781d75] from-[#EC094D]'} hidden md:flex items-center px-5 font-bold`} >
                    <div className= "cursor-pointer relative hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                        <li onClick={handleDrop} className=' items-center px-3 py-2 rounded-lg flex transition-all duration-500'>
                            <FiUser className='text-[#781d75] mx-2'/> 
                            Account
                            <div className='transition-all duration-500 flex'>
                                {
                                    dropDown ? <IoIosArrowUp className='text-[#781d75] mx-2'/>
                                    :
                                    <IoIosArrowDown className='text-[#781d75] mx-2'/>
                                } 
                            </div>
                        </li>
                        <div className={`${dropDown? 'flex transition-all duration-500' : 'hidden '} bg-white  absolute text-[#781d75] top-10 w-40 -left-4 h-32 z-10 rounded shadow  item-center flex-col justify-center`}>
                            <NavLink className='flex m-2 hover:scale-105 duration-300 transition-all cursor-pointer'>
                                    <span className='bg-[#781d75] text-stone-200 p-2 rounded-lg w-full text-center'>Sign IN</span>
                            </NavLink>
                            <NavLink className='flex m-2 hover:scale-105 duration-300 transition-all cursor-pointer'>
                                    <span className='bg-[#781d75] text-stone-200 p-2 rounded-lg w-full text-center'>Sign UP</span>
                            </NavLink>
                        </div>
                    </div>
                    <NavLink to = '/' element={<Home/>} className= "hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                        <li className='flex items-center px-3 py-2 rounded-lg '> <TfiHelpAlt className='text-[#781d75] mt-1 mx-2'/> Help</li>
                    </NavLink>
                    <div onClick={handleClose} className= " relative hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                        <span className='bg-red-500 absolute -top-[0.2rem] shadow-lg text-sm p-2 -right-1 text-stone-50 rounded-full w-5 h-5 flex items-center justify-center'>{itemAmount}</span>
                        <li className='flex items-center px-3 py-2 rounded-lg '> <LuShoppingBag  size={20} className='cursor-pointer text-[#781d75] mx-2'/> Cart</li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}
