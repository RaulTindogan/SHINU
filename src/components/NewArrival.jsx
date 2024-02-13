import React from 'react'

function NewArrival() {
  return (
    <section className='py-[40px] px-[20px] lg:px-[50px] lg:py-[50px]'>
        <h2 className='text-center pb-[40px] font-bold text-[2rem]'>New Arrival</h2>
        <div className='md:flex md:gap-4'>
            <div className="
                bg-[url('https://raw.githubusercontent.com/RaulTindogan/SHINU/master/public/assets/T-shirt-1.jpg')]
                bg-cover
                bg-center
                w-full
                h-[300px]
                min-[500px]:h-[500px]
                md:h-[300px]
                mb-5
                relative
            "
            >
                <h2 className='absolute w-full bottom-0 bg-black/80 text-xl text-white font-bold py-[10px] px-[20px]'>T-shirt</h2>
            </div>
            <div className="
                bg-[url('https://raw.githubusercontent.com/RaulTindogan/SHINU/master/public/assets/Anime-shirt-1.webp')]
                bg-cover
                bg-center
                w-full
                h-[300px]
                min-[500px]:h-[500px]
                md:h-[300px]
                mb-5
                relative
            ">
                <h2 className='absolute w-full bottom-0 bg-black/80 text-xl text-white font-bold py-[10px] px-[20px]'>Anime Shirts</h2>
            </div>
            <div className="
                bg-[url('https://raw.githubusercontent.com/RaulTindogan/SHINU/master/public/assets/Accessories/Butterfly-Hair-Clip.jpg')]
                bg-cover
                bg-center
                w-full
                h-[300px]
                min-[500px]:h-[500px]
                md:h-[300px]
                mb-5
                relative
            ">
                <h2 className='absolute w-full bottom-0 bg-black/80 text-xl text-white font-bold py-[10px] px-[20px]'>Accessories</h2>
            </div>
        </div>
    </section>
  )
}

export default NewArrival