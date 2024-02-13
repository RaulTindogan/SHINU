import React from 'react'
import { products } from '../utility/products';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';

function Carousel({ sliderId }) {

  const numItems = 30;
  let randomItems = []
  let randomIndex = []
  
  for(let i=0; i<18; i++) {
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

    const slideLeft = ()=>{
        let slider = document.getElementById(sliderId) 
        let card = document.querySelector('.card')
        let computedStyles = window.getComputedStyle(card);
        let totalValue= card.offsetWidth + parseFloat(computedStyles.marginRight)
        slider.scrollLeft -= totalValue
    }
  
    const slideRight = (id)=>{
      let slider = document.getElementById(id) 
      let card = document.querySelector('.card')
      let computedStyles = window.getComputedStyle(card)
      let totalValue= card.offsetWidth + parseFloat(computedStyles.marginRight)
      slider.scrollLeft += totalValue
  } 



  return (
    <div className='px-[20px]'>
    <div className='flex items-center gap-3 mb-5'>
    <hr className='w-full h-[px] bg-black' />
      <div className='flex gap-2' >
        <button className='border border-black/50 rounded py-[5px] px-[10px] hover:bg-[#FFB800]' onClick={()=> slideLeft(sliderId)}><FontAwesomeIcon icon="fa-solid fa-chevron-left" /></button>
        <button className='border border-black/50 rounded py-[5px] px-[10px] hover:bg-[#FFB800]' onClick={()=> slideRight(sliderId)}><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></button>
      </div>
        <hr className='w-full h-[px] bg-black' />   
    </div>
      <div className='overflow-hidden w-full'>
         <div className='overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide' id={sliderId}>
          {
            randomItems.map(product=>{
              return (
                <Link key={product.productId} to={`products/${product.productId}`}>
                  <div className='border border-black w-[275px] max-w-[280px] mr-[5px] md:mr-[20px] inline-block md:w-[200px] card'> 
                    <div>
                      <img src={product.productThumbnail} alt={product.productName} className='w-full max-h-[300px] h-[300px] md:h-[250px]'/>
                    </div>
                    <div className=' border-black border-t py-[10px] px-[10px]'>
                      <div className='flex justify-between items-center'>
                        <p className='font-bold text-[1.3rem]'>{"₱" + product.productPrice}</p>
                        <div className='py-[3px] pl-[8px] pr-[6px] bg-[#FFB800] flex justify-center items-center cursor-pointer'>
                          <img src="https://raw.githubusercontent.com/RaulTindogan/SHINU/05f92a423bb856556bd7c91653020d185e358c08/public/assets/shopping-cart.svg" alt="" />
                        </div>
                      </div>  
                    </div>
                  </div>
                </Link>       
              )
            })
          }
        </div>
      </div>      
    </div>
  )
}

export default Carousel