import React, { useContext} from 'react'
import { ItemContext } from '../contexts/ItemContext'
import Shopping from '../assets/images/Shopping.png'
import { TypeAnimation } from 'react-type-animation'
import { Product } from '../Components/Product'

 export const Home = () => {
    const {items} = useContext(ItemContext)
    
  return (
    <div className=''> 
        <div className=' md:h-[100vh] h-[70vh] group relative mt-[5rem]'>
            <div className='min-h-full flex md:justify-start justify-end items-center relative md:p-10 pt-20 p-5'>
                <div className='bg-black/20 h-full w-full absolute top-0 right-0 left-0 '></div>
                <img src={Shopping} alt="" className=' object-cover object-center md:rounded-full p-1 lg:w-[32rem] w-[22rem] lg:h-[32rem] h-[22rem] border-[#781d75]/30 md:border-2 md:-scale-x-100 scale-x-100' style={{transform : `saleX(-1)`}}/>
            </div>
            <div className="items-center justify-center min-h-full ">
                <div className='bg-stone-2 rounded flex flex-col justify-center h-full mx-4 absolute top-0 lg:left-1/2 md:left-1/4 sm:left-10 left-2 duration-500 transition-all z-10'>
                    <p className='font-bold text-[#752d42] text-sm'>-TREND</p>
                    <h1 className="flex flex-wrap py-5 sm:text-4xl text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]">
                        SimpleStore sale
                        <TypeAnimation 
                            sequence={[
                                'Smart Phones',
                                3000,
                                'Quality Laptops',
                                3000,
                                'Groeries',
                                3000,
                                'Skincare',
                                3000,
                                'Fragrance',
                                3000,
                                'Groeries',
                                3000,
                            ]}
                            wrapper="div"
                            speed={30}
                            repeat={Infinity}
                            className='ml-1 px-2 bg-[#781d75]/20 text-stone-100 font-mono'
                        /> 
                    </h1>
                    <h2 className='p-2 text-[#752d42]'>Get your order delivered at your doorsteps all day everyday</h2>
                    <span className='group-hover:cursor-pointer flex items-center decoration-4 relative underline-offset-4 duration-500 transition-all py-4 font-bold text-stone-100 text-xl'>
                        Discover More 
                        <span className={`absolute md:h-3/4 h-2/3 -left-2 w-10 transition-all group-hover:w-40  bg-[#781d75] -z-10 shadow-lg rounded duration-700 `}></span>
                    </span>
                </div>
            </div>
        </div>
        <div className='text-center flex justify-center items-center h-20'>
            <p className='capitalize sm:text-3xl text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D] '>pick what you want!</p>
        </div>
        {/* items */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-10 m-5'>
            {
                items.map((product) => {
                    return (
                        <Product key={product.id} product={product}/>
                    )
                })
            }
        </div>
    </div>
  )
}

 