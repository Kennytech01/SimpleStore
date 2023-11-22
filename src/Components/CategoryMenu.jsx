import React, { useContext } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import { Link } from 'react-router-dom'
import { RiArrowUpDownFill } from "react-icons/ri";

export const CategoryMenu = () => {
    const {items} = useContext(ItemContext)

    // const filter = [...new Set(items)]

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

  return (
    <div className='w-80 bg-white shadow'>
        <div className='relative'>
            <h1 className='text-green-focus border-b text-xl p-5 bg-white z-10 sticky top-20'>Browse Categories</h1>
            <div className='flex flex-col p-3 transition-all'>
                <Link to={`/categories/smart_phone`} onClick={scrollToTop}  className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>Smart Phones</Link>
                <Link to={`/categories/laptops`} onClick={scrollToTop} className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>Laptops</Link>
                <Link to={`/categories/skincare`} onClick={scrollToTop}  className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>SkinCare</Link>
                <Link to={`/categories/fragrance`} onClick={scrollToTop} className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>Fragrance</Link>
                <Link to={`/categories/home_deco`} onClick={scrollToTop} className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>Home Decoration</Link>
                <Link to={`/categories/super_market`} onClick={scrollToTop} className='p-2  hover:underline decoration-green decoration-2 underline-offset-4'>Goceries</Link>
            </div>
        </div>
        <div>
            <h1 className='text-green-focus border-b text-xl p-5 bg-white z-10 sticky top-20 flex items-center'>
                Sort Items
                <RiArrowUpDownFill/>
            </h1>
            <div className='flex flex-col p-3'>
                <span className='p-2 cursor-pointer'>
                    <input type="radio" name="" id="" className='mx-1' />
                    Alphabetically
                </span>
                <span className='p-2 cursor-pointer'>
                    <input type="radio" name="" id="" className='mx-1' />
                    Price - high to low
                </span>
                <span className='p-2 cursor-pointer'>
                    <input type="radio" name="" id="" className='mx-1' />
                    Price - low to high
                </span>
            </div>
        </div>
    </div>
  )
}
