import { useContext, useEffect, useState } from "react"
import { ItemContext } from "../contexts/ItemContext"
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'


export const CategoryMenu = () => {
    const [isActive, setIsActive] = useState(false)
    const {items} = useContext(ItemContext)
    const [phone, setPhone] = useState(false)
    const [laptop, setLaptop] = useState(false)
    const [fragrance, setFragrance] = useState(false)
    const [skincare, setSkincare] = useState(false)
    const [grocery, setGrocery] = useState(false)
    const [homeDeco, setHomedeco] = useState(false)
    const [category, setCategory] = useState(false)

    useEffect( () => {
        window.addEventListener('scroll', () => {
            window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
        });
    })

  return (
    <div className={`${isActive? 'fixe top-10 w-80' : 'bg-white '} w-96 bg-white shadow`}>
        <h1 className='sticky top-20 bg-white flex justify-between items-center p-2 font-bold border-b transition-all' onClick={()=> setCategory(!category)}>
            <span className={`${category && 'text-green'} text-lg `}>All Categories</span> 
            {
                category? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>
            }
        </h1>
        {
            category && (
            <div className="mt-5 text-green-focus sticky top-32 bg-white">
                <div className="py-3 px-4 transition-all cursor-pointer" >
                    <h1 className='flex justify-between items-center p-2 font-bold' onClick={()=> setPhone(!phone)}>
                        <span className={`${phone && 'text-green'}`}>Smart Phones</span> 
                        {
                            phone? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>
                        }
                    </h1>
                    {
                        phone && (
                            <div className="px-4">
                                <p className="py-1 hover:text-green">Apple</p>
                                <p className="py-1 hover:text-green">Samsung</p>
                                <p className="py-1 hover:text-green">Oppo</p>
                                <p className="py-1 hover:text-green">Huawei</p>
                                <p className="py-1 hover:text-green">Infinx</p>
                            </div>
                        )
                    }
                </div>
                <div className="py-3 px-4 transition-all cursor-pointer" >
                    <h1 className='flex justify-between items-center p-2 font-bold' onClick={()=> setLaptop(!laptop)}>
                        <span className={`${laptop && 'text-green'}`}>Laptops</span> 
                        {
                            laptop? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>
                        }
                    </h1>
                    {
                        laptop && (
                            <div className="px-4">
                                <p className="py-1 hover:text-green">Apple</p>
                                <p className="py-1 hover:text-green">Samsung</p>
                                <p className="py-1 hover:text-green">Oppo</p>
                                <p className="py-1 hover:text-green">Huawei</p>
                                <p className="py-1 hover:text-green">Infinx</p>
                            </div>
                        )
                    }
                </div>
                <div className="py-3 px-4 transition-all cursor-pointer" >
                    <h1 className='flex justify-between items-center p-2 font-bold' onClick={()=> setFragrance(!fragrance)}>
                        <span className={`${fragrance && 'text-green'}`}>Fragrances</span> 
                        {
                            fragrance? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>
                        }
                    </h1>
                    {
                        fragrance && (
                            <div className="px-4">
                                <p className="py-1 hover:text-green">Lord - Al-Rehab</p>
                                <p className="py-1 hover:text-green">Al Munakh</p>
                                <p className="py-1 hover:text-green">Al Munakh</p>
                                <p className="py-1 hover:text-green">Royal_Mirage</p>
                                <p className="py-1 hover:text-green">Impression of Acqua Di Gio</p>
                            </div>
                        )
                    }
                </div>
                <div className="py-3 px-4 transition-all cursor-pointer" >
                    <h1 className='flex justify-between items-center p-2 font-bold' onClick={()=> setSkincare(!skincare)}>
                        <span className={`${skincare && 'text-green'}`}>Skincare</span> 
                        {
                            skincare? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>
                        }
                    </h1>
                    {
                        skincare && (
                            <div className="px-4">
                                <p className="py-1 hover:text-green">L'Oreal Paris</p>
                                <p className="py-1 hover:text-green">Hemani Tea</p>
                                <p className="py-1 hover:text-green">Dermive</p>
                                <p className="py-1 hover:text-green">ROREC White Rice</p>
                                <p className="py-1 hover:text-green">Fair & Clear</p>
                            </div>
                        )
                    }
                </div>
                <div className="py-3 px-4 transition-all cursor-pointer" >
                    <h1 className='flex justify-between items-center p-2 font-bold' onClick={()=> setGrocery(!grocery)}>
                        <span className={`${grocery && 'text-green'}`}>Groceries</span> 
                        {
                            grocery? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>
                        }
                    </h1>
                    {
                        grocery && (
                            <div className="px-4">
                                <p className="py-1 hover:text-green">Saaf & Khaas</p>
                                <p className="py-1 hover:text-green">Bake Parlor Big</p>
                                <p className="py-1 hover:text-green">Baking Food Items</p>
                                <p className="py-1 hover:text-green">fauji</p>
                                <p className="py-1 hover:text-green">Dry Rose</p>
                            </div>
                        )
                    }
                </div>
                <div className="py-3 px-4 transition-all cursor-pointer" >
                    <h1 className='flex justify-between items-center p-2 font-bold' onClick={()=> setHomedeco(!homeDeco)}>
                        <span className={`${homeDeco && 'text-green'}`}>Home-decoration</span> 
                        {
                            homeDeco? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>
                        }
                    </h1>
                    {
                        homeDeco && (
                            <div className="px-4 text-green-focus">
                                <p className="py-1 hover:text-green">Boho Decor</p>
                                <p className="py-1 hover:text-green">Flying Wooden</p>
                                <p className="py-1 hover:text-green">LED Lights</p>
                                <p className="py-1 hover:text-green">Golden</p>
                                <p className="py-1 hover:text-green">luxury palace</p>
                            </div>
                        )
                    }
                </div>
            </div>
            )
        }
    </div>
  )
}
