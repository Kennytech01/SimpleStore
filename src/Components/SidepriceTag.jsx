import React, {useContext, useEffect} from 'react'
import {FaShopify} from 'react-icons/fa'
import { SidebarContext } from '../contexts/SidebarContext'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { CartItem } from './CartItem'
import { BsTrash3} from 'react-icons/bs'
import {MdOutlineKeyboardDoubleArrowRight, MdOutlineRemoveShoppingCart} from 'react-icons/md'
import {TiArrowForwardOutline} from 'react-icons/ti'
import AOS from 'aos'
import "aos/dist/aos.css"

export const SidepriceTag = () => {
  const {handleCart, isOpen} = useContext(SidebarContext)
  const {cart, clearCart, itemAmount, total} = useContext(CartContext)
  

  useEffect(() => {
    AOS.init({
      duration: 1000
    })    
  },[])

  return (
    <div>
      <div onClick={handleCart} className='fixed top-1/2 md:right-0 -right-40 transition-all bg-[#781d75] h-20 w-auto text-stone-100 font-bold px-1 flex flex-col justify-around items-center shadow'>
        <p className='flex items-center text-sm w-full'>
            {itemAmount > 1 ? itemAmount + ' items' : itemAmount + ' item'}
            <FaShopify className='mr-1'/>
        </p>
          <p className='bg-stone-50 flex items-center text-[#781d75] justify-center w-full rounded'>${total.toLocaleString()}</p>
      </div>
     { 
        isOpen && (
        <div>
          <div onClick={handleCart} className='bg-black/70 backdrop-blur fixed top-0 left-0 right-0 h-full w-full transition-all z-[999]'></div>
          <div data-aos="fade-left" className='w-full text-stone-700  sm:w-2/3 md:w-1/3 h-full fixed  shadow-lg right-0 md:-right-0 top-0 z-[999] duration-200 transition-all'>
            <div className='bg-white relative shadow-lg h-full rounded'>
              <div className='h-20 mx-2 flex items-center justify-between border-b relative'>
                <p className='flex items-center text-lg font-bold capitalize  bg-gradient-to-tr bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>
                    {itemAmount > 1 ? <span>{itemAmount } items </span>: <span>{itemAmount } item </span>}
                    <FaShopify className='mr-1 text-[#781d75]'/>
                </p>
                <p onClick={handleCart} className=' flex items-end justify-end p-2 '><TiArrowForwardOutline size={30} /></p>
              </div>
              {/* cart items  */}
              <div className='h-[60vh] p-3 overflow-auto no-scrollbar'>
                { itemAmount? (
                    cart.map((item) => {
                      return(
                        <CartItem item={item} key={item.id}/>
                      )
                    })
                )
                :
                (
                  <div className='flex flex-col justify-center items-center h-full '>
                    <MdOutlineRemoveShoppingCart size={60} className='text-[#781d75]'/>
                    <p className='p-2 font-bold'>Your cart is empty</p>
                    <p>You have not added any item to your cart.</p>
                  </div>
                )
                }
              </div>
              {/* total */}
              <div className='absolute bottom-0 w-full font-bold items-center rounded uppercase'> 
                <div className='flex flex-wrap items-center cursor-pointer justify-between mx-2 bg-white'>
                  <span className='flex items-center'>total <MdOutlineKeyboardDoubleArrowRight size={30} className=' animate-pulse'/></span>
                  <span  className=' text-[#781d75] h-full text-2xl px-2'>
                    ${total.toLocaleString()}
                  </span>
                </div>
                <Link to='/signIn' onClick={handleCart} className='p-4 justify-center bg-[#781d75] text-stone-100 font-bold shadow hover:opacity-60 transition-all mx-2 flex items-center rounded'>
                  check out
                  <FaShopify className='ml-1'/>
                </Link>
                <div onClick={clearCart} className='flex items-center justify-center text-stone-50 cursor-pointer bg-[#e76d6d] p-4 m-2 hover:opacity-60 transition-all rounded'>
                  <span className='px-1'>Clear all</span>
                  <BsTrash3/>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </div>
  )
}
// check home folder