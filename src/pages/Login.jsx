import React from 'react'
import { NavLink } from "react-router-dom"
function Login() {
  return (
    <main className="max-w-[1420px] mx-auto">
      <section className="
          py-10 px-[20px] md:px-[50px] h-screen
          bg-black/60
          bg-[url('/assets/tailor-1.jpg')]
          bg-cover
          bg-no-repeat
          bg-center
          bg-blend-overlay
          flex justify-center items-center
        ">
        <div className='text-white w-[280px] bg-black/80 border border-white/90 px-5 py-10 rounded-[10px] mt-10 lg:w-[350px] lg:px-10'>
          <h1 className='font-bold text-[2rem] mb-5'>LOG IN</h1>
          <form className='flex flex-col gap-4 mb-7'>
            <div className='flex flex-col gap-2 text-[14px] text-black mb-2'>
              <input type="email" name="email" id="email" placeholder='ENTER EMAIL ADDRESS' className="py-[5px] px-[10px]"/>
              <input type="password" name="password" id="password" placeholder='ENTER PASSWORD' className="py-[5px] px-[10px]"/>
            </div>
            <div className='flex justify-between text-[14px]'>
              <label htmlFor="checkbox" className='cursor-pointer'>
                <input type="checkbox" name="checkbox" id="checkbox" className='outline-none border-none inline-block mr-1'/>
                Remember me
              </label>
              <p className='cursor-pointer' >Need help?</p>
            </div>
            <input className='w-full py-1 bg-[#FFB800] rounded cursor-pointer text-black font-bold' type="submit" value="LOG IN" onClick={(e)=>{e.preventDefault()}}/>
          </form>
          <p className='text-[14px]'>New to SHINU? <NavLink to='/register' className='text-[#FFB800] font-bold'>Register Now</NavLink></p>  
        </div>
      </section>
    </main>
  )
}

export default Login