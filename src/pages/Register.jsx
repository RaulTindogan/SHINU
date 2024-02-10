import React from 'react'
import { NavLink } from 'react-router-dom'
function Register() {
  return (
    <main className="max-w-[1420px] mx-auto h-auto">
      <section className="
          py-10 px-[20px] md:px-[50px] min-h-[100vh]
          bg-black/60
          bg-[url('/assets/tailoring-shop.jpg')]
          bg-cover
          bg-no-repeat
          bg-center
          bg-blend-overlay
          flex justify-center items-center
          flex-wrap
        ">
        <div className='text-white w-[280px] bg-black/80 border border-white/90 px-5 py-10 rounded-[10px] mt-[60px] lg:w-[350px] lg:px-10 lg:mt-[5rem]'>
          <h1 className='font-bold text-[2rem] mb-5'>REGISTER</h1>
          <form className='flex flex-col gap-4 mb-7'>
            <div className='flex flex-col gap-2 text-[14px] text-black mb-2 lg:gap-3'>
              <input type="text" name="fullName" id="fullName" placeholder='ENTER FULL NAME' className="py-[5px] px-[10px]"/>
              <input type="email" name="email" id="email" placeholder='ENTER EMAIL ADDRESS' className="py-[5px] px-[10px]"/>
              <input type="tel" name="telephone" id="telephone" placeholder='ENTER CONTACT NUMBER' className="py-[5px] px-[10px]"/>
              <input type="password" name="password" id="password" placeholder='ENTER PASSWORD' className="py-[5px] px-[10px]"/>
              <input type="password" name="re-password" id="re-password" placeholder='RE-ENTER PASSWORD' className="py-[5px] px-[10px]"/>
            </div>
            <hr />
            <input className='w-full py-1 bg-[#FFB800] rounded cursor-pointer text-black font-bold mt-5' type="submit" value="LOG IN" onClick={(e)=>{e.preventDefault()}}/>
          </form>
          <p className='text-[14px]'>Already have an account? <NavLink to='/login' className='text-[#FFB800] font-bold'>Log in here</NavLink></p>  
        </div>
      </section>
    </main>
  )
}

export default Register