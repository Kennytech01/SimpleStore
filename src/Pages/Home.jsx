import React, { useContext} from 'react'
import { ItemContext } from '../contexts/ItemContext'
import Shopping from '../assets/images/Shopping.jpg'
import {LiaPlusSolid} from 'react-icons/lia'
import {FaTimes} from 'react-icons/fa'
import { SidepriceTag } from '../Components/SidepriceTag'



 export const Home = () => {
    const {items, popUP, toggle, handleClick} = useContext(ItemContext)
    // console.log(popUP)
  return (
    <div className=''> 
        <div className='h-[90vh] group'>
            {/* <div className='bg-black/30 z-10 h-full absolute top-0 left-0 right-0 hidden group-hover:flex duration-500'></div> */}
            <img src={Shopping} alt="" className='h-full w-full object-cover'/>
            <div className='absolute -z-10 top-2 -left-[35rem] items-start justify-start h-1/2 group-hover:left-10 duration-500 transition-all '>
                <div className='bg-stone-2 rounded h-full flex flex-col justify-center'>
                    <p className='font-bold text-[#752d42] text-sm'>-TREND</p>
                    <h1 className='text-4xl  font-bold p-3 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D] underline'>SimpleStore sale stylish womens</h1>
                    <span className='flex items-center hover:underline decoration-[#781d75] decoration-4 underline-offset-4 duration-500 transition-all py-4 font-bold text-stone-600 text-xl'>
                        Discover More 
                    </span>
                </div>
            </div>
            <div></div>
        </div>
        <div className='text-center pt-10'>
            <p className='capitalize text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D] '>pick what you want!</p>
        </div>
        {/* items    */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
            {
                items.map((product) => {
                    return (
                    <div key={product.id} onClick={()=>handleClick(product)} className='rounded h-96 flex flex-col justify-between p-4 bg-white shadow '>
                        <div className='h-1/2 flex justify-center items-center hover:scale-110 duration-500 transition-all'>
                            <img src={product?.image} alt="" className='h-full w-ful object-top'/>
                        </div>
                        <div>
                            <p className='flex justify-between p-2'>
                                <p className='text-stone-100 font-bold bg-[#781d75] p-1 rounded'>${product?.price}</p>
                                <p className='capitalize text-stone-500 font-semibold'>{product?.category}</p>
                            </p>
                            <p className='font-bold text-[#781d75] '>{product?.title}</p>
                            <p className='w-full flex items-center justify-between h-10 my-3 bg-stone-200/40 rounded hover:bg-[#781d75] transition-all duration-500'>
                                <input type="button" value="Add" className=' w-full h-full font-bold hover:text-stone-100 text-stone-500' />
                                <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
                            </p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        {/* modal */}
        <div className=''>
            <div className=''>
                {toggle && (
                    popUP.map((pop)=>{
                        return (
                            <div className='fixed flex items-center justify-center top-0 left-0 right-0 h-screen w-full bg-black/70 z-[999]'>
                                <div className='bg-white md:w-2/3 w-4/5 md:h-2/3 relative shadow-lg  rounded'>
                                    <button onClick={()=>handleClick(pop)} className='absolute right-4 top-4 text-xl font-bold '><FaTimes/></button>
                                    <div className='p-2 md:p-5 h-full flex md:flex-row flex-col justify-center items-center' >
                                        <div className='justify-center bg-white w-1/2 md:h-2/3 flex items-center'>
                                            <img src={pop?.image} alt="" className=' object-center object-contain h-full w-full p-3' />
                                        </div>
                                        <div className='md:w-2/3 md:flex  items-center p-2'>
                                            <div>
                                                <p className='md:text-2xl text-xl font-bold p-3 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>{pop.title}</p>
                                                <p className='line-clamp-3 md:line-clamp-none '><span className='font-bold text-lg  '>Details: </span>{pop?.description}</p>
                                                <p className='flex justify-between p-2'>
                                                    <p className='text-stone-100 font-bold bg-[#781d75] p-1 rounded'>${pop?.price}</p>
                                                    <p className='capitalize text-stone-500 font-semibold'>{pop?.category}</p>
                                                </p>
                                                <p className='w-full flex items-center justify-between h-10 my-3 bg-stone-200/40 rounded hover:bg-[#781d75] transition-all duration-500'>
                                                    <input type="button" value="Add to Shopping Cart" className=' w-full h-full font-bold hover:text-stone-100 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'/>
                                                    <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
                                                </p>   
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }))
                }
            </div>
        </div>
    </div>
  )
}

 