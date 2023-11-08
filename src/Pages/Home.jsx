import React, { useContext} from 'react'
import { ItemContext } from '../contexts/ItemContext'
import Shopping from '../assets/images/Shopping.png'
import { Product } from '../Components/Product'
import {BsEmojiSunglasses} from 'react-icons/bs'
import { SidepriceTag } from '../Components/SidepriceTag'
import { FaShopify } from 'react-icons/fa'
import {TbFaceIdError} from 'react-icons/tb'


 export const Home = () => {
    const {items, searchItem} = useContext(ItemContext)

    const SearchResult = items.filter((product) => {
        if(searchItem == "" || product.title.toLowerCase().includes(searchItem.toLowerCase())){
            return product
        }
    })

    if(!SearchResult.length) {
        return ( 
            <div className='text-center py-10  text-stone-600 font-bold text-2xl max-h-screen flex justify-center items-center '>
                <span className='flex items-center'>
                    <TbFaceIdError size={40} className='mx-1 text-[#781d75] '/>
                    No Match Found!
                </span>
            </div>
        )
    }

  return (
    <div className='min-h-screen'>
        {
            (searchItem == '') &&
                <div>
                    <div id='hero' className='group relative  max-h-screen bg-violet-300/20 flex items-center md:justify-betwee justify-around '>
                        <div className='min-h-full flex md:justify-start justify-end items-center relative p-5 blur-[1px md:blur-non '>
                            <img src={Shopping} alt="" className=' object-cover object-center lg:rounded-full lg:w-[32rem] w-[22rem] lg:h-[32rem] h-[22rem] border-[#781d75]/30 lg:border-2 -scale-x-100 '/>
                        </div>
                        <div className="items-center justify-center h-80 sm:relative absolute left-0 right-0 mx-5 duration-500 transition-all">
                            <div className='bg-stone-2 rounded flex flex-col justify-center p-2 relative drop-shadow border-[#781d75] bg-violet-500/10 sm:bg-black/0 h-full'>
                                <p className=' text-[#752d42] text-4xl flex flex-wrap items-center'>
                                    <span id='welcome' className='text-stone-20 sm:text-[#781d75 font-bold bg-gradient-to-r bg-clip-text text-transparent to-[#781d75] from-[#EC094D] to[#fb923c] flex items-center'>Welcome <span className='text-orange-400 pl-2'>there!</span></span> 
                                    {/* <BsEmojiSunglasses className='text-stone-700 ml-1'/> */}
                                </p>
                                <h2 className='p-2 py-5 bg-gradient-to-r bg-clip-text sm:text-transparent from-[#781d75] to-[#EC094D] text-xl text-white '>Get your order delivered at your doorsteps all day everyday</h2>
                                <button className='py-4 font-bold text-stone-100 text-xl flex'>
                                    <a href='#products' className='bg-[#781d75] rounded p-2 hover:opacity-80 cursor-pointer transition-all flex items-center'>
                                        Shop now
                                        <FaShopify className='mx-1' size={30}/>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='text-center flex justify-center items-center h-20'>
                        <p className='flex capitalize items-center sm:text-3xl text-xl bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D] '>
                            Shop Big Save BIGGER!...
                            <FaShopify size={40} className='ml-2 text-[#781d75] animate-bounce'/>
                        </p>
                    </div>
                </div>
        }
        {/* items */}
        <div id='products' className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-10 m-5 h-full'>
            {
                
                SearchResult.map((product) => {
                    return (
                        <Product key={product.id} product={product}/>
                    )
                })
            }
        </div>
        <SidepriceTag/>
    </div>
  )
}

 