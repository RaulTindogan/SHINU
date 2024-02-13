import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <section className="
        h-[90vh]
        lg:h-screen
        bg-[url('https://raw.githubusercontent.com/RaulTindogan/SHINU/master/public/assets/banner-bg.png')] bg-cover bg-black/60 bg-blend-overlay
        flex flex-col items-center justify-center
        px-[20px]
        lg:px-[50px]
      ">
          <h1 className="text-[1.8rem] text-center md:text-[3rem] font-bold text-white my-10">Discover The Latest Trend In Fashion</h1>
          <Link to={"/shop"} className="bg-[#FFB800] text-black font-bold py-[15px] px-[30px] text-[1.5rem] rounded">Shop Now</Link>   
    </section>
  )
}

export default Banner