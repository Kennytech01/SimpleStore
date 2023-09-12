import React from 'react'
import {LuBaggageClaim} from 'react-icons/lu'


export const SidepriceTag = () => {
  return (
    <div className='fixed top-1/2 md:right-0 -right-40 transition-all duration-500 bg-[#781d75] h-24 w-28 text-stone-100 font-bold p-2 flex flex-col justify-around rounded-l'>
        <div className='flex items-center'>
            <LuBaggageClaim className='mr-1'/>
            (0) items
        </div>
        <div>
            <input type="text" name="" id="" className='w-full p-1 rounded outline-none' />
        </div>
    </div>
  )
}
// check home folder