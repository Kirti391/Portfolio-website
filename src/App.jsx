// import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about/about'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/contact'
import Footer from './components/footer'



function App() {


  return (
    < div className="min-h-screen bg-[#08090B] text-[#F2F3F5] scroll-smooth">
   {/* <div className="min-h-screen bg-[#08090B] text-[#F2F3F5]"> */}
     <Navbar />
     <Hero />
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>

     </div>
    // </>
  )
}

export default App
