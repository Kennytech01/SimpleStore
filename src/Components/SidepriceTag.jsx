import React, {useContext, useEffect} from 'react'
import { FaShopify } from 'react-icons/fa'
import { SidebarContext } from '../contexts/SidebarContext'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { CartItem } from './CartItem'
import { BsTrash3, BsArrowRight} from 'react-icons/bs'
import { MdOutlineRemoveShoppingCart, MdPayment} from 'react-icons/md'
import {TiArrowForwardOutline} from 'react-icons/ti'
import AOS from 'aos'
import "aos/dist/aos.css"

export const SidepriceTag = () => {
  const {handleCart, isOpen} = useContext(SidebarContext)
  const {cart, clearCart, itemAmount, total} = useContext(CartContext)
  

  useEffect(() => {
    AOS.init({
      duration: 500
    })    
  },[])

  return (
      <Link to={`/mycart`} onClick={handleCart} className='fixed top-1/2 z-[999] md:right-0 -right-40 transition-all bg-[#781d75] h-20 w-auto text-stone-100 font-bold px-1 flex flex-col justify-around items-center shadow'>
        <p className='flex items-center text-sm w-full'>
            {itemAmount > 1 ? itemAmount + ' items' : itemAmount + ' item'}
            <FaShopify className='mr-1'/>
        </p>
          <p className='bg-stone-50 flex items-center text-[#781d75] justify-center w-full rounded'>${total.toLocaleString()}</p>
      </Link>
  )
}
// check home folder