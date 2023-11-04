import React, {useContext} from 'react'
import {LuBaggageClaim} from 'react-icons/lu'
import { SidebarContext } from '../contexts/SidebarContext'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { CartItem } from './CartItem'
import { BsTrash3} from 'react-icons/bs'
import {MdOutlineKeyboardDoubleArrowRight, MdOutlineRemoveShoppingCart} from 'react-icons/md'
import {TiArrowForwardOutline} from 'react-icons/ti'

export const SidepriceTag = () => {
  const {handleClose, isOpen} = useContext(SidebarContext)
  const {cart, clearCart, itemAmount, total} = useContext(CartContext)
  
  return (
    <div>
      {
        isOpen ? (
            <div  className='w-full text-stone-700  sm:w-2/3 md:w-1/3 h-full fixed  shadow-lg right-0 md:-right-0 top-0 z-[999] duration-200 transition-all'>
              <div onClick={handleClose} className='bg-black/70  fixed top-0 left-0 right-0 h-full w-full duration-500 transition-all'></div>
              <div className='bg-white relative shadow-lg h-full rounded'>
                <div className='h-20 mx-2 flex items-center justify-between border-b relative'>
                  <p className='flex items-center text-lg font-bold capitalize  bg-gradient-to-tr bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>
                      {itemAmount > 1 ? <span>{itemAmount } items </span>: <span>{itemAmount } item </span>}
                      <LuBaggageClaim className='mr-1 text-[#781d75]'/>
                  </p>
                  <p onClick={handleClose} className=' flex items-end justify-end p-2 '><TiArrowForwardOutline size={30} /></p>
                </div>
                {/* cart items  */}
                <div className='h-[75vh] p-3 overflow-auto no-scrollbar'>
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
                <div className='absolute bottom-0 w-full font-bold items-center rounded uppercase'> 
                  <div className='flex flex-wrap items-center cursor-pointer justify-between m-2'>
                    <span className='flex items-center'>total <MdOutlineKeyboardDoubleArrowRight size={30} className=' animate-pulse'/></span>
                    <span  className=' text-[#781d75] h-full text-2xl px-2'>
                      ${total.toLocaleString()}
                    </span>
                  </div>
                  <Link to='/signIn' onClick={handleClose} className='p-4 justify-center bg-[#781d75] text-stone-100 font-bold shadow hover:opacity-60 transition-all m-2 flex items-center rounded'>
                    check out
                  </Link>
                  <div onClick={clearCart} className='flex items-center justify-center text-stone-50 cursor-pointer bg-[#e76d6d] p-4 m-2 hover:opacity-60 transition-all rounded'>
                    <span className='px-1'>Clear all</span>
                    <BsTrash3/>
                  </div>
                </div>
              </div>
            </div>
            )
            : (
          <div onClick={handleClose} className='fixed top-1/2 md:right-0 -right-40 transition-all duration-2h00 bg-[#781d75] h-20 w-auto text-stone-100 font-bold px-1 flex flex-col justify-around items-center shadow'>
            <p className='flex items-center text-sm w-full'>
                {itemAmount > 1 ? itemAmount + ' items' : itemAmount + ' item'}
                <LuBaggageClaim className='mr-1'/>
            </p>
              <p className='bg-stone-50 flex items-center text-[#781d75] justify-center w-full rounded'>${total.toLocaleString()}</p>
          </div>
        )
      }
    </div>
  )
}
// check home folder