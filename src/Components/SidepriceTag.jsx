import React, {useContext} from 'react'
import {LuBaggageClaim} from 'react-icons/lu'
import { SidebarContext } from '../contexts/SidebarContext'
import {LiaTimesSolid} from 'react-icons/lia'
import { ItemContext } from '../contexts/ItemContext'
// import { CartContext } from '../contexts/CartContext'


export const SidepriceTag = () => {
  const {handleClose, isOpen} = useContext(SidebarContext)
  const {popUP, toggle} = useContext(ItemContext)
  
  return (
    <div>
      {
        isOpen ? (
            <div  className='w-4/5 sm:w-2/3 md:w-1/2 fixed  shadow-lg right-0 md:-right-0 top-0 h-full z-[999] duration-500 transition-all'>
              <div onClick={handleClose} className='bg-black/70  fixed top-0 left-0 right-0 h-full w-full duration-500 transition-all'></div>
              <div className='bg-white relative shadow-lg h-full rounded cursor-pointer'>
                <div className='h-20 mx-2 flex items-center justify-between border-b relative'>
                  <p className='p-2 flex items-center'>
                    <LuBaggageClaim size={20} className='mr-2'/>
                    <span className='font-bold text-2xl bg-gradient-to-tr bg-clip-text text-transparent from-[#781d75] to-[#EC094D] text-center'>Shopping Cart</span>
                  </p>
                  <p onClick={handleClose} className=' flex items-end justify-end p-2 '><LiaTimesSolid size={30} /></p>
                </div>
                {/* cart items  */}
                <div>
                  { toggle? (
                    popUP.map((pop)=>{
                      return(
                        <div>{pop.title}</div>
                      )
                    })
                  )
                  : 
                  null
                  }
                </div>
                <div className='absolute bottom-10 p-2 h-14 right-2 left-2 flex justify-between font-bold items-center rounded-2xl bg-gradient-to-tr from-[#781d75] to-[#EC094D]'>
                  <span className='text-stone-50'>Proceed to Checkout</span>
                  <button className='p-2 rounded-full bg-white text-[#781d75] h-full hover:scale-105 transition-all duration-500 shadow-lg'>$0.00</button>
                </div>
              </div>
            </div>
            )
            : (
          <div onClick={handleClose} className='fixed top-1/2 md:right-0 -right-40 transition-all duration-500 bg-[#781d75] h-24 w-24 text-stone-100 font-bold p-2 flex flex-col justify-around rounded-l'>
            <div className='flex items-center'>
                <LuBaggageClaim className='mr-1'/>
                0 item
            </div>
            <div>
                <input type="text" name="" id="" className='w-full p-1 rounded outline-none' />
            </div>
          </div>
        )
      }
    </div>
  )
}
// check home folder