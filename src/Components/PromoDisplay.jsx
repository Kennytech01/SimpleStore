import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export const PromoDisplay = () => {
  return (
    <div className='flex justify-center items-center h-10 mx-10'>
        <div className='flex text-[#781d75] font-bold text-2xl'>
            <TypeAnimation 
                sequence={[
                    'Welcome to SimpleStore',
                    2000,
                    'Call to Order: 08136878980',
                    3000,
                ]}
                wrapper="div"
                speed={30}
                repeat={Infinity}
            />
        </div>
        {/* <div></div> */}
    </div>
  )
}
