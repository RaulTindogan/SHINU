import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { saleProducts } from '../utility/products'
import { Link } from 'react-router-dom'

function FlashSale() {

    const [saleState, setsaleState] = useState(1)
    const [hour, setHour] = useState (1)
    const [minute, setMinute] = useState (59)
    const [second, setSecond] = useState (59)

    function startTimer(){
        setTimeout(() => {
            setSecond(second-1)
            if(second === 0) {
                setMinute(minute-1)
                setSecond(10)

                if(hour === 0 && minute === 0) {
                    setHour(0)
                    setMinute(0)
                }
            }

            if(minute === 0 && second === 0) {
                setHour(hour-1)
                setMinute(1)     
            }

            if(hour === 0 && minute === 0 && second === 0) {
                setHour(1)
                setMinute(59)
                setSecond(60)
            }
            
        }, 1000);
    }

    startTimer()

    function salesClick(num) {
        setsaleState(num)
    }

  return (
    <section className="px-[20px] md:px-[50px] py-[25px] md:py-[50px]">
        <div className='flex flex-col md:flex-row md:justify-between mb-10'>
            <h2 className='text-[1.5rem] font-bold mb-3 md:text-[2.5rem]'>Flash Sale</h2>
            <div className='flex items-center'>
                <div className='mr-2'>
                    <h3 className='font-bold md:text-[1.5rem]'>Ends in:</h3>
                </div>
                <div className='flex text-white items-center gap-1'>
                    <div className='text-[1.2rem] font-bold bg-black px-2 py-1'>{hour.toString().padStart(2, "0")}</div>
                    <div className='text-black text-[1.5rem]'>:</div>
                    <div className='text-[1.2rem] font-bold bg-black px-2 py-1'>{minute.toString().padStart(2, "0")}</div>
                    <div className='text-black text-[1.5rem]'>:</div>
                    <div className='text-[1.2rem] font-bold bg-black px-2 py-1'>{second.toString().padStart(2, "0")}</div>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-5 mb-20'>
            <FlashItems />
        </div>
        <div>
            <div className='flex flex-col items-start mb-10 md:flex-row md:justify-center md:gap-10'>
                <button onClick={()=>{salesClick(1)}} className={saleState == 1? 'text-[red] font-bold': 'font-bold'}>All 50% Off</button>
                <button onClick={()=>{salesClick(2)}} className={saleState == 2? 'text-[red] font-bold': 'font-bold'}>Valentine Sale</button>
                <button onClick={()=>{salesClick(3)}} className={saleState == 3? 'text-[red] font-bold': 'font-bold'}>All under ₱249</button>
            </div>
            <div>
                <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-5 mb-10 ${saleState == 1? '': 'hidden'}`}>
                    {
                        saleProducts[0].sale50.map(product => {
                            return (
                                <Link key={product.productId} to={`/products/${product.productId}`}>
                                    <div className='w-full border-black border relative'>
                                        <div className='bg-[#FCE300] w-[50px] flex flex-col items-center justify-center py-2 absolute top-[-10px] left-[-1px] border border-black'>
                                            <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />
                                            <p className='font-bold'>{product.productSale + "%"}</p>
                                        </div>
                                        <div>
                                            <div>
                                                <img src={product.productThumbnail} alt="" className='w-full' />
                                            </div>
                                            <div className='flex justify-between items-center px-2 bg-[#D9D9D9] py-2 border-t-[1px] border-black'>
                                                <p className='text-[#FF4F04] font-bold text-[1.2rem]'>{"₱" +  product.productNewPrice()}</p>
                                                <p className='line-through text-[#434343]'>{"₱" + product.productPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }      
                </div>
                <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-5 mb-10 ${saleState == 2? '': 'hidden'}`}>
                    {
                        saleProducts[1].valentineSale.map(product => {
                            return (
                                <Link key={product.productId} to={`/products/${product.productId}`}>
                                    <div key={product.productId} className='w-full border-black border relative'>
                                        <div className='bg-[#FCE300] w-[50px] flex flex-col items-center justify-center py-2 absolute top-[-10px] left-[-1px] border border-black'>
                                            <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />
                                            <p className='font-bold'>{product.productSale + "%"}</p>
                                        </div>
                                        <div>
                                            <div>
                                                <img src={product.productThumbnail} alt="" className='w-full' />
                                            </div>
                                            <div className='flex justify-between items-center px-2 bg-[#D9D9D9] py-2 border-t-[1px] border-black'>
                                                <p className='text-[#FF4F04] font-bold text-[1.2rem]'>{"₱" +  product.productNewPrice()}</p>
                                                <p className='line-through text-[#434343]'>{"₱" + product.productPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-5 mb-10 ${saleState == 3? '': 'hidden'}`}>
                    {
                        saleProducts[2].under249Sale.map(product => {
                            return (
                                <Link key={product.productId} to={`/products/${product.productId}`}>
                                    <div key={product.productId} className='w-full border-black border relative'>
                                        <div className='bg-[#FCE300] w-[50px] flex flex-col items-center justify-center py-2 absolute top-[-10px] left-[-1px] border border-black'>
                                            <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />
                                            <p className='font-bold text-[12px]'>{product.productSale}</p>
                                        </div>
                                        <div>
                                            <div>
                                                <img src={product.productThumbnail} alt="" className='w-full' />
                                            </div>
                                            <div className='flex justify-between items-center px-2 bg-[#D9D9D9] py-2 border-t-[1px] border-black'>
                                                <p className='text-[#FF4F04] font-bold text-[1.2rem]'>{"₱" +  product.productNewPrice}</p>
                                                <p className='line-through text-[#434343]'>{"₱" + product.productPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }

                    {/* <div className='w-full border-black border relative'>
                        <div className='bg-[blue] w-[50px] flex flex-col items-center justify-center py-2 absolute top-[-10px] left-[-1px] border border-black'>
                            <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />
                            <p className='font-bold'>40%</p>
                        </div>
                        <div>
                            <div>
                                <img src="/assets/T-shirt-1.jpg" alt="" className='w-full' />
                            </div>
                            <div className='flex justify-between items-center px-2 bg-[#D9D9D9] py-2 border-t-[1px] border-black'>
                                <p className='text-[#FF4F04] font-bold text-[1.2rem]'>₱375</p>
                                <p className='line-through text-[#434343]'>₱900</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border-black border relative'>
                        <div className='bg-[#FCE300] w-[50px] flex flex-col items-center justify-center py-2 absolute top-[-10px] left-[-1px] border border-black'>
                            <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />
                            <p className='font-bold'>40%</p>
                        </div>
                        <div>
                            <div>
                                <img src="/assets/T-shirt-1.jpg" alt="" className='w-full' />
                            </div>
                            <div className='flex justify-between items-center px-2 bg-[#D9D9D9] py-2 border-t-[1px] border-black'>
                                <p className='text-[#FF4F04] font-bold text-[1.2rem]'>₱375</p>
                                <p className='line-through text-[#434343]'>₱900</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border-black border relative'>
                        <div className='bg-[#FCE300] w-[50px] flex flex-col items-center justify-center py-2 absolute top-[-10px] left-[-1px] border border-black'>
                            <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />
                            <p className='font-bold'>40%</p>
                        </div>
                        <div>
                            <div>
                                <img src="/assets/T-shirt-1.jpg" alt="" className='w-full' />
                            </div>
                            <div className='flex justify-between items-center px-2 bg-[#D9D9D9] py-2 border-t-[1px] border-black'>
                                <p className='text-[#FF4F04] font-bold text-[1.2rem]'>₱375</p>
                                <p className='line-through text-[#434343]'>₱900</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border-black border relative'>
                        <div className='bg-[#FCE300] w-[50px] flex flex-col items-center justify-center py-2 absolute top-[-10px] left-[-1px] border border-black'>
                            <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />
                            <p className='font-bold'>40%</p>
                        </div>
                        <div>
                            <div>
                                <img src="/assets/T-shirt-1.jpg" alt="" className='w-full' />
                            </div>
                            <div className='flex justify-between items-center px-2 bg-[#D9D9D9] py-2 border-t-[1px] border-black'>
                                <p className='text-[#FF4F04] font-bold text-[1.2rem]'>₱375</p>
                                <p className='line-through text-[#434343]'>₱900</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border-black border relative'>
                        <div className='bg-[#FCE300] w-[50px] flex flex-col items-center justify-center py-2 absolute top-[-10px] left-[-1px] border border-black'>
                            <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />
                            <p className='font-bold'>40%</p>
                        </div>
                        <div>
                            <div>
                                <img src="/assets/T-shirt-1.jpg" alt="" className='w-full' />
                            </div>
                            <div className='flex justify-between items-center px-2 bg-[#D9D9D9] py-2 border-t-[1px] border-black'>
                                <p className='text-[#FF4F04] font-bold text-[1.2rem]'>₱375</p>
                                <p className='line-through text-[#434343]'>₱900</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border-black border relative'>
                        <div className='bg-[#FCE300] w-[50px] flex flex-col items-center justify-center py-2 absolute top-[-10px] left-[-1px] border border-black'>
                            <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />
                            <p className='font-bold'>40%</p>
                        </div>
                        <div>
                            <div>
                                <img src="/assets/T-shirt-1.jpg" alt="" className='w-full' />
                            </div>
                            <div className='flex justify-between items-center px-2 bg-[#D9D9D9] py-2 border-t-[1px] border-black'>
                                <p className='text-[#FF4F04] font-bold text-[1.2rem]'>₱375</p>
                                <p className='line-through text-[#434343]'>₱900</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default FlashSale

let FlashItems = ()=> {
    return (
        saleProducts[3].flashSale.map(product =>{
            return(
                <Link key={product.productId} to={`/products/${product.productId}`}>
                    <div className='w-full border-black border relative'>
                        <div className='bg-[#FCE300] w-[50px] flex flex-col items-center justify-center py-2 absolute top-[-10px] left-[-1px] border border-black'>
                            <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />
                            <p className='font-bold'>{product.productSale + "%"}</p>
                        </div>
                        <div>
                            <div>
                                <img src={product.productThumbnail} alt="" className='w-full' />
                            </div>
                            <div className='flex justify-between items-center px-2 bg-[#D9D9D9] py-2 border-t-[1px] border-black'>
                                <p className='text-[#FF4F04] font-bold text-[1.2rem]'>{"₱" + product.productNewPrice()}</p>
                                <p className='line-through text-[#434343]'>{"₱" + product.productPrice}</p>
                            </div>
                        </div>
                    </div>
                </Link>
          
            )
        }) 
    ) 
} 