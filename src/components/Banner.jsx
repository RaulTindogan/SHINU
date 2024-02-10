import React from 'react'

function Banner() {
  return (
    <section className="
        h-[90vh]
        lg:h-screen
        bg-[url('/assets/banner-bg.png')] bg-cover bg-black/60 bg-blend-overlay
        flex flex-col items-center justify-center
        px-[20px]
        lg:px-[50px]
      ">
          <h1 className="text-[1.8rem] text-center md:text-[3rem] font-bold text-white my-10">Discover The Latest Trend In Fashion</h1>
          <a href="/" className="bg-[#FFB800] text-black font-bold py-[15px] px-[30px] text-[1.5rem] rounded">Shop Now</a>   
    </section>
  )
}

export default Banner