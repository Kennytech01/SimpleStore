import React from 'react'
import { Link } from 'react-router-dom'

export const Collections = () => {
    const scrollToTop = () => {
        window.scrollTo(0,0)
    }
  return (
    <div className='flex items-center space-x- overflow-x-hidden'>
        <Link to={`/categories/smart_phone`} onClick={scrollToTop} className='relative w-80 h-48 shadow group transition-all duration-200'>
            <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
            <img 
                className='h-full w-full object-cover'  
                alt="smart phone"
                src={`https://m-cdn.phonearena.com/images/article/141270-wide-two_1200/Not-just-the-Pros-Apple-could-crank-up-iPhone-14-prices-significantly.jpg`}
                 />
            <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Smart Phones</span>
        </Link>
        <Link to={`/categories/laptops`} onClick={scrollToTop} className='relative w-80 h-48 shadow group transition-all duration-200'>
            <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
            <img 
                className='h-full w-full object-cover'  
                alt="smart phone"
                src={`https://s.yimg.com/ny/api/res/1.2/tlECwXStRCcpgJLQ9hq0ZA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MjA-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/542c5620-1748-11ee-bade-78ffb1a5bc61`}
                 />
            <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Laptops</span>
        </Link>
        <Link to={`/categories/skincare`} onClick={scrollToTop} className='relative w-80 h-48 shadow group transition-all duration-200'>
            <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
            <img 
                className='h-full w-full object-cover'  
                alt="smart phone"
                src={`https://www.byrdie.com/thmb/GIaZYKpryPvADGK9CzudNIqxEac=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp1e306b0bcN0300_Medium_2363781-crop-3f6195da0e07421dadac5d259bf8153c.jpg`}
                 />
            <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Skincare</span>
        </Link>
        <Link to={`/categories/fragrance`} onClick={scrollToTop} className='relative w-80 h-48 shadow group transition-all duration-200'>
            <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
            <img 
                className='h-full w-full object-cover'  
                alt="smart phone"
                src={`https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/12/How-to-Apply-Fragrance-the-Right-Way-Gear-Patrol-lead-full.jpg`}
                 />
            <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Fragrances</span>
        </Link>
        <Link to={`/categories/super_market`} onClick={scrollToTop} className='relative w-80 h-48 shadow group transition-all duration-200'>
            <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
            <img 
                className='h-full w-full object-cover'  
                alt="smart phone"
                src={`https://images.ctfassets.net/qr8kennq1pom/4HobsFfwuFnNfhL5G4TZil/bfb2aa5065e4a967e3cd1499f2c255bc/nrd-D6Tu_L3chLE-unsplash.jpg?fm=jpg&fl=progressive&q=70`}
                 />
            <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Super Market</span>
        </Link>
        <Link to={`/categories/home_deco`} onClick={scrollToTop} className='relative w-80 h-48 shadow group transition-all duration-200'>
            <span className='group-hover:flex hidden bg-black/30 absolute z-10 top-0 right-0 left-0 w-full h-full'></span>
            <img 
                className='h-full w-full object-cover'  
                alt="smart phone"
                src={`https://hips.hearstapps.com/hmg-prod/images/harder-jett-008-1643379018.jpg?crop=1xw:1xh;center,top&resize=980:*`}
                 />
            <span className='absolute z-10 top-1/2 right-0 left-0 text-2xl text-white font-bold'>Home-Decoration</span>
        </Link>
    </div>
  )
}
