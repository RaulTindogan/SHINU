import React from 'react'
import Carousel from './Carousel'

function BestSeller() {
  return (
    <section className='py-[40px] px-[20px] lg:px-[50px] lg:py-[50px]'>
        <h2 className='text-center pb-[40px] font-bold text-[2rem]'>Best Seller</h2>
        <div className='min-[600px]:flex max-w-[950px] mx-auto mb-[50px]'>
            <div className='mb-5 min-[600px]:w-[50%] min-[600px]:mb-0'>
                <img src="/assets/Women-Hoodies/Women's-Spider-Web-Zipper-Hoodie.jpg" alt="" className='w-full min-[600px]:h-[400px]' />
            </div>
            <div className='min-[600px]:w-[50%] min-[600px]:pl-[20px] min-[600px]:pt-1 md:py-2 md:px-[50px]'> 
                <h2 className='text-red-600 font-bold text-[1.2rem] mb-2 md:text-[2rem]'>SAVE 20% HURRY UP!</h2>
                <h3 className='font-bold mb-1 min-[600px]:text-[1.2rem]'>Product Name</h3>
                <p className='text-[14px] mb-2 min-[600px]:text-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta cum perferendis vero est amet reprehenderit nostrum qui dignissimos consequuntur? Quae eius impedit repellat consequuntur aut minima possimus rerum illo hic.</p>
                <p className='mb-5'><span className='line-through text-black/50'>₱300</span><span className='ml-2 text-red-600 font-bold'>₱240</span></p>
                <button className='border border-black rounded py-[10px] px-[20px] bg-[#FFB800] font-bold'>Buy Now</button>
            </div>
        </div>
        <Carousel sliderId={"slider1"}/>
    </section>
  )
}

export default BestSeller