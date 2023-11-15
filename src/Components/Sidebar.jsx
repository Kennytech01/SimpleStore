import React, {useEffect}from 'react'
import {PiUser, PiSignOut} from 'react-icons/pi'
import { NavLink} from 'react-router-dom'
import {LuShoppingBag, LuHeart, LuHome} from 'react-icons/lu'
import AOS from 'aos'
import "aos/dist/aos.css"

export const Sidebar = () => {


    useEffect(() => {
        AOS.init({
          duration: 1000
        })    
      },[])
    
      const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

  return (
    <div  className='lg:w-80 w-60 bg-white text-stone-700 h-80 flex items-center rounded shadow'>
        <div className='flex flex-col p-3 w-full transition-all '>
            <NavLink 
                to={`acct_info`}
                style={
                    ({isActive}) => {
                    return {color: isActive && '#781d75'}
                }}
                className='flex items-center p-2 w-full hover:underline decoration-[#781d75] decoration-2 underline-offset-4'
                >
                <PiUser className='m-2'/>
                Account Information
            </NavLink>
            <NavLink 
                to={`order`}
                style={
                    ({isActive}) => {
                    return {color: isActive && '#781d75'}
                }} 
                className='flex items-center p-2 w-full hover:underline decoration-[#781d75] decoration-2 underline-offset-4'>
                <LuShoppingBag className='m-2'/>
                Orders
            </NavLink>
            <NavLink 
                to={`saved_items`}
                style={
                    ({isActive}) => {
                    return {color: isActive && '#781d75'}
                }}
                className='flex items-center p-2 w-full hover:underline decoration-[#781d75] decoration-2 underline-offset-4'>
                <LuHeart className="m-2"/>
                Saved Items
            </NavLink>
            <NavLink 
                to={`/signin`}
                className='flex items-center p-2 mt-5 w-full bg-[#fb923c] rounded hover:opacity-75 transition-all text-white'
                >
                <PiSignOut className="m-2"/>
                Logout
            </NavLink>
            <NavLink onClick={scrollToTop} to={`/`} className="text-[#fb923c] border-b flex items-center p-2 hover:underline decoration-[#781d75] decoration-2 underline-offset-4">
                <LuHome className='m-2'/>Return home
            </NavLink>
        </div>
    </div>
  )
}
