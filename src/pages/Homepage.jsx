import Banner from "../components/Banner.jsx"
import BestSeller from "../components/BestSeller.jsx"
import CallToAction from "../components/CallToAction.jsx"
import Featured from "../components/Featured.jsx"
import NewArrival from "../components/NewArrival.jsx"

function Homepage() {

  return (
   <main className="max-w-[1420px] mx-auto">
    <Banner /> 
    <Featured/>
    <BestSeller />
    <NewArrival />
    <CallToAction />
   </main>
      
  )
}

export default Homepage