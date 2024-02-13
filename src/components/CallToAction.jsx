import React from 'react'
import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <section className='py-[40px] px-[20px] lg:px-[50px] lg:py-[50px]'>
            <div className="
                flex 
                flex-col 
                items-center 
                justify-center 
                bg-black/60
                bg-[url('https://raw.githubusercontent.com/RaulTindogan/SHINU/master/public/assets/ctc.png')]
                bg-cover
                bg-blend-overlay
                bg-center
                py-[50px]
                h-[300px]
            " 
            >
                <h2 className='text-[1.5rem] text-white font-bold mb-5 md:text-[3rem]'>UPGRADE YOUR STYLE</h2>
                <Link to={"/shop"} className="bg-[#FFB800] text-black font-bold py-[10px] px-[20px] rounded md:text-[1.5rem] md:py-[15px] md:px-[30px]">Shop Now</Link> 
            </div>
    </section>
  )
}

export default CallToAction 