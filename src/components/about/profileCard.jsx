import profile from "../../assets/Kirti.jpeg";
import { useState } from "react";
import avatar from "../../assets/anime.png";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
function ProfileCard() {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className=" group relative mx-auto h-[450px] w-[290px] cursor-pointer mt-8 [perspective:1000px]" onClick={() => setFlipped(!flipped)}>
            {/* Flip Container */}
            <div className={`relative h-full w-full preserve-3d transition-transform duration-900 ${flipped ? "rotate-y-180" : ""}  `}>

                {/* Front Profile Card */}
                <div className="absolute inset-0 border border-indigo-300/40 bg-gradient-to-b from-[#17172B] via-[#111827] to-[#081018] rounded-2xl shadow-[0_0_70px_rgba(56,189,248,.18)] backface-hidden">

                    {/* Halo */}
                    <div className="absolute left-1/2 top-12 -translate-x-1/2 h-41 w-41 rounded-full border-2 border-indigo-400/30"></div>
                    {/* <div className="absolute left-1/2 top-12 -translate-x-1/2 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"></div> */}
                    <div className="relative z-10 flex justify-center pt-12 top-0.5">
                        <img src={profile} alt="Kirti_img" className="h-40 w-40 rounded-full " />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-bold">Kirti</h2>
                    <p className="mt-2 text-center text-lg text-indigo-400">Full Stack Developer</p>
                    <p className="mt-2.5 text-center text-gray-300">Computer Science & Engineering {<br/>}UIET Kurukshetra</p>

                    <a href="#projects" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-cyan-300  bg-cyan-500/10 rounded-xl 
                border border-cyan-400/30 py-1 px-2.5 transition-all hover:bg-cyan-500/20 duration-300 hover:-translate-y-1">View Projects</a>

                </div>

                {/* Back profile card */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl border-1 border-cyan-400/40 bg-gradient-to-b from-[#17172B] via-[#111827] to-[#081018] ">

                    <div className="mt-10 flex justify-center relative left-1/2 -translate-x-1/2 h-42 w-42 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-5xl">


                        <img src={avatar} alt="avatar/anime" className="h-42 w-42 rounded-full"/>

                        <SiReact className="absolute -top-3 left-10 text-3xl text-cyan-400"/>
                        <SiNodedotjs className="absolute top-5 -right-3 text-3xl text-green-500"/>
                        <SiMongodb className="absolute bottom-3 -left-3 text-3xl text-green-400"/>
                        <SiTailwindcss className="absolute bottom-0 right-6 text-3xl text-sky-400"/>

                    </div>
                    <h2 className="text-center font-bold text-3xl mt-6 text-white">KIRTI</h2>

                    <p className="text-center  mt-4 text-cyan-300 ">Innovate. Design. Build.</p>

                    <p className="text-center mx-3.5 mt-2.5 italic leading-8 text-gray-300">
                        "Crafting elegant digital experiences with clean code and thoughtful design."
                    </p>
                    {/* <div className="mt-2 flex justify-center gap-5 text-2xl">
                        <SiReact className="text-cyan-400 hover:scale-110 transition-transform" />
                        <SiNodedotjs className="text-green-500 hover:scale-110 transition-transform" />
                        <SiJavascript className="text-green-400 hover:scale-110 transition-transform" />
                        <SiTailwindcss className="text-sky-400 hover:scale-110 transition-transform" />
                    </div> */}
                </div>


            </div>
        </div>
    )
}
export default ProfileCard;