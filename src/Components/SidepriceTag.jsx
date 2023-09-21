import React, {useContext} from 'react'
import {LuBaggageClaim} from 'react-icons/lu'
import { SidebarContext } from '../contexts/SidebarContext'
import {LiaTimesSolid} from 'react-icons/lia'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { CartItem } from './CartItem'
import { BsTrash3} from 'react-icons/bs'
import {MdOutlineKeyboardDoubleArrowRight, MdOutlineRemoveShoppingCart} from 'react-icons/md'

export const SidepriceTag = () => {
  const {handleClose, isOpen} = useContext(SidebarContext)
  const {cart, clearCart, itemAmount, total} = useContext(CartContext)
  
  return (
    <div>
      {
        isOpen ? (
            <div  className='w-full  sm:w-2/3 md:w-1/2 h-full fixed  shadow-lg right-0 md:-right-0 top-0 z-[999] duration-200 transition-all'>
              <div onClick={handleClose} className='bg-black/70  fixed top-0 left-0 right-0 h-full w-full duration-500 transition-all'></div>
              <div className='bg-white relative shadow-lg h-full rounded'>
                <div className='h-20 mx-2 flex items-center justify-between border-b relative'>
                  <p className='flex items-center text-lg  bg-gradient-to-tr bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>
                      {itemAmount > 1 ? itemAmount + ' items' : itemAmount + ' item'}
                      <LuBaggageClaim className='mr-1 text-[#781d75]'/>
                  </p>
                  <p onClick={handleClose} className=' flex items-end justify-end p-2 '><LiaTimesSolid size={30} /></p>
                </div>
                {/* cart items  */}
                <div className='h-[75vh] p-3 overflow-auto no-scrollbar'>
                  { itemAmount > 1? (
                      cart.map((item) => {
                        return(
                          <CartItem item={item} key={item.id}/>
                        )
                      })
                  )
                  :
                  (
                    <div className='flex flex-col justify-center items-center h-full text-[#781d75]'>
                      <MdOutlineRemoveShoppingCart size={60} />
                      <p className='p-2 font-bold'>No product found</p>
                    </div>
                  )
                  }
                </div>
                <div className='absolute bottom-7 right-2 left-2 p-2 flex justify-between font-bold items-center rounded bg-gradient-to-tr from-[#781d75] to-[#ee5583]'>
                  <div onClick={clearCart} className='flex items-center text-stone-50 cursor-pointer'>
                    <span className='px-1'>Clear all</span>
                    <BsTrash3/>
                  </div>
                  <div className='flex items-center cursor-pointer'>
                    <span className='text-stone-50 flex items-center'>Proceed to Checkout <MdOutlineKeyboardDoubleArrowRight size={20} className='mt-1 animate-pulse'/></span>
                    <Link to='/signIn' onClick={handleClose} className='px-2 rounded-full bg-white text-[#781d75] h-full hover:scale-105 transition-all duration-500 shadow-lg'>
                      ${total.toLocaleString()}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            )
            : (
          <div onClick={handleClose} className='fixed top-1/2 md:right-0 -right-40 transition-all duration-300 bg-[#781d75] h-20 w-auto text-stone-100 font-bold px-1 flex flex-col justify-around items-center shadow'>
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