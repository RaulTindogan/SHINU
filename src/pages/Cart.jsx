import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  // Function to update cart items and local storage
  const updateCartAndLocalStorage = (updatedCartItems) => {
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  // Function to add an item to the cart
  const addItem = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCartAndLocalStorage(updatedCartItems);
  };

  const minusItem = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCartAndLocalStorage(updatedCartItems);
  };

  const totalPrice = (price, quantity) => {
      return price * quantity
  }

  const deleteItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    updateCartAndLocalStorage(updatedCartItems);
  };


   useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <main className="max-w-[1420px] mx-auto">
        <section className="px-[20px] md:px-[50px] py-[25px] md:py-[50px]">
          <h1 className="text-[2rem] pt-[50px] font-bold mb-10">Cart: {cartItems.length}</h1>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-5">
            <div className="hidden md:flex md:flex-col lg:w-[70%]">
          {cartItems.map(item => (
              <div key={item.id} className="w-full" >
                <div className="flex border border-black p-2 mb-2">
                  <div>
                    <img src={item.image} alt="" className="w-[200px] h-[200px]"/>
                  </div>
                  <div className="w-full px-2">
                    <table className="w-full">
                      <thead className="border-black/90 border-b-[1px]">
                        <tr className="text-left">
                          <th className="pl-2 py-2 md:text-[12px]">PRODUCT INFORMATION</th>
                          <th className="md:text-[12px]">PRICE</th>
                          <th className="md:text-[12px]">QUANTITY</th>
                          <th className="md:text-[12px]">TOTAL</th>
                          <th className="md:text-[12px]">ACTION</th>
                        </tr>
                      </thead>
                      <tbody className="text-[14px]">
                        <tr>
                          <td className="pl-2">
                            <p>{item.name}</p>
                            <p>Product Information</p>
                            <p>Product Information</p>
                          </td>
                          <td className="text-left">{"₱" +  item.price}</td>
                          <td>
                          <div className="flex justify-between w-[100px]">
                            <button className="flex justify-center items-center" onClick={()=>{minusItem(item.id)}}><FontAwesomeIcon icon="fa-solid fa-circle-minus" className="text-black text-[1.2rem]"/></button>
                            <div className="w-[40px] text-center border-[1px] border-black/80 rounded-sm mx-2 text-[12px]">{item.quantity}</div>
                            <button className="font-bold flex justify-center items-center" onClick={()=>{addItem(item.id)}}><FontAwesomeIcon icon="fa-solid fa-circle-plus" className="text-black text-[1.2rem]"/></button>
                          </div>  
                          </td>
                          <td>{"₱" + totalPrice(item.price, item.quantity)}</td>
                          <td><FontAwesomeIcon icon="fa-solid fa-trash" className="text-[red] cursor-pointer" onClick={()=>{deleteItem(item.id)}}/></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>          
          ))}
            {/* <div className="hidden md:block lg:w-[70%]">
              <div className="flex border border-black p-2 mb-2">
                <div>
                  <img src="/assets/T-shirt-1.jpg" alt="" className="w-[200px] h-[200px]"/>
                </div>
                <div className="w-full px-2">
                  <table className="w-full">
                    <thead className="border-black/90 border-b-[1px]">
                      <tr className="text-left">
                        <th className="pl-2 py-2 md:text-[12px]">PRODUCT INFORMATION</th>
                        <th className="md:text-[12px]">PRICE</th>
                        <th className="md:text-[12px]">QUANTITY</th>
                        <th className="md:text-[12px]">TOTAL</th>
                        <th className="md:text-[12px]">ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="text-[14px]">
                      <tr>
                        <td className="pl-2">
                          <p>Product Name</p>
                          <p>Product Information</p>
                          <p>Product Information</p>
                        </td>
                        <td className="text-left">300</td>
                        <td>
                        <div className="flex justify-between w-[100px]">
                          <button className="border-black px-2 pb-[1px] w-[20px] rounded-sm text-[14px] text-white bg-black font-bold flex justify-center items-center">—</button>
                          <div className="w-[40px] text-center border-[1px] border-black/80 rounded-sm mx-2 text-[12px]">0</div>
                          <button className="border-black pb-[1px] w-[20px] rounded-sm text-white bg-black font-bold flex justify-center items-center">+</button>
                        </div>  
                        </td>
                        <td>300</td>
                        <td>delete</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}
          </div>

            <div className="mb-5 md:hidden">
              {
                cartItems.map(item => {
                  return (
                  <div key={item.id} className="w-full flex text-sm border-[1px] border-black rounded px-2 py-2">
                    <div className="flex items-center">
                        <img src={item.image} alt="" className="w-[100px] h-[100px] rounded-sm"/>
                    </div>
                    <div className="flex flex-col justify-between w-full px-2">
                      <div className="">
                        <p>{item.name}</p>
                        <p>{"₱" + item.price}</p>
                        <p className="mb-2">{"Total: ₱" + totalPrice(item.price, item.quantity)}</p>
                      </div>
                      <div className="flex justify-between w-full">
                        <div className="flex justify-between">
                          <button className="flex justify-center items-center" onClick={()=>{minusItem(item.id)}}><FontAwesomeIcon icon="fa-solid fa-circle-minus" className="text-black text-[1.2rem]"/></button>
                            <div className="w-[40px] text-center border-[1px] border-black/80 rounded-sm mx-2 text-[12px]">{item.quantity}</div>
                          <button className="font-bold flex justify-center items-center" onClick={()=>{addItem(item.id)}}><FontAwesomeIcon icon="fa-solid fa-circle-plus" className="text-black text-[1.2rem]"/></button>
                        </div>
                        <div>
                          <button className="px-2 rounded-sm border-black border">
                          <FontAwesomeIcon icon="fa-solid fa-trash" className="text-[red] cursor-pointer" onClick={()=>{deleteItem(item.id)}}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
            </div>
            <div className="border border-black px-5 pt-5 pb-10 lg:w-[30%]">
              <h3 className="font-bold mb-5">SUMMARY</h3>
              <div>
                <div>
                  <form onSubmit={(e)=>{e.preventDefault()}} className="flex mb-7">
                    <input type="text" name="promo-code" id="promo-code" placeholder="ENTER PROMO CODE" className="border border-black py-1 px-2 w-[70%] text-[14px]"/>
                    <input type="submit" value="SUBMIT" className="px-1 lg:px-4 py-2 bg-black text-white font-bold w-[30%] text-[14px]"/>
                  </form>
                  <div>
                    <div className="w-full flex justify-between pb-3">
                      <p>Shipping Cost</p>
                      <p>TBD</p>
                    </div>
                    <div className="w-full flex justify-between pb-3">
                      <p>Discount</p><p>TBD</p>
                    </div>
                    <div className="w-full flex justify-between mb-5">
                      <p>Tax</p><p>TBD</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between py-2 border-black border-y-2 mb-5">
                      <p className="font-bold">TOTAL</p><p>TBD</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="bg-black text-white font-bold text-[1.2rem] py-2 px-10 rounded-[20px]">CHECKOUT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Cart