import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "/assets/SHINU.png"
import { useState } from "react"
import { NavLink } from "react-router-dom"

function Header() {

  const [navActive, setnavActive] = useState(false)
  const [userActive, setuserActive] = useState(false)

  function hoverUser() {
    setuserActive(!userActive)
  }

  function clickBurger() {
    setnavActive(!navActive)
  }
  return (
    <header className="flex flex-col justify-center items-center">
      <nav className="bg-[#000000d7] flex flex-col justify-center w-[100%] max-w-[1420px] fixed top-0 drop-shadow z-10">
        <div className="hidden text-white lg:flex justify-between items-center px-[50px] w-full py-[25px] relative">
          <div>
            <NavLink to="/"><img src={logo} alt="" className="w-[100px] cursor-pointer" /></NavLink>
          </div>
          <div>
            <ul className="flex justify-evenly">
              <NavLink to="/"><li className="px-[20px] py-[10px] text-[14px] font-bold">HOME</li></NavLink> 
              <NavLink to="/shop"><li className="px-[20px] py-[10px] text-[14px] font-bold">SHOP</li></NavLink> 
              <NavLink to="/contact"><li className="px-[20px] py-[10px] text-[14px] font-bold">CONTACT US</li></NavLink>
              <NavLink to="/about"><li className="px-[20px] py-[10px] text-[14px] font-bold">ABOUT US</li></NavLink>
            </ul>
          </div>
          <div className="flex items-center">
            <input type="text" placeholder="Search for outfit" className="bg-transparent border border-white py-[5px] pl-[20px] rounded-[30px] mr-5"/>
            <div className='relative'>
              <FontAwesomeIcon icon="fa-solid fa-user" className="text-[1.5rem] mr-5 cursor-pointer user"/>
              <NavLink to="/cart"><FontAwesomeIcon icon="fa-solid fa-bag-shopping" className="text-[1.5rem]" /></NavLink>
              <div className={`bg-white text-black font-bold flex flex-col absolute w-[150px] top-[59px] left-[-50px] overflow-hidden account`}>
                <NavLink to="/login" onClick={hoverUser}><p className='pl-3 py-2'>Login</p></NavLink>
                <NavLink to="/register" onClick={hoverUser}><p className='pl-3 py-2 pb-2'>Register</p></NavLink>
              </div>
            </div>
          </div>         
        </div>     
        <div className="flex justify-between items-center py-[20px] px-[20px] w-full lg:hidden">
          <img src={logo} alt="" className="w-[100px] cursor-pointer" />
          {/* {navActive? <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-white text-[25px] cursor-pointer" onClick={clickBurger} /> : <FontAwesomeIcon icon="fa-solid fa-bars" className="text-white text-[25px] cursor-pointer" onClick={clickBurger} />} */}
           <FontAwesomeIcon icon={"fa-solid" + (navActive? " fa-xmark": " fa-bars")} className="text-white text-[25px] cursor-pointer" onClick={clickBurger} />   
        </div>
        <div className = {`bg-black text-white  overflow-hidden slideDown ${navActive ? " h-[100vh] border-t-[1px] border-white/50" : " h-0"}`}>
          <ul className="flex flex-col justify-evenly">
              <NavLink to="/"><li className="px-[20px] py-[15px] text-[14px] font-bold border-b-[1px] border-white/50" onClick={clickBurger}>HOME</li></NavLink> 
              <NavLink to="/shop"><li className="px-[20px] py-[15px] text-[14px] font-bold border-b-[1px] border-white/50" onClick={clickBurger}>SHOP</li></NavLink> 
              <NavLink to="/contact"><li className="px-[20px] py-[15px] text-[14px] font-bold border-b-[1px] border-white/50" onClick={clickBurger}>CONTACT US</li></NavLink>
              <NavLink to="/about"><li className="px-[20px] py-[15px] text-[14px] font-bold border-b-[1px] border-white/50" onClick={clickBurger}>ABOUT US</li></NavLink>
              <li className="text-[1.5rem] mr-5 px-[20px] py-[10px] cursor-pointer" onClick={hoverUser}>{userActive?<FontAwesomeIcon icon="fa-solid fa-user-minus" />:  <FontAwesomeIcon icon="fa-solid fa-user-plus" />}</li>
              <div className={`pl-7 overflow-hidden slideDown ${userActive ? 'h-[102px]' : 'h-0'}`}>
                <NavLink to="/login"><li className='px-[20px] py-[15px] text-[14px] font-bold' onClick={clickBurger}>Login</li></NavLink>
                <NavLink to="/register"><li className='px-[20px] py-[15px] text-[14px] font-bold' onClick={clickBurger}>Register</li></NavLink>
              </div>
              <NavLink to="/cart"><li className="px-[20px] py-[10px] text-[1.5rem]" onClick={clickBurger}><FontAwesomeIcon icon="fa-solid fa-bag-shopping" /></li></NavLink>
            </ul>
        </div>
      </nav>  
    </header>      
  )
}

export default Header 


