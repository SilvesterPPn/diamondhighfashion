import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Footer from './component/Footer'
import Collections from './pages/Collections'
import ScrollToTop from './component/ScrollToTop'
import WhatsAppButton from './component/WhatsAppButton'
import SEO from './component/SEO'


function App() {
 

  return (
    <>
      <SEO 
        title="Diamond High Fashion - Luxury Fashion Design"
        description="Diamond High Fashion is a luxury fashion design house based in Makurdi, offering bespoke clothing and accessories with a perfect blend of contemporary style and traditional craftsmanship."
        keywords="fashion design, luxury fashion, bespoke clothing, Diamond High Fashion, Makurdi fashion, Nigerian fashion"
      />
      <Header />
      <Navbar />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/collections' element={<Collections/>}/>
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
