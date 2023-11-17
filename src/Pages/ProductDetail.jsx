import React, {useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import {IoArrowUndoOutline, IoStarSharp} from 'react-icons/io5'
import { CartContext } from '../contexts/CartContext'
import { ItemContext } from '../contexts/ItemContext'
import { BsCartPlus } from "react-icons/bs";

export const ProductDetail = () => {
    const {id} = useParams()
    const {addToCart} = useContext(CartContext)
    const {items} = useContext(ItemContext)

    const product = items.find((item)=> item.id === parseInt(id))
    // console.log(product)

    if(!product){
        return (
            <section className='font-bold text-xl text-center'>
                loading...
            </section>
        )
    }

    // const container = document.getElementById("container");
    // const img = document.querySelector("img");

    // container.addEventListener("mousemove", onZoom);
    // container.addEventListener("mouseover", onZoom);
    // container.addEventListener("mouseleave", offZoom);
    
    // const onZoom = (e) => {
    //     const x = e.clientX - e.target.offsetLeft;
    //     const y = e.clientY - e.target.offsetTop;
    //     img.style.transformOrigin = `${x}px ${y}px`;
    //     img.style.transform = "scale(2.5)";
    // }
    // const offZoom = (e) => {
    //     img.style.transformOrigin = `center center`;
    //     img.style.transform = "scale(1)";
    // }

    const {title, thumbnail, description, price,stock,rating, brand, category} = product  

  return (
    <div className='transition-all mt-10'>
        <div className='grid md:grid-cols-2 grid-cols-1 rounded lg:mx-20 md:mx-14 mx-5'>
            <div id='container' className='flex items-center justify-center overflow-hidden h-96'>
                <img src={thumbnail} alt=""  className='img w-full h-full object-contain rounded-lg hover:scale-110 transition-all duration-500 cursor-grab' />
            </div>
            <div className=' px-3  h-96 flex flex-col justify-center items-center'>
                <p className='font-bold  py-5 px-3 self-start flex  items-center justify-between w-full'>
                    <span className='md:text-4xl text-xl text-green-focus'>{title}</span>
                    <span className='flex items-center'>
                        <IoStarSharp className='mx-1 text-green'/> 
                        {rating}
                    </span>
                </p>
                <p className='text-gray-dark px-3'>
                    <span className='pr-2 font-bold'>Description:</span>
                    {description}
                </p>
                <p className='flex justify-between items-center p-5 w-full font-bold'>
                    <span className=' text-3xl text-green'>${price.toLocaleString()}</span>
                    <span className=' text-green-focus '>Quantity: <span className='text-green'>{stock}</span></span>
                </p>
                <p onClick={()=> addToCart(product, product.id)} className='flex justify-center items-center p-3 bg-green-focus rounded shadow-lg hover:opacity-80 transition-all w-full'>
                    <button className='uppercase button p-2 text-white font-bold flex items-center'>
                        <BsCartPlus className='mx-1'/>
                        add to cart
                    </button>
                </p>
                <p className='flex justify-between items-center p-2 w-full'>
                    <span className='font-bold text-green '>
                        <span className='text-green-focus'>Brand: </span>
                        <span className='hover:underline'>{brand}</span>
                    </span>
                    <span className='font-bold text-green capitalize '>
                        <span className='text-green-focus'>category: </span> 
                        <span className='hover:underline'>{category}</span>
                    </span>
                </p>
            </div>
            <Link to={`/`}>
                <button className=' capitalize flex items-center text-green-focus rounded-full p-2 mx-3 underline hover:opacity-90 transition-all'>
                    continue shopping 
                    <IoArrowUndoOutline className='m-1'/>
                </button>
            </Link>
        </div>
    </div>
  )
}
