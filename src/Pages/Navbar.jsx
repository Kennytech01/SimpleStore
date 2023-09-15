import React, { useState, useEffect} from 'react'
import { NavLink} from 'react-router-dom'
import { Home } from './Home'
import { SignIn } from '../Components/SignIn'
import { AdminDashboard } from '../Components/AdminDashboard'

export const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)
        
    const handleScroll = () => {
        const currentScrollPos = window.scrollY
    
        if(currentScrollPos > prevScrollPos){
            setVisible(false)
        }else{
            setVisible(true)
        }
    
        setPrevScrollPos(currentScrollPos)
    }
    
    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll)
    })
   
 
  return (
    <div className='z-40 fixed top-0 w-full'>
        <div className='flex justify-between items-center h-20 bg-white'>
            {/* leftSide */}
            <div className='mx-2 relative'>
                <p className=' font-bold text-3xl bg-gradient-to-tr bg-clip-text text-transparent from-[#781d75] to-[#EC094D] text-center'>SimpleStore</p>
            </div>
            <div onChange={handleScroll} className={` h-1/2 w-96 hidden lg:flex ${visible ? 'top-0' : ''} `}>
                <input type="search" name="search" id="" placeholder='Type your search...' className='bg-stone-200/40 w-full h-full px-2 rounded outline-none' />
            </div>
            {/* right-Side */}
            <div>
                <ul className='hidden md:flex items-center px-5'>
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
