// import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
function App() {


  return (
    < div className="min-h-screen bg-[#08090B] text-[#F2F3F5] scroll-smooth">
   {/* <div className="min-h-screen bg-[#08090B] text-[#F2F3F5]"> */}
     <Navbar />
     <Hero />
     <About/>
     </div>
    // </>
  )
}

export default App
