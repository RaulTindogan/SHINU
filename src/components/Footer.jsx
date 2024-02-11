import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./assets/SHINU.png"
function Footer() {
  return (
    <footer className='py-[40px] px-[20px] bg-black text-white lg:px-[50px] lg:py-[50px] max-w-[1420px] mx-auto'>
        <div className='mb-[50px] lg:flex'>
            <div className='lg:w-[100%]'>
                <NavLink to="/"><img src={logo} alt="" className="w-[100px] cursor-pointer mb-10" /></NavLink>
                <div>
                    <p className='mb-5'>Shinu is a retail experience created for fans of all things Japanese lifestyle and culture. We carry exclusive officially licensed apparel, accessories, and more.</p>
                    <p>Shinu is a retail experience created for fans of all things Japanese lifestyle and culture. We carry exclusive officially licensed apparel, accessories, and more.</p>
                </div>
            </div>
            <div className='lg:w-[100%] lg:pl-[20px] xl:pl-[50px]'>
                <h2 className='text-[1.5rem] font-bold mt-[50px] mb-10 lg:mt-[-5px] lg:mb-8'>Navigation Links</h2>
                <div>
                    <ul>
                        <NavLink to="/"><li className='font-bold mb-5'>HOME</li></NavLink>
                        <NavLink to="/shop"><li className='font-bold mb-5'>SHOP</li></NavLink>
                        <NavLink to="/contact"><li className='font-bold mb-5'>CONTACT US</li></NavLink>
                        <NavLink to="/about"><li className='font-bold mb-5'>ABOUT US</li></NavLink>
                        <NavLink to="/login"><li className='font-bold mb-5'>LOG IN</li></NavLink>
                        <NavLink to="/register"><li className='font-bold mb-5'>REGISTER</li></NavLink>
                    </ul>
                </div>
            </div>
            <div className='lg:w-[100%]'>
                <h2 className='text-[1.5rem] font-bold mt-[50px] mb-10 lg:mt-[-5px] lg:mb-8'>Helpful Links</h2>
                <div>
                    <ul>
                        <li className='font-bold mb-5 cursor-pointer'>FAQ's</li>
                        <li className='font-bold mb-5 cursor-pointer'>Order Tracking</li>
                        <li className='font-bold mb-5 cursor-pointer'>Terms & Condition</li>
                        <li className='font-bold mb-5 cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className='lg:w-[100%]'>
                <h2 className='text-[1.5rem] font-bold mt-[50px] mb-10 lg:mt-[-5px] lg:mb-8'>Join Our Newsletter</h2>
                <div>
                    <p className='font-bold mb-5 max-w-[321px]'>Get E-mail updates about our latest shop and special offers.</p>
                    <form action="#" className='w-full flex h-[40px]'>
                        <input type="email" name="email" id="email" placeholder='example@email.com' className='text-black py-[5px] px-[10px] w-[80%] outline-none' />
                        <button type="submit" className='flex justify-center items-center w-[20%] bg-[#FFB800]'><img src="./assets/Plain.png" alt="" className='w-[30px]'/></button>
                    </form>             
                </div>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between lg:bg-[#FFF8F8]'>
            <p className='mb-5 lg:mb-0 lg:text-black lg:ml-5'>©Copyright <span className='font-bold'>SHINU</span> 2023</p>
            <div className='bg-[#FFF8F8] lg:w-[50%]'>
                <ul className='flex flex-wrap justify-evenly items-center'>
                    <li className="cursor-pointer w-[17%]">
                        <img src="./assets/Paypal-Logo.png" alt="" />
                    </li>
                    <li className="cursor-pointer w-[17%]">
                        <img src="./assets/American-Express.png" alt="" />
                    </li>
                    <li className="cursor-pointer w-[17%]">
                        <img src="./assets/Amazon-Logo.png" alt="" />
                    </li>
                    <li className="cursor-pointer w-[17%]">
                        <img src="./assets/Visa_Logo.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer