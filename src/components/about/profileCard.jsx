import profile from "../../assets/Kirti.jpeg";
import SocialButton from "../socialButton.jsx";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
function ProfileCard() {

    return (
        <div  className="relative mx-auto h-[450px] w-[290px] cursor-pointer mt-8">

  
            <div className="absolute inset-0 border border-indigo-300/40 bg-gradient-to-b from-[#17172B] via-[#111827] to-[#081018] rounded-2xl shadow-[0_0_70px_rgba(56,189,248,.18)]">

               {/* Front Profile Card */}
                     {/* Halo */}
                <div className="absolute left-1/2 top-12 -translate-x-1/2 h-41 w-41 rounded-full border-2 border-indigo-400/30"></div>
                {/* <div className="absolute left-1/2 top-12 -translate-x-1/2 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"></div> */}
                <div className="relative z-10 flex justify-center pt-12 top-0.5">
                    <img src={profile} alt="Kirti_img" className="h-40 w-40 rounded-full " />
                </div>
                <h2 className="mt-6 text-center text-3xl font-bold">Kirti</h2>
                <p className="mt-2 text-center text-lg text-indigo-400">Full Stack Developer</p>
                <p className="mt-2.5 text-center text-gray-300">Computer Science & Engineering {<br></br>}UIET Kurukshetra</p>
                  
                <a href="#projects" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-cyan-300  bg-cyan-500/10 rounded-xl 
                border border-cyan-400/30 py-1 px-2.5 transition-all hover:bg-cyan-500/20 duration-300 hover:-translate-y-1">View Projects</a>
           
           
               {/* Back profile card */}

            </div>


        

        </div>
    )
}
export default ProfileCard;