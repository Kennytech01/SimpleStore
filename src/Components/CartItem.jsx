import React, { useContext } from 'react'
import {BsPlusLg, BsDashLg, BsTrash3} from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../contexts/SidebarContext'

export const CartItem = ({item}) => {
    const {id, title, images, price, amount, thumbnail} = item
    const {removeCart, increaseAmount,decreaseAmount} = useContext(CartContext)

    

  return (
    
    <div className='flex group'>
        <div className='w-full min-h-28 border flex items-center gap-x-4 m-3 p-2 rounded-lg'>
            <div>
                <img src={thumbnail} alt={item.title} className='max-w-[80px]' />
            </div>
            <div className=' p-2 w-full mx-2'>
                <h1 className='font-bold py-2'>{title}</h1>
                <p className=' text-stone-500 '>unit price ${price}</p>
                <div className='flex w-full justify-between items-center'>
                    <p className=' text-sm font-lg font-extrabold text-[#781d75] hover:underline group-hover:cursor-pointer'>Total = {`$${parseFloat(price * amount).toLocaleString()}`}</p>
                    <div className='border px-3 py-1 rounded-lg flex items-center justify-between text-sm'>
                        <BsDashLg onClick={()=> decreaseAmount(id)}/>
                        <span className='px-2'>{amount}</span>
                        <BsPlusLg onClick={()=> increaseAmount(id)}/>
                    </div>
                    <p onClick={()=> removeCart(id)} className='text-red-600'><BsTrash3/></p>
                </div>
            </div>
        </div>
    </div>
  )
}
