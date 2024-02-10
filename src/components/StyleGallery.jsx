import React from 'react'

function StyleGallery() {
  return (
    <section className="px-[20px] md:px-[50px] py-[25px] md:py-[50px]">
        <h3 className='text-center font-bold text-[2rem] mb-10'>Style Gallery</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-5 mb-10'>
            <div className='w-full border-black border relative'>
                <div>
                    <div>
                        <img src="/assets/Women-Tee/Contrast-Trim-Pocket-Patched-Tee-4.jpg" alt="" className='w-full' />
                    </div>
                </div>
            </div>
            <div className='w-full border-black border relative'>
                <div>
                    <div>
                        <img src="/assets/Women-Tee/Gray-Drop-Shoulder-Tee-3.jpg" alt="" className='w-full' />
                    </div>
                </div>
            </div>
            <div className='w-full border-black border relative'>
                <div>
                    <div>
                        <img src="/assets/Women-Tee/Star-Solid-Off-Shoulder-Lettuce-Trim-Tee-4.jpg" alt="" className='w-full' />
                    </div>
                </div>
            </div>
            <div className='w-full border-black border relative'>
                <div>
                    <div>
                        <img src="/assets/Women-Tee/Striped-Print-Contrast-Binding-Tee-1.jpg" alt="" className='w-full' />
                    </div>
                </div>
            </div>
            <div className='w-full border-black border relative'>
                <div>
                    <div>
                        <img src="/assets/Women-Hoodies/Letter-Embroidery-Drop-Shoulder-Drawstring-Hoodie-5.jpg" alt="" className='w-full' />
                    </div>
                </div>
            </div>
            <div className='w-full border-black border relative'>
                <div>
                    <div>
                        <img src="/assets/Women-Hoodies/Drop-Shoulder-Oversized-Drawstring-Hoodie-4.jpg" alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StyleGallery