import React from 'react'
import {FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa'
import paymentLogo from '../assets/images/paymentLogo.webp'

export const Footer = () => {
  return (
    <div className=' bg-black text-white sm:h-72 h-80 flex justify-center items-center mt-32'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-3 gap-8 h-full'>
            {/* follow us  */}
            <div className='flex flex-col items-start justify-center'>
                <h1 className=' text-lg font-bold p-2'>Follow Us</h1>
                <div className='flex flex-wrap text-stone-100'>
                    <p className='bg-blue-300 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <FaTwitter size={20}/>
                    </p>
                    <p className='bg-blue-700 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <FaFacebookF size={20}/>
                    </p>
                    <p className='bg-[#EC094D] m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <FaInstagram size={20}/>
                    </p>
                    <p className='bg-blue-600 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <FaLinkedinIn  size={20}/>
                    </p>
                    <p className='bg-black m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <FaGithub size={20}/>
                    </p>
                    <p className='bg-green-500 m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <FaWhatsapp size={20}/>
                    </p>
                </div>
            </div>
            {/* Call Us */}
            <div className=' flex flex-col items-start justify-center'>
                <h2 className='text-lg p-2 font-bold'>Call us today</h2>
                <h1 className='text-[#e2d9e1] text-xl'>+234-8136878980</h1>
            </div>
            {/* Payment method */}
            <div className='flex flex-col items-start justify-center'>
                <img src={paymentLogo} alt=""  />
            </div>
        </div>
    </div>
  )
}
