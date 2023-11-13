import React, {useState} from 'react'
import { Link, Navigate, useNavigate} from 'react-router-dom'
import {MdKeyboardDoubleArrowLeft} from 'react-icons/md'
import { UserAuth } from '../contexts/AuthContext'

export const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signIn, user} = UserAuth()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signIn (email, password)
            user ? 
            <Navigate to={'/'}/> 
            : 
            <Navigate to={'/signup'}/>  
            // navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }
    
  return (
    <div className='flex items-center justify-center'>
        <div className='md:w-1/3 sm:w-2/3 w-[90%] mx-1/2'>
            <Link to= '/' className='flex justify-center items-center m-3 group'>
                <button 
                    className='p-3 border bg-white flex items-center justify-center font-semibold rounded-full group-hover:scale-110 ease-out duration-500'>
                    <MdKeyboardDoubleArrowLeft size={30}/>
                </button>
            </Link>
            <div className='bg-white rounded-xl w-full text-center shadow-xl border'>
                <div className='m-5 relative'>
                    <p className=' font-bold text-3xl bg-gradient-to-r bg-clip-text text-transparent from-[#781d75] via-[#fb923c] to-[#EC094D] text-center'>SimpleStore</p>
                </div>
                <h1 className='font-bold text-xl p-5 text-stone-800'>Welcome!</h1>
                <h4 className='sign text-lg p-2 text-center '>Sign in into your account for full access</h4>
                <div className='mx-5'>
                    <form onSubmit={handleSubmit} >
                        <div className='p-2'>
                            <input 
                                type="email" 
                                id="email" 
                                className='w-full border p-3 rounded-full outline-none' 
                                placeholder='example@gmail.com'
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className='p-2'>
                            <input 
                                type="password"  
                                id="password" 
                                className='w-full border p-3 px-3 rounded-full outline-none' 
                                placeholder='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='p-3 flex justify-center  '>
                            <button 
                                type="submit" 
                                value='submit' 
                                className='submit w-full p-3 font-semibold rounded-full hover:scale-95 transition-all ease-out duration-500 bg-[#781d75] text-stone-100 '
                                >
                                    SIGNIN
                            </button>
                        </div>
                    </form>
                </div>
                <p className='p-5'>
                    Already have an account? <Link to='/signup' className='hover:underline text-[#781d75] font-bold'>signUp</Link>
                </p>
            </div>
        </div>
    </div>
  )
}
