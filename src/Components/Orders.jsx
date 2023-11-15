import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Orders = () => {
  return (
    <div className='bg-white w-full rounded shadow h-screen'>
      <h1 className='border-b p-5 text-lg'>Orders</h1>
      <div className='flex flex-col justify-center items-center h-full '>
        < BsCart3 size={60} className='text-[#781d75]'/>
        <p className='p-2 font-bold text-stone-700 text-lg'>You have placed no orders yet!</p>
        <p className='font-light text-stone-700'>All your orders will be saved here for you to access their state anytime.</p>
        <Link to={`/`}>
          <button className='m-5 bg-[#781d75] p-3 rounded text-stone-100 capitalize hover:opacity-80 transition-all'>continue shopping</button>
        </Link>
      </div>
    </div>
  )
}
