import'./assets/css/Main.css'
import Feature from './components/MainComponents/Feature'
import Footer from './components/MainComponents/Footer'
import Header from './components/MainComponents/Header'
import Hero from './components/MainComponents/Hero'
import Slider from './components/MainComponents/Slider'
import ManagmentInformation from './components/MainComponents/ManagmentInformation'
import Subscribe from './components/MainComponents/Subscribe'
import Testimonial from './components/MainComponents/Testimonial'
import Faq from './components/MainComponents/Faq'


function App() {

  return (
    <>
    <Header />
    <Hero />
    <Feature />
    <Slider />
    <ManagmentInformation />
    <Testimonial />
    <Faq />
    <Subscribe />
    <Footer />
    </>
  )
}

export default App
