

function Contact() {
  return (
    <main className="max-w-[1420px] mx-auto">
      <section className="
        h-[50vh]
        bg-black/60
        bg-[url('/assets/contact.jpg')]
        bg-cover
        bg-no-repeat
        bg-center
        bg-blend-overlay
        flex justify-center items-center
        px-[20px] md:px-[50px]
      ">
        <h1 className="mt-12 text-white text-[2rem] font-bold">CONTACT US</h1>
      </section>
      <section className="px-[20px] md:px-[50px] py-[30px] md:py-[50px]">
        <h2 className="text-center font-bold text-[1.5rem] mb-10 md:text-[2rem]">WE'D LOVE TO HEAR FROM YOU</h2>
        <div className="md:flex gap-2 justify-center md:gap-5 md:mb-[50px]">
          <div className="bg-[#E7E7E7] border border-black rounded-md py-4 px-5 mb-5 max-w-[460px] mx-auto md:w-1/2 md:p-[30px] md:mx-0">
            <h3 className="text-center font-bold text-[1.2rem] mb-5">I WANT TO KNOW WHERE MY ORDER IS</h3>
            <p>Enter the order number found in the order confirmation email</p>
            <form className="mt-5">
              <label htmlFor="orderNo">Order no.</label>
              <input type="text" placeholder="eg. 321332254522" className="mb-5 mt-2 border border-black px-2 py-2 w-full"/>
              <input type="submit" value="TRACK MY ORDER" className="rounded-md bg-black text-white font-bold py-2 px-4 mx-auto block" />
            </form>
          </div>
          <div className="bg-[#E7E7E7] border border-black rounded-md py-4 px-5 mb-5 max-w-[460px] mx-auto md:w-1/2 md:flex flex-col justify-center md:p-[30px] md:mx-0">
            <h3 className="font-bold text-[1.2rem] text-center mb-5">I WANT TO RETURN SOMETHING</h3>
            <p>Register returns easily online. All you need is the order number found in the order confirmation email, and the email address used when placing your order.</p>
            <button className="rounded-md bg-black text-white font-bold py-2 px-4 mx-auto block mt-5 cursor-pointer">RETURN</button>
          </div>
        </div>
        <div className="md:flex gap-2 justify-center md:gap-5">
          <div className="bg-[#D9D9D9] border border-black rounded-md py-4 px-5 mb-5 max-w-[460px] mx-auto md:w-1/2 md:p-[30px] md:mx-0">
            <h3 className="text-center font-bold text-[1.2rem] mb-5">WE WOULD LOVE TO ASSIST YOU</h3>
            <form className="flex flex-col gap-2">
              <input type="text" placeholder="FULL NAME" className="px-2 py-2 border border-black"/>
              <input type="email" placeholder="EMAIL ADDRESS" className="px-2 py-2 border border-black"/>
              <input type="password" placeholder="YOUR MESSAGE" className="px-2 py-2 border border-black"/>
              <input type="submit" value="SEND" className="rounded-md bg-black text-white font-bold py-2 px-4 mx-auto block mt-5 cursor-pointer"/>
            </form>
          </div>
          <div className="py-4 px-5 max-w-[460px] mx-auto md:w-1/2 md:p-[30px] md:mx-0">
            <div className="mb-5">
              <h3 className="text-[1.5rem] font-bold">CALL US</h3>
              <div className="px-5">
                <p>99999999999</p>
                <p>88888888888</p>
              </div>
            </div>
            <div>
              <h3 className="text-[1.5rem] font-bold">EMAIL US</h3>
              <p className="px-5">example@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact