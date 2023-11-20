import React from 'react'
import { Outlet} from 'react-router-dom'
import { DeliveryCheckout } from './CartSummary'


export const MyCart = () => {
    
  return (
    <div className='flex mx-5 gap-4 mt-5'>
       <Outlet/>
       <DeliveryCheckout/>
    </div>
  )
}
