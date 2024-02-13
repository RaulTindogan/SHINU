import FlashSale from "../components/FlashSale"
import Recommended from "../components/Recommended"
import StyleGallery from "../components/StyleGallery"


function Shop() {
  return (
    <main className="max-w-[1420px] mx-auto">
      <section className="
        h-[50vh] lg:h-[70vh]
        bg-black/60
        bg-[url('https://raw.githubusercontent.com/RaulTindogan/SHINU/master/public/assets/banner-bg-2.png')]
        bg-cover
        bg-no-repeat
        bg-center
        bg-blend-overlay
        flex justify-center items-center
        px-[20px] md:px-[50px]
      ">
        <h1 className="mt-12 text-white text-[2rem] font-bold">SHOP NOW</h1>
      </section>
      <FlashSale />
      <Recommended items={30} />
      <StyleGallery />
    </main>
  )
}

export default Shop