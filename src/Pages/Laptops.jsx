import React, { useContext } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import { CartContext } from '../contexts/CartContext'
import {LiaPlusSolid} from 'react-icons/lia'
import { Link } from 'react-router-dom'
import {BsSuitHeart, BsFillSuitHeartFill} from 'react-icons/bs'

export const Laptops = () => {
  const {items} = useContext(ItemContext)
  const {addToCart, likebtn, setLikebtn} = useContext(CartContext)


    const scrollToTop = () => {
      window.scrollTo(0,0)
    }

  return (
    <div className='w-full transition-all'>
      <h1 className='text-green-focus border-b font-bold text-xl p-2 sticky top-20 z-10 mx-2 bg-white'>Laptops</h1>
      <div className='grid grid-cols-4 gap-4 mx-2 mt-2'>
        {
          items.filter((item) => item.category == 'laptops').map((item) => {
            return (
              <div  className='rounded h-96 flex flex-col justify-between sm:p-4 p-1 bg-white shadow'>
                <div className='h-4/5 flex group flex-col justify-center'>
                    <span onClick={()=> setLikebtn(!likebtn)} className='flex text-sm justify-end font-bold text-[#fb923c] m-5 transition-all'>
                        {
                            likebtn?
                            <a data-tooltip-id='my-tooltip' data-tooltip-content='added to saved items'>
                                <BsFillSuitHeartFill size={20} />
                            </a>
                            :
                            <a data-tooltip-id='my-tooltip' data-tooltip-content='click to save item'>
                                <BsSuitHeart size={20}/>
                            </a>
                        }
                    </span>
                    <Link onClick={scrollToTop} to={`/productdetail/${item,item.id}`} className='h-1/2 flex justify-center items-center overflow-hidden'>
                        <img src={item.thumbnail} alt="" className='h-full object-top hover:scale-110 transition-all rounded duration-500 cursor-zoom-in'/>
                    </Link>
                    <p className='flex flex-wrap items-center justify-between text-green-focus line-clamp-3 p-1'>
                        <span className='font-bold '>{item.title}</span>
                        <a data-tooltip-content={`percentage off`} data-tooltip-id='my-tooltip' >-{item.discountPercentage}%</a>
                    </p>
                    <p className='flex flex-wrap justify-between items-center p-2'>
                        <p className='text-green font-bold text-lg p-1 rounded'>${item.price.toLocaleString()}</p>
                        <p className='flex transition-all font-semibold'>
                            Quantity: <span className='text-green px-1'>{item.stock}</span>
                        </p>
                    </p>
                </div>
                <div className='h-1/2 flex justify-center items-center'>
                    <div 
                        onClick={()=> addToCart(item, item.id)} 
                        className='cursor-pointer w-full flex items-center justify-between h-10 m-3 mx-4 shadow rounded hover:bg-green text-green-focus transition-all '>
                        <input type="button" value="Add To Cart" className=' w-full h-full font-bold' />
                        <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
                    </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='mt-10'>
        <h1 className='text-green-focus border-b font-bold text-xl p-2 sticky top-20 bg-white mx-2 z-10'>You may also like</h1>
        <div className='grid grid-cols-4 gap-4 mx-2 mt-2'>
          {
            items.filter((item) => item.category == 'smartphones').map((item) => {
              return (
                <div  className='rounded h-96 flex flex-col justify-between sm:p-4 p-1 bg-white shadow'>
                  <div className='h-4/5 flex group flex-col justify-center'>
                      <span onClick={()=> setLikebtn(!likebtn)} className='flex text-sm justify-end font-bold text-[#fb923c] m-5 transition-all'>
                          {
                              likebtn?
                              <a data-tooltip-id='my-tooltip' data-tooltip-content='added to saved items'>
                                  <BsFillSuitHeartFill size={20} />
                              </a>
                              :
                              <a data-tooltip-id='my-tooltip' data-tooltip-content='click to save item'>
                                  <BsSuitHeart size={20}/>
                              </a>
                          }
                      </span>
                      <Link onClick={scrollToTop} to={`/productdetail/${item,item.id}`} className='h-1/2 flex justify-center items-center overflow-hidden'>
                          <img src={item.thumbnail} alt="" className='h-full object-top hover:scale-110 transition-all rounded duration-500 cursor-zoom-in'/>
                      </Link>
                      <p className='flex flex-wrap items-center justify-between text-green-focus line-clamp-3 p-1'>
                          <span className='font-bold '>{item.title}</span>
                          <a data-tooltip-content={`percentage off`} data-tooltip-id='my-tooltip' >-{item.discountPercentage}%</a>
                      </p>
                      <p className='flex flex-wrap justify-between items-center p-2'>
                          <p className='text-green font-bold text-lg p-1 rounded'>${item.price.toLocaleString()}</p>
                          <p className='flex transition-all font-semibold'>
                              Quantity: <span className='text-green px-1'>{item.stock}</span>
                          </p>
                      </p>
                  </div>
                  <div className='h-1/2 flex justify-center items-center'>
                      <div 
                          onClick={()=> addToCart(item, item.id)} 
                          className='cursor-pointer w-full flex items-center justify-between h-10 m-3 mx-4 shadow rounded hover:bg-green text-green-focus transition-all '>
                          <input type="button" value="Add To Cart" className=' w-full h-full font-bold' />
                          <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
                      </div>
                  </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
