import About from "./About"
import Events from "./Events"
import HeroSection from "./HeroSection"
import Highlights from "./Highlights"


function Home() {
  return (
    <div className="w-full h-full">
        <HeroSection/>
        <Events/>
        <About/>
        <Highlights/>
    </div>
  )
}

export default Home