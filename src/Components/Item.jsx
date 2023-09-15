// import React, {useContext} from 'react'
// import {LiaPlusSolid} from 'react-icons/lia'
// import { Link } from 'react-router-dom'
// import { ItemContext } from '../contexts/ItemContext'

// export const Item = ({item}) => {
//     const {id, image, category, price, title} = item
//     const {showDetails, setShowDetails, handleClick}  = useContext(ItemContext)
//   return (
//    <div onClick={handleClick} className='rounded h-96 flex flex-col justify-between sm:p-4 p-1 bg-white shadow '>
//         <Link  to={`/item/${id}`} className='h-4/5 flex flex-col justify-center'>
//             <div className='h-1/2 flex justify-center items-center'>
//                 <img src={image} alt="" className='h-full w-ful object-top hover:scale-110 duration-500 transition-all'/>
//             </div>
//             <p className='flex justify-between items-center p-2'>
//                 <p className='text-stone-100 font-bold bg-[#781d75] p-1 rounded'>${price}</p>
//                 <p className='capitalize text-stone-500 font-semibold'>{category}</p>
//             </p>
//             <p className='font-bold text-[#781d75] line-clamp-3 p-1 bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] to-[#EC094D]'>{title}</p>
//         </Link>
//         <div className='h-1/2 flex justify-center items-center'>
//             <div onClick={() => addToCart(id)} className='w-full flex items-center justify-between h-10 my-3 bg-stone-200/40 rounded hover:bg-[#781d75] transition-all duration-500'>
//                 <input type="button" value="Add" className=' w-full h-full font-bold hover:text-stone-100 text-stone-500' />
//                 <label htmlFor="" className='bg-stone-200 p-2 rounded m-1'><LiaPlusSolid/></label>
//             </div>
//         </div>
//    </div>
//   )
// }
