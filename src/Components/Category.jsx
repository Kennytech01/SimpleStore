import { useContext, useEffect, useState } from "react"
import { ItemContext } from "../contexts/ItemContext"


export const Category = () => {
    const [isActive, setIsActive] = useState(false)
    const {items} = useContext(ItemContext)

    useEffect( () => {
        window.addEventListener('scroll', () => {
            window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
        });
    })

  return (
    <div className={`${isActive? 'fixe top-10 w-80' : 'bg-white '} w-96 h-80 bg-white shadow`}>
        <h1 className='border-b text-xl p-2 text-green-focus font-bold'>Categories</h1>
        <div className="mt-5 text-green-focus">
            <p className="py-3 px-8">
                <input type="checkbox" name="" id="" />
                <span className="px-1">Smart Phones</span>
            </p>
            <p className="py-3 px-8">
                <input type="checkbox" name="" id="" />
                <span className="px-1">Laptops</span>
            </p>
            <p className="py-3 px-8">
                <input type="checkbox" name="" id="" />
                <span className="px-1">Fragrance</span>
            </p>
            <p className="py-3 px-8">
                <input type="checkbox" name="" id="" />
                <span className="px-1">Skin Care</span>
            </p>
            <p className="py-3 px-8">
                <input type="checkbox" name="" id="" />
                <span className="px-1">Groceries</span>
            </p>

        </div>
    </div>
  )
}
