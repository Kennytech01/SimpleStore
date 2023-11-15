import React from 'react'

export const AccountInfo = () => {
  return (
    <div className='bg-white w-full rounded shadow'>
        <h1 className='border-b p-5 text-lg'>Account Overview</h1>
        <form className='p-4 lg:m-10 m-5'>
            <div className='md:flex justify-around my-3'>
                <div className='border md:w-full md:m-2 m-5 rounded'>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder='Firstname'
                        className='p-2 w-full outline-none'
                    />
                </div>
                <div className='md:w-full border md:m-2 m-5 rounded'>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder='Lastname'
                        className='p-2 w-full outline-none'
                    />
                </div>
            </div>
            <div className='md:flex justify-around my-3'>
                <div className='md:w-full border md:m-2 m-5 rounded'>
                    <input 
                        type="email" 
                        name="" 
                        id="" 
                        placeholder='expmple@gmail.com'
                        className='p-2 w-full outline-none'
                    />
                </div>
                <div className='w-full border md:m-2 m-5 rounded'>
                    <input 
                        type="password" 
                        name="" 
                        id="" 
                        placeholder='Current password'
                        className='p-2 w-full outline-none'
                    />
                </div>
            </div>
            <div className='md:flex justify-around my-3'>
                <div className='border w-full md:m-2 m-5 rounded'>
                    <input 
                        type="password" 
                        name="" 
                        id="" 
                        placeholder='New Password'
                        className='p-2 w-full outline-none'
                    />
                </div>
                <div className='w-full border md:m-2 m-5 rounded'>
                    <input 
                        type="password" 
                        name="" 
                        id="" 
                        placeholder='Confirm Password'
                        className='p-2 w-full outline-none'
                    />
                </div>
            </div>
            <div className='m-5 flex justify-center'>
                <button className='bg-[#781d75] w-full p-3 text-stone-100 rounded-lg transition-all hover:opacity-75'>
                    SAVE CHANGES
                </button> 
            </div>
        </form>
    </div>
  )
}
