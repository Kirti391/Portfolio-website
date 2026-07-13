import Button from "./button";
import { FiDownload, FiMail , FiGithub, FiLinkedin,} from "react-icons/fi";
import { useState, useEffect } from "react";
import { SiLeetcode } from "react-icons/si";
import SocialButton from "./socialButton";
import { FiChevronDown } from "react-icons/fi";
import resume from "../assets/Kirti_Resume.pdf";

function Hero() {
    const roles = [
        "Developer",
        "Programmer",
        "Problem Solver",
        "Frontend Developer",
        "React Enthusiast",
    ];
    const [currentRole, setCurrentRole] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    //   }, 2000);

    //   return () => {
    //     clearInterval(interval);
    //   };
    // }, []);
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1000; 
useEffect(() => {

    let timeout;

    if (!isDeleting && charIndex < roles[currentRole].length) {

        timeout = setTimeout(() => {
            setCharIndex(prev => prev + 1);
        }, typingSpeed);

    }

    else if (!isDeleting && charIndex === roles[currentRole].length) {

        timeout = setTimeout(() => {
            setIsDeleting(true);
        }, pauseTime);

    }

    else if (isDeleting && charIndex > 0) {

        timeout = setTimeout(() => {
            setCharIndex(prev => prev - 1);
        }, deletingSpeed);

    }

    else {

        setIsDeleting(false);
        setCurrentRole(prev => (prev + 1) % roles.length);

    }

    return () => clearTimeout(timeout);

}, [charIndex, isDeleting, currentRole]);

    // useEffect(()=>{
    //     const cursorInterval=setInterval(() => {
    //         setShowCursor(prev =>!prev);
    //     }, 400);
    //     return ()=> clearInterval(cursorInterval);
    // }, [])

    return (
        <section className="relative min-h-screen flex pt-16 justify-center px-6 ">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
                <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl"></div>
                <div className="absolute top-1/3 left-1/2 h-80 w-80 rounded-full -translate-x-1/2 bg-violet-500/15 blur-3xl"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-3xl flex flex-col items-center text-center ">
                <div className="mb-6 gap-2 flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span className="text-sm text-emerald-300">Open to Internships & Opportunities</span>
                </div>

                <h1 className="text-5xl font-bold tracking-tight text-[#F2F3F5] md:text-7xl mb-3">Hi, I'm Kirti</h1>
                <div className="mt-4 flex flex-col items-center justify-center">
                   <p className="text-md md:text-2xl font-medium text-gray-400">
    I'm a
</p>
                      {/* <span className="text-gray-300"> */}
        {/* I'm a&nbsp;
    </span> */}
  <div className="h-20 flex items-center">
<h2 className="mt-6 flex items-center justify-center text-5xl font-bold md:text-6xl">
  
    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
        {roles[currentRole].slice(0, charIndex)}
    </span>

    <span className="ml-1 h-[0.8em] w-[2px] bg-white animate-blink rounded-full"></span>
</h2></div>
                </div>
                <p className="mt-5 max-w-2xl text-lg text-gray-300 leading-9"> I build modern, responsive, and interactive web applications with
                    clean code, thoughtful user experiences, and a passion for learning
                    new technologies.</p>
                <div className="flex items-center gap-4 mt-6 ">
                    <Button text="Download Resume"  href={resume} download={true} icon={<FiDownload />} variant="primary" />
                    <Button text="Contact Me" icon={<FiMail />} variant="secondary" /></div>
<div className="mt-8 flex items-center gap-5 ">
  <SocialButton
    icon={<FiGithub size={20} />}
    link="https://github.com/Kirti391"
  />

  <SocialButton
    icon={<FiLinkedin size={20} />}
    link="https://linkedin.com/in/Kirti2005"
  />

  <SocialButton
    icon={<SiLeetcode size={20} />}
    link="https://leetcode.com/Kirti2005"
  />

  <SocialButton
    icon={<FiMail size={20} />}
    link="mailto:jainwarkirti8@gmail.com"
  />
</div>

<div className="absolute  bottom-24 left-1/2 -translate-x-1/2">
<a href="#about" className="flex-col items-center text-gray-400 transition-all duration-300 hover:text-white">
    <FiChevronDown size={28} className="animate-bounce" />
    {/* <p className="mt-2 text-sm tracking-widest uppercase">Scroll</p> */}
</a>

</div>

            </div>

            {/* <h1>Hi </h1>
<h6>I'm Alice</h6>
<p>Frontend Developer &
Computer Science Student </p>
{/* <button>View Projects</button>
<button>Contact Me</button> */}
            {/* <Button text="View Projects" />  */}

            {/* <Button text="Contact Me" /> */}
        </section>
    );
}
export default Hero;