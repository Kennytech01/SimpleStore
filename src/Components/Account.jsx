import React from 'react'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'

export const Account = () => {
  return (
    <div className='flex justify-between lg:mx-10 p-5 gap-8'>
        <div className='hidden md:flex'>
          <Sidebar/>
        </div>
        <Outlet/>
    </div>
  )
}
