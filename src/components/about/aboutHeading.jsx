function AboutHeading(){

return(
    <div className="text-center">
        <div className="uppercase border border-white/10 bg-white/5 rounded-full px-4 py-2 text-sm text-gray-300  tracking-[0.30em] inline-flex items-center ">Get To Know Me</div>
        <h2 className=" mt-6 text-5xl md:text-7xl font-black tracking-tight">
            <span className="text-white">About</span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">{" "}Me</span>
        </h2>
        <p className="mt-6 max-w-2xl text-gray-400 mx-auto text-lg leading-8 ">Curious mind. Passionate developer.
        Lifelong learner. Let's build something
        incredible together.</p>
        
    </div>
)
}
export default AboutHeading;