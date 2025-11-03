import Featured from "../component/Featured"
import Hero from "../component/Hero"
import NewDrops from "../component/NewDrops"
import ServicesSession from "../component/ServicesSession"
import WhyChooseUs from "../component/WhyChooseUs"
import Faqs from "../component/Faq"
import Consultation from "../component/Consultation"


const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <NewDrops />
      <ServicesSession />
      <WhyChooseUs />
      <Consultation />
      <Faqs />
    </div>
  )
}

export default Home
