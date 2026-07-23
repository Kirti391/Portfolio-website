function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0B1220] via-[#08101D] to-[#050816] w-full px-6 md:px-16 lg:px-28 py-16">

      <div className="max-w-6xl mx-auto ">
        <h2 className="text-center font-bold text-3xl md:text-4xl tracking-tight text-white">Thanks for visiting.</h2>
        <p className="text-center text-gray-400 mt-4 leading-8 mx-auto max-w-xl">I appreciate you taking the time to explore my portfolio.</p>
        <p className="mt-2 text-gray-500 text-center">Hope we get to build something amazing together. </p>
        <div className=" mt-12 flex items-center justify-center gap-4">
          <div className="flex-1 h-px  bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
          <div className="flex h-3 w-3  bg-indigo-400 rotate-45"></div>
          <div className="flex-1 h-px  bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
        </div>
        <div className="text-center mt-12 ">
          <h3 className="text-sm uppercase tracking-[0.3em] font-semibold text-indigo-300">Built with</h3>
          <p className="text-gray-400 mt-3" >React . Tailwind CSS . Vite</p>
        </div>
        <div className=" text-center mt-14 pb-16">
          <p className="text-sm text-white font-medium">© {new Date().getFullYear()} Kirti | All rights reserved.</p>

          <p className="mt-2 text-sm text-gray-500 italic ">
            Built from scratch with passion and curiosity.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;