import { products } from '../utility/products';
import React from 'react'
import { Link } from 'react-router-dom';

function Recommended( {items} ) {

let randomItems = []
let randomIndex = []

for(let i=0; i<items; i++) {
  generateRandomItems()
}

function generateRandomItems() {
  let randomNumber = Math.floor(Math.random() * 90)

  if(randomIndex[0] === null) {
    randomIndex[0] = randomNumber
  } else {
    if(randomIndex.includes(randomNumber)) {
      generateRandomItems()
    }else {
      randomIndex.push(randomNumber)
    }  
  }
}

randomIndex.map(num=>{
  randomItems.push(products[num])
})


const recommendedItems = randomItems.map(items => (
  <Link key ={items.productId} to={`/products/${items.productId}`}>
    <div className='flex flex-col w-full border-black border relative cursor-pointer'>
      <div className=''>
        <div className='w-full h-[250px]'>
          <img src={items.productThumbnail} alt="" className='w-full h-full' />
        </div>
        <div className='bg-[#D9D9D9] px-2 py-2 border-t-[1px]border-black'>
          <div className='flex justify-between items-center bg-[#D9D9D9]'>
            <p className='text-[#FF4F04] font-bold text-[1.2rem] '>{"₱" + items.productPrice}</p>
            <div className='py-[3px] pl-[8px] pr-[6px] bg-[#FFB800] flex justify-center items-center cursor-pointer'>
              <img src="https://raw.githubusercontent.com/RaulTindogan/SHINU/05f92a423bb856556bd7c91653020d185e358c08/public/assets/shopping-cart.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
))  

  return (
    <section className="px-[20px] md:px-[50px] py-[25px] md:py-[50px]">
        <h3 className='text-center font-bold text-[2rem] mb-10'>Recommended</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-5 mb-10'>
            {recommendedItems}
        </div>
    </section>
  )
}

export default Recommended