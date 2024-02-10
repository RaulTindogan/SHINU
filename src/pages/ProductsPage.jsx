import React from 'react'
import { products } from '../utility/products';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  Recommended  from '../components/Recommended'
import { Link } from 'react-router-dom';

function Products() {

  const addToCart = (id, name, price, image, quantity) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItemIndex = cartItems.findIndex(item => item.id === id);
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      const newItem = { id, name, price, image, quantity};
      cartItems.push(newItem);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  let { productId } = useParams();
    

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    let displayProduct = products.find(product => product.productId == productId)

    const ProductDisplay = () => {
        return (
          <>
            <div className='md:w-[60%] md:flex md:flex-row-reverse md:gap-2'> 
                <div>
                  <img src={displayProduct.productImages[activeImageIndex]} alt="" />
                </div>
                <div className='flex gap-[4px] justify-center flex-wrap bg-neutral-200 py-5 md:flex-col md:justify-start md:py-0 md:bg-transparent'>
                      { 
                        displayProduct.productImages.map((image, index) => {
                          // Check if the current image is active
                          const isActive = activeImageIndex === index;  
                          return (
                            <div
                              key={index}
                              className={`p-[2px] cursor-pointer ${isActive ? 'border-2 border-black' : ''}`}
                              onClick={() => setActiveImageIndex(index)} // Set the active image index on click
                            >
                              <img src={image} alt="" className='w-[50px]' />
                            </div>
                          );
                        })  
                    }
                </div>
            </div>
            <div className='w-[40%] bg-sky-100'>
              <div className='mt-[10px] py-[20px] px-[20px] md:mt-0'>
                <div className='mb-5'>
                  <p className='text-[1.2rem] tracking-[5px]'>{displayProduct.productCategory}</p>
                  <p>{displayProduct.productName}</p>
                  <p>Product Information</p>
                </div>
                <div>
                  <Link to={"/cart"}>
                    <button 
                      className='border border-black py-2 w-full bg-[#FFB800] font-bold' 
                      onClick={()=>{addToCart(displayProduct.productId, displayProduct.productName, displayProduct.productPrice, displayProduct.productThumbnail, 1)}}
                    >ADD TO CART</button>
                  </Link>
                </div>
              </div>
            </div>
          </>          
        )
    }

    useEffect(() => {
      // Reset activeImageIndex to 0 whenever productId changes
      setActiveImageIndex(0);
    }, [productId]);

  return (
    <main className="max-w-[1420px] mx-auto min-h-[100vh] py-[50px]">
       <section className="px-[20px] md:px-[50px] py-[25px] md:py-[50px]">
          <div className='md:flex md:gap-2 max-w-[1200px] mx-auto'>
            <ProductDisplay />
          </div>
        </section>
        <section className="px-[20px] md:px-[50px] py-[25px] md:py-[50px]">
            <Recommended items={6}/>
        </section>
    </main>
  )
}

export default Products



