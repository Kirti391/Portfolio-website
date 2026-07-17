// import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
// import About from './components/about'
import About from './components/about/about'
import Footer from './components/footer'
function App() {


  return (
    < div className="min-h-screen bg-[#08090B] text-[#F2F3F5] scroll-smooth">
   {/* <div className="min-h-screen bg-[#08090B] text-[#F2F3F5]"> */}
     <Navbar />
     <Hero />
     <About/>
     {/* <About/> */}
     <Footer/>

     </div>
    // </>
  )
}

export default App
