import React from 'react'
import Carousel from './Carousel'

function Featured() {

  return (
    <section className='py-[40px] px-[20px] lg:px-[50px] lg:py-[50px]'>
      <h2 className='text-center pb-[40px] font-bold text-[2rem]'>Featured Products</h2>
      <Carousel sliderId={"slider2"} />    
    </section>
  )
}

export default Featured