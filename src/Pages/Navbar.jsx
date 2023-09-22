import React, { useState, useEffect, useContext} from 'react'
import { NavLink} from 'react-router-dom'
import { Home } from './Home'
import { SignIn } from '../Components/SignIn'
import { AdminDashboard } from '../Components/AdminDashboard'
import { CartContext } from '../contexts/CartContext'

export const Navbar = () => {
   const {isActive, setIsActive} = useContext(CartContext)
    
    useEffect( () => {
        window.addEventListener('scroll', () => {
            window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
        });
    })
   
 
  return (
    <div className={`z-40 fixed top-0 w-full transition-all shadow`}>
        <div className={`${isActive? 'bg-[#e2d9e1]' : null} flex justify-between items-center h-20 transition-all`}>
            {/* leftSide */}    
            <div className='mx-2 relative flex'>
                <p className={`${isActive? 'bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]' : 'bg-gradient-to-r bg-clip-text text-transparent to-[#781d75] from-[#EC094D]'} font-bold text-3xl  text-center`}>SimpleStore</p>
            </div>
            <div className={`h-1/2 w-96 hidden lg:flex top-0`}>
                <input type="search" name="search" id="" placeholder='Type your search...' className='text-stone-500 w-full h-full px-2 rounded outline-none' />
            </div>
            {/* right-Side */}
            <div>
                <ul className={`${isActive? 'bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]' : null} hidden md:flex items-center px-5`} >
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
                    <NavLink to = '/admindashboard' element={<AdminDashboard/>} className= "bg-[#781d75] text-stone-50 rounded-lg" >
                        <li className='flex items-center px-3 py-2 rounded-lg font-bold'>Become a Seller</li>
                    </NavLink>
                    <NavLink to = '/signin' element={<SignIn/>} className= "bg-[#781d75] text-stone-50 rounded-lg ml-3" >
                        <li className='flex items-center px-3 py-2 rounded-lg font-bold'>Join</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}
