// import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Footer from './components/footer'
import Contact from './components/contact/contact'

function App() {


  return (
    < div className="min-h-screen bg-[#08090B] text-[#F2F3F5] scroll-smooth">
   {/* <div className="min-h-screen bg-[#08090B] text-[#F2F3F5]"> */}
     <Navbar />
     <Hero />
     <About/>
     <Skills/>
     <Contact/>
     <Footer/>

     </div>
    // </>
  )
}

export default App
