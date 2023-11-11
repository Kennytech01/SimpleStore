import React, { useContext } from 'react'
import {BsPlusLg, BsDashLg, BsTrash3} from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'


export const CartItem = ({item}) => {
    console.log(item)
    const {id, title, images, price, amount} = item
    const {removeCart, increaseAmount,decreaseAmount} = useContext(CartContext)
   

  return ( 
    <div className='flex group'>
        <div className='w-full min-h-28 border flex items-center gap-x-4 m-3 p-2 rounded-lg'>
            <div>
                <img src={images[0]} alt={item.title} className='max-w-[80px]' />
            </div>
            <div className=' p-2 w-full mx-2'>
                <h1 className='font-bold text-stone-700'>{title}</h1>
                <p className=' text-sm font-lg font-extrabold text-[#fb923c] group-hover:cursor-pointer'>{`$${parseFloat(price * amount).toLocaleString()}`}</p>
                <div className='flex w-full justify-between items-center py-2'>
                    <div className='border px-3 py-1 rounded-lg flex items-center justify-between text-sm'>
                        <BsDashLg onClick={()=> decreaseAmount(id)}/>
                        <span className='px-5 font-bold'>{amount}</span>
                        <BsPlusLg onClick={()=> increaseAmount(id)}/>
                    </div>
                    <p onClick={()=> removeCart(id)} className='text-red-600'><BsTrash3/></p>
                </div>
            </div>
        </div>
    </div>
  )
}
