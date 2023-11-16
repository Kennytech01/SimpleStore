import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import authPage from '../assets/images/authPage.png'
import { UserAuth } from '../contexts/AuthContext'
import { CiLock, CiMail } from "react-icons/ci";
import { toast } from 'react-toastify';

export const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signUp, user} = UserAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp (email, password)
            toast.success('signed up successfully')
            navigate('/')
        } catch (error) {
            toast.error('an error occured!')
            setError(error.message)
        }
    }

  return (
    <div className='relative'>
        <div className=' fixed top-0 h-screen right-0 left-0 -z-20'>
            <img src={authPage} alt="image" className='h-full w-full object-cover blur'/>
            <p className='bg-[#fb923c]/10 top-0 fixed right-0 left-0 h-screen z-10'></p>
        </div>
        <div className='lg:w-1/3 sm:w-2/3 w-[90%] m-auto mt-20'>
            <div className=' rounded-xl w-full text-center shadow-xl border'>
                <div className='m-5 relative'>
                    <p className=' font-bold text-3xl bg-gradient-to-tr bg-clip-text text-transparent from-[#781d75] to-[#EC094D] text-center'>SimpleStore</p>
                </div>
                <h1 className='font-bold text-xl p-3 text-cente'>Sign up!</h1>
                <h4 className='sign text-lg p-2 text-center'>Get access to members only content.</h4>
                {
                  error? <p className='text-[#e50914] my-3 '>{error}</p> : null
                }
                <div className='mx-5'>
                    <form onSubmit={handleSubmit} >
                        <div className=' my-2 px-3 relative border flex items-center rounded-full bg-white text-stone-800'>
                            <CiMail size={20}/>
                            <input 
                                type="email" 
                                id="email" 
                                className='w-full rounded-full py-3 px-1 outline-none' 
                                placeholder='User@gmail.com'
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className='p-3 my-2 relative border flex items-center rounded-full bg-white text-stone-800'>
                            <CiLock className='text-stone-600' size={20}/>
                            <input 
                                type="password"  
                                id="password" 
                                className='w-full outline-none px-1' 
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='p-3 flex justify-center  '>
                            <button 
                                type="submit" 
                                value='submit' 
                                className='submit w-full p-3 font-semibold rounded-full hover:scale-95 transition-all ease-out duration-500 bg-[#781d75] text-stone-100 '
                                >
                                    SIGNUP
                            </button>
                        </div>
                    </form>
                </div>
                <p className='p-5'>
                    Already have an account? <Link to='/signin' className='hover:underline text-[#781d75] font-bold'>signIn</Link>
                </p>
            </div>
            <Link to= '/' className='underline m-3 text-[#781d75]'>
                return home
            </Link>
        </div>
    </div>
  )
}
