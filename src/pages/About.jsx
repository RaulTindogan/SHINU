import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function About() {
  return (
    <main className="max-w-[1420px] mx-auto">
      <section className="
        h-[50vh] lg:h-[70vh]
        bg-black/60
        bg-[url('/assets/tailor-1.jpg')]
        bg-cover
        bg-no-repeat
        bg-center
        bg-blend-overlay
        flex justify-center items-center
        px-[20px] md:px-[50px]
      ">
        <h1 className="mt-12 text-white text-[2rem] font-bold">ABOUT US</h1>
      </section>
      <section className="py-10 px-[20px] md:px-[50px]">
        <div className="mb-10 md:flex">
          <div className="mb-5 md:w-1/2 md:mb-0">
            <img src="./assets/tailor2.jpg" alt="" className="block mx-auto md:h-full md:mx-0"/>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-bold text-[2rem] text-center mb-5">SHINU</h2>
            <p className="md:pl-5 lg:text-[1.5rem]">SHINU is a global fashion and lifestyle e-retailer dedicated to bringing the beauty of fashion to everyone. We employ on-demand manufacturing technology to connect suppliers to our flexible supply chain, eliminating inventory waste and allowing us to deliver a diverse range of affordable items to clients worldwide. We serve consumers in over 150 countries from our global operations. </p>
          </div>
        </div> 
        <div>
          <h2 className="font-bold text-[1.5rem] text-center mb-10 md:text-[3rem]">SHINU At-a-Glance</h2>
          <div className="md:flex md:justify-evenly">
            <div className="mb-10 md:md-0">
              <p className="flex flex-col items-center gap-3"><span>Nearly</span><FontAwesomeIcon icon="fa-solid fa-person" className="text-[5rem]"/><span className="text-[3rem] font-bold">10,000</span><span>employees worldwide</span></p>
            </div>
            <div className="mb-10 md:md-0">
              <p className="flex flex-col items-center gap-3"><span>Have</span><FontAwesomeIcon icon="fa-solid fa-person-dress" className="text-[5rem]"/><span className="text-[3rem] font-bold">52%</span><span>female employees worldwide</span></p>
            </div>
            <div className="mb-10 md:md-0">
              <p className="flex flex-col items-center gap-3"><span>selling to</span><FontAwesomeIcon icon="fa-solid fa-earth-asia" className="text-[5rem]"/><span className="text-[3rem] font-bold">150+</span><span>countries</span></p>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-[2rem] text-center mb-5 md:text-[3rem]">OUR STORY</h2>
            <div className="md:flex">
              <div className="mb-10 md:mb-0 md:w-1/2 md:pr-5">
                <p className="mb-5 lg:text-[1.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, totam provident quasi odit exercitationem aliquid sapiente cupiditate commodi dolores blanditiis!</p>
                <p className="lg:text-[1.5rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ad tempore iure magnam, modi eveniet suscipit aspernatur, quod obcaecati sequi fugit animi repudiandae recusandae optio non odio. Enim, officiis quidem!</p>
              </div>
              <div className="md:w-1/2">
                <img src="./assets/tailor1.jpg" alt="" className="md:h-full"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About