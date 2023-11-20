import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { BsArrowRight} from 'react-icons/bs'
import { MdPayment} from 'react-icons/md'

export const Payment = () => {
    const [currentValue, setCurrentValue] = useState('on')
    const {total} = useContext(CartContext)
    const [addAddress, setAddAddress] = useState(false)

    const handleRadioChange = (value) => {
        setCurrentValue(value)
    };
  return (
    <div className='md:flex justify-between md:mx-10 mx-2 my-5 gap-4'>
        <div className='shadow w-full'>
            <h1 className='font-bold p-3 border-b border-green-focus uppercase py-5'>Choose delivery option</h1>
            <div className='p-5 transition-all'>
                <div className=''>
                    <div className='py-2'>
                        <input 
                            type="radio" 
                            name="radio-one" 
                            value= "on" 
                            onChange={(e)=> setCurrentValue(e.target.value)}
                            defaultChecked = { currentValue === 'on'}
                        />
                        <label htmlFor="radio-one" className='font-bold px-1'>Deliver to me</label>
                        {
                            currentValue === 'on' && (
                                <div>
                                    <p className='text-sm font-light py-2'>Click on Add Address to specify a delivery address.</p>
                                    <p onClick={()=> setAddAddress(!addAddress)} className='flex items-center justify-center'>
                                        <button  className='drop-shadow-xl p-2 rounded bg-green-focus text-white hover:opacity-80 transition-all'>
                                            {
                                                addAddress ? <span>Enter your Location deatils below</span> : <span>Add Delivery Address</span>
                                            }
                                        </button>
                                    </p>
                                    {
                                        addAddress && (
                                            <div className='my-5 drop-shadow bg-'>
                                                <form action="" className='drop-shadow py-5 sm:px-5 md:px-0'>
                                                    <div className='md:flex  w-full gap-4 my-2'>
                                                        <input 
                                                            type="text" 
                                                            name="" 
                                                            id="" 
                                                            placeholder='FirstName'
                                                            className='w-full p-3 my-1' 
                                                            />
                                                        <input 
                                                            type="text" 
                                                            name="" 
                                                            id="" 
                                                            placeholder='LastName'
                                                            className='w-full p-3 my-1' 
                                                            />
                                                    </div>
                                                    <div className='md:flex  w-full gap-4 my-2'>
                                                        <input 
                                                            type="tel" 
                                                            name="" 
                                                            id="" 
                                                            placeholder='Phone Number'
                                                            className='w-full p-3 my-1' 
                                                            />
                                                        <input 
                                                            type="text" 
                                                            name="" 
                                                            id="" 
                                                            placeholder='Street Address'
                                                            className='w-full p-3 my-1' 
                                                            />
                                                    </div>
                                                    <div className='md:flex  w-full gap-4 my-2'>
                                                        <input 
                                                            type="text" 
                                                            name="" 
                                                            id="" 
                                                            placeholder='Directions(Optional)'
                                                            className='w-full p-3 my-1' 
                                                            />
                                                        <input 
                                                            type="text" 
                                                            name="" 
                                                            id="" 
                                                            placeholder='City'
                                                            className='w-full p-3 my-1' 
                                                            />
                                                    </div>
                                                    <div className='md:flex  w-full gap-4 my-2'>
                                                        <input 
                                                            type="number" 
                                                            name="" 
                                                            id="" 
                                                            placeholder='State'
                                                            className='w-full p-3 my-1' 
                                                            />
                                                        <input 
                                                            type="text" 
                                                            name="" 
                                                            id="" 
                                                            placeholder='Local Government'
                                                            className='w-full p-3 my-1' 
                                                            />
                                                    </div>
                                                </form>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div className='py-2'>
                        <input 
                            type="radio" 
                            name="radio-one" 
                            value= "off" 
                            onChange={e => setCurrentValue(e.target.value)}
                            defaultChecked = { currentValue === 'off'}
                        />
                        <label htmlFor="radio-item2" className='font-bold px-1'>Pickup from a Store</label>
                            {
                                currentValue === 'off' && (
                                    <div>
                                        <p className='text-sm font-light py-2'>Select a pickup location in your area from our avaliable locations nationwide.</p>
                                        <p className='flex items-center justify-center'>
                                            <button className='drop-shadow-xl p-2 rounded bg-green-focus text-white hover:opacity-80 transition-all'>Select a Pickup Location</button>
                                        </p>
                                    </div>
                                )
                            }
                    </div>
                </div>
            </div>
        </div>
        <div className=' md:w-[26rem] bg-white rounded drop-shadow my-4 md:my-0'>
        <div className=' uppercase h-60 md:mx-0  bg-white sticky top-20'>
            <p className='border-b p-2 py-5 font-bold text-green-focus'>Payment Summary</p>
            <div className='flex flex-wrap items-center cursor-pointer justify-between mx-2 bg-white py-5 my-1'>
                <span className='flex items-center'>Subtotal <BsArrowRight size={20} className='mx-1 font-bold animate-pulse'/></span>
                <span  className=' text-green text-2xl px-2'>
                ${total.toLocaleString()}
                </span>
            </div>
            <Link to={`/payment`}  className=' p-4 justify-center bg-green-focus text-white font-bold shadow hover:opacity-80 transition-all mx-2 flex items-center rounded'>
                confirm order
                <MdPayment className='ml-1'/>
                (${total.toLocaleString()})
            </Link>
        </div>
        </div>
    </div>
  )
}
