import React from 'react'
import { BsSuitHeart } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const SavedItems = () => {
  return (
    <div className='bg-white w-full rounded shadow h-screen'>
      <h1 className='border-b p-5 text-lg'>Saved Items</h1>
      <div className='flex flex-col justify-center items-center h-full '>
        < BsSuitHeart size={60} className='text-[#781d75]'/>
        <p className='p-2 font-bold text-stone-700 text-lg'>You haven’t saved an item yet!</p>
        <p className='font-light text-stone-700 px-4'>
          <span className='text-[#781d75] font-bold px-1'>Found something you like?</span> 
          Tap on the heart shaped icon next to the item to add it to your wishlist! 
          <p className='text-center'> All your saved items will appear here..</p>
        </p>
        <Link to={`/`}>
          <button className='m-5 bg-[#781d75] p-3 rounded text-stone-100 capitalize hover:opacity-80 transition-all'>continue shopping</button>
        </Link>
      </div>
    </div>
  )
}
