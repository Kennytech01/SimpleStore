import React, { useState, useEffect} from 'react'
import PickBazar from '../assets/images/PickBazar.png'
import {Link, NavLink} from 'react-router-dom'
import {LiaTimesSolid} from 'react-icons/lia'
import {HiMiniBars3BottomRight} from 'react-icons/hi2'
import { motion } from 'framer-motion'
import { Home } from './Home'

export const Navbar = () => {
    const [mobile, setMobile] = useState(false)
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
    <div className=' sticky z-[999] top-0 bg-white'>
        <div className='flex justify-between items-center h-20'>
            {/* leftSide */}
            <div className='flex items-center'>
                <div className='h-10 mx-2 items-center'>
                    <p className='font-bold text-3xl bg-gradient-to-tr bg-clip-text text-transparent from-[#781d75] to-[#EC094D] '>SimpleStore</p>
                </div>
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
                    <NavLink to = '/' element={<Home/>} className= "bg-[#781d75] text-stone-50 rounded-lg" >
                        <li className='flex items-center px-3 py-2 rounded-lg font-bold'>Become a Seller</li>
                    </NavLink>
                    <NavLink to = '/' element={<Home/>} className= "bg-[#781d75] text-stone-50 rounded-lg ml-3" >
                        <li className='flex items-center px-3 py-2 rounded-lg font-bold'>Join</li>
                    </NavLink>
                </ul>
                {/* mobile */}
                <div className='flex flex-cols md:hidden px-3'>
                    <motion.span onClick={()=> setMobile(!mobile)} transition={{delay:5}}>
                        {mobile?<LiaTimesSolid size={30} /> : <HiMiniBars3BottomRight size={30} />}
                    </motion.span>
                </div>
            </div>
        </div>
    </div>
  )
}
