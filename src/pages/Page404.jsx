import React from 'react'

function Page404() {
  return (
    <main className="max-w-[1420px] mx-auto">
        <section className="px-[20px] md:px-[50px] py-[25px] md:py-[50px]">
           <div className='pt-[50px] md:flex max-w-[700px] mx-auto'>
                <div>
                    <img src="./assets/cute-cat.png" alt="" className='w-[500px]'/>
                </div>
                <div className='pl-[3rem]'>
                    <h1 className='pt-[50px] text-[2rem] font-bold mb-5'>Oops! Page Not Found</h1>
                    <h2>We're sorry, but the page you are looking for cannot be found. It may have been moved, renamed, or no longer exists.</h2>
                </div>
           </div>
            
            
        </section>
    </main>

  )
}

export default Page404