import React from 'react'
import { CategoryMenu } from '../Components/CategoryMenu'
import { Outlet } from 'react-router-dom'

export const AllCategories = () => {
  return (
    <div className='flex '>
        <CategoryMenu/>
        <Outlet/>
    </div>
  )
}
