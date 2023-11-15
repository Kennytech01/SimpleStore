import React, { useState, useEffect, useContext} from 'react'
import { Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import {FiUser} from 'react-icons/fi'
import {TfiHelpAlt} from 'react-icons/tfi'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsCart4 } from 'react-icons/bs'
import { LuSearch, LuLock, LuShoppingBag, LuHeart, LuHome} from 'react-icons/lu'
import { useNavigate } from "react-router-dom";
import { ItemContext } from '../contexts/ItemContext'
import {FcShop} from 'react-icons/fc'
import { UserAuth } from '../contexts/AuthContext'
import {PiSignOut, PiUserLight, PiUser} from 'react-icons/pi'
import AOS from 'aos'
import "aos/dist/aos.css"


export const Navbar = () => {
    const {isActive, setIsActive } = useContext(CartContext)
    const [dropDown, setDropDown] = useState(false)
    const {handleCart} = useContext(SidebarContext)
    const {itemAmount} = useContext(CartContext)
    const {searchItem, setSearchItem} = useContext(ItemContext)
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()
    const [menu, setMenu] = useState('')

   const handleDrop = () => {
        setDropDown(!dropDown)
    }

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
 
    useEffect( () => {
        window.addEventListener('scroll', () => {
            window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
        });
    })

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        AOS.init({
          duration: 500
        })    
    },[])

   return (
    <div className={`${isActive ? 'fixed w-full top-0 bg-[#781d75] z-[99] ' : 'bg-stone-100 '} transition-all flex justify-between items-center h-20 md:px-10 px-2  shadow text-stone-800 `}>
        {/* leftSide */}   
        <div className='mx-2 relative hidden lg:flex'>
            <Link onClick={scrollToTop} to={`/`} className={`${isActive? 'bg-gradient-to-r bg-clip-text text-transparent to-white from-[#fb923c] ' : 'bg-gradient-to-tr bg-clip-text text-transparent to-[#781d75] via-[#fb923c] from-[#EC094D]'} font-bold text-3xl md:text-4xl text-center flex items-center`}>
                SimpleStore
                <FcShop/>
            </Link>
        </div>
        <div className={`h-1/2 w-96  top-0 rounded bg-white flex items-center relative `}>
            <LuSearch className='bg-stone-white mx-1'/>
            <input 
                type="search" 
                name="search"
                value={searchItem}
                onChange={(e)=> setSearchItem(e.target.value)}
                placeholder='search on Simplestore...' 
                className='text-stone-500  w-full h-full  rounded outline-none transition-all duration-1000'
            />
        </div>
        {/* right-Side */}
        <div className={`${isActive? 'text-stone-100' : 'bg-gradient-to-r bg-clip-text text-transparent to-[#781d75] from-[#EC094D]'} md:flex items-center sm:px-5 px-2 `} >
            <Link to={`/mycart`} onClick={scrollToTop} className= "cursor-pointer relative hover:underline decoration-[#781d75] decoration-2 underline-offset-4" >
                <span className={` text-white bg-red-500 absolute top-3 md:-top-1 shadow-lg text-sm p-2 left-7  rounded-full w-5 h-5 flex items-center justify-center`}>{itemAmount}</span>
                <span className={ ` ${isActive ? 'bg-gradient-to-r bg-clip-text text-transparent to-white from-[#fb923c] ' :' bg-gradient-to-r bg-clip-text text-transparent  from-[#781d75] to-[#EC094D]'} text-[#781d75] flex items-center px-3 py-2 rounded-lg`}>
                    <BsCart4  size={20} className={`mr-2 ${isActive? 'text-white' : 'text-[#781d75]'}`}/>
                    <span >CART</span>
                 </span>
            </Link>
            <Link onClick={scrollToTop} to = '/signin' className= {` ${isActive ? 'bg-gradient-to-r bg-clip-text text-transparent to-white from-[#fb923c] ' :' bg-gradient-to-r bg-clip-text text-transparent  from-[#781d75] to-[#EC094D]'} hidden md:flex hover:underline decoration-[#781d75] decoration-2 underline-offset-4`} >
                <span className='flex items-center px-3 py-2 rounded-lg '> <TfiHelpAlt className='text-[#781d75] mt-1 mx-2'/> HELP</span>
            </Link>
            {
                user?.email? (
                    <div className='flex items-center'>
                        <div className='transition-all '>
                            <p onClick={()=> setMenu(!menu)} onMouseOver={()=> setMenu(!menu)} className={`${isActive ? 'bg-gradient-to-r bg-clip-text text-transparent to-white from-[#fb923c] ' :' bg-gradient-to-r bg-clip-text text-transparent  from-[#781d75] to-[#EC094D]'} hidden md:flex  cursor-pointer hover:underline decoration-[#781d75] decoration-2 underline-offset-4 items-center px-3 py-2 rounded-lg relative transition-all duration-500`}>
                                <PiUserLight className={` ${isActive && 'text-stone-100'} mx-2 text-[#781d75]`} />
                                ACCOUNT
                            </p>
                            {
                                menu && (
                                    <div data-aos="zoom-in" className='absolute bg-white shadow flex z-[99] right-40 w-48 rounded p-2'>
                                        <div className='flex flex-col p-3 w-full transition-all text-stone-700'>
                                            <p onClick={()=> setMenu(!menu)}>
                                                <Link 
                                                    to={`account/acct_info`}
                                                    onClick={scrollToTop}
                                                    className='flex items-center p-2 w-full hover:underline decoration-[#781d75] decoration-2 underline-offset-4'
                                                    >
                                                    <PiUser className='m-2'/>
                                                    Account Info
                                                </Link>
                                            </p>
                                            <p onClick={()=> setMenu(!menu)}>
                                                <Link 
                                                    to={`account/order`}
                                                    onClick={scrollToTop} 
                                                    className='flex items-center p-2 w-full hover:underline decoration-[#781d75] decoration-2 underline-offset-4'>
                                                    <LuShoppingBag className='m-2'/>
                                                    Orders
                                                </Link>
                                            </p>
                                            <p onClick={()=> setMenu(!menu)}>
                                                <Link 
                                                    to={`account/saved_items`}
                                                    onClick={scrollToTop}
                                                    className='flex items-center p-2 w-full hover:underline decoration-[#781d75] decoration-2 underline-offset-4'>
                                                    <LuHeart className="m-2"/>
                                                    Saved Items
                                                </Link>
                                            </p>
                                            <p className='border-t'>
                                                <Link 
                                                    onClick={scrollToTop} 
                                                    to={`/`} 
                                                    className="text-[#fb923c] flex items-center p-2 hover:underline decoration-[#781d75] decoration-2 underline-offset-4">
                                                    <LuHome className='m-2'/>Return home
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div onClick={handleLogOut}  className={`hover:opacity-80 rounded text-stone-100 shadow-drop shadow-violet-900 hidden md:flex cursor-pointer bg-[#fb923c] items-center font-bold px-3 py-2 transition-all`}>
                            <PiSignOut className={` ${isActive && 'text-stone-100'} mx-1 text-[#781d75] `}/> 
                            LOGOUT
                        </div>
                    </div>
                ) 
                :
                (
                    <div className='flex items-center'>
                        <Link onClick={scrollToTop} to ='/signin'  className={`${isActive ? 'bg-gradient-to-r bg-clip-text text-transparent to-white from-[#fb923c] ' :' bg-gradient-to-r bg-clip-text text-transparent  from-[#781d75] to-[#EC094D]'} hidden md:flex cursor-pointer hover:underline decoration-[#781d75] decoration-2 underline-offset-4 items-center px-3 py-2 transition-all`}>
                            <FiUser className={` ${isActive && 'text-stone-100'} mx-2 text-[#781d75]`}/> 
                            LOGIN
                        </Link>
                        <Link onClick={scrollToTop} to ='/sigup'  className={`hover:opacity-80 rounded text-stone-100 shadow-drop shadow-violet-900 hidden md:flex cursor-pointer bg-[#fb923c] items-center px-3 py-2 transition-all`}>
                            <LuLock className={` ${isActive && 'text-stone-100'} mr-1 text-[#781d75]`}/> 
                            SIGNUP
                        </Link>
                    </div>
                )
            }
        </div>
    </div>
  )
}
