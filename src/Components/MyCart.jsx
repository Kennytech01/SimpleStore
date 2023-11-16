import React, {useContext, useEffect} from 'react'
import { FaShopify } from 'react-icons/fa'
import { SidebarContext } from '../contexts/SidebarContext'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { CartItem } from './CartItem'
import { BsTrash3, BsArrowRight, BsSuitHeart} from 'react-icons/bs'
import { MdOutlineRemoveShoppingCart, MdPayment} from 'react-icons/md'
import {TiArrowForwardOutline} from 'react-icons/ti'


export const MyCart = () => {
    const {handleCart} = useContext(SidebarContext)
    const {cart,itemAmount, total} = useContext(CartContext)
  return (
    <div>
        <div className='md:flex justify-between sm:mx-14 mx-5 py-10 gap-8 mx-'>
            <div className='bg-white relative shadow-lg w-full rounded '>
                <div className='h-20 mx-2 flex items-center justify-between border-b relative'>
                    <p className='flex items-center text-lg font-bold uppercase  bg-gradient-to-tr bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>
                        <p>{itemAmount > 1 ? itemAmount + ' items' : itemAmount + ' item'}</p>
                        <FaShopify size={30} className='mr-1 text-[#781d75]'/>
                    </p>
                </div>
                {/* cart items  */}
                <div className='h-[60vh] p-3 overflow-auto no-scrollbar my-10'>
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
            </div>
            {/* check out */}
            <div className=' md:w-96 bg-white rounded uppercase h-60 md:mx-0 '>
                <p className='border-b p-2 py-5'>Cart Summary</p>
                <div className='flex flex-wrap items-center cursor-pointer justify-between mx-2 bg-white py-5 border-b my-1'>
                    <span className='flex items-center'>Subtotal <BsArrowRight size={20} className='mx-1 font-bold animate-pulse'/></span>
                    <span  className=' text-[#781d75] text-2xl px-2'>
                    ${total.toLocaleString()}
                    </span>
                </div>
                <Link to='/signIn' onClick={handleCart} className='p-4 justify-center bg-[#781d75] text-stone-100 font-bold shadow hover:opacity-60 transition-all mx-2 flex items-center rounded'>
                    check out
                    <MdPayment className='ml-1'/>
                </Link>
            </div>
        </div>
        {/* saved items */}
        <div className='bg-white rounded shadow sm:mx-14 mx-5  mt-5'>
            <h1 className='border-b p-5 text-lg'>Saved Items</h1>
            <div className='flex flex-col justify-center items-center h-full '>
                < BsSuitHeart size={60} className='text-[#781d75]'/>
                <p className='p-2 font-bold text-stone-700 text-lg'>You haven’t saved an item yet!</p>
                <p className='font-light text-stone-700 px-4'>
                <span className='text-[#781d75] font-bold px-1'>Found something you like?</span> 
                Tap on the heart shaped icon next to the item to add it to your wishlist!.All your saved items will appear here...
                </p>
                <Link to={`/`}>
                <button className='m-5 bg-[#781d75] p-3 rounded text-stone-100 capitalize hover:opacity-80 transition-all'>continue shopping</button>
                </Link>
            </div>
        </div>
        {/* recently viewed */}
        <div className='bg-white rounded shadow sm:mx-14 mx-5 mt-5'>
            <h1 className='border-b p-5 text-lg'>Recently Viewed</h1>
            <p className='p-5 text-center'>recently viewd items will apppear </p>
        </div>
    </div>
  )
}
