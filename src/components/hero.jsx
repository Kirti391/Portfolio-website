import Button from "./button";
import { FiDownload, FiMail } from "react-icons/fi";
import { useState } from "react";

function Hero(){
    const roles = [
  "Developer",
  "Programmer",
  "Problem Solver",
  "Frontend Developer",
  "React Enthusiast",
];
const [currentRole, setCurrentRole] = useState(0);
    return (
        <section className="relative min-h-screen flex pt-24 justify-center px-6 ">
{/* Background */}
<div className="absolute inset-0">
    <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
    <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl"></div>
    <div className="absolute top-1/3 left-1/2 h-80 w-80 rounded-full -translate-x-1/2 bg-violet-500/15 blur-3xl"></div>
</div>

{/* Hero Content */}
<div className="relative z-10 max-w-3xl flex flex-col items-center text-center pb-20">
    <div className="mb-6 gap-2 flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
    <span className="text-sm text-emerald-300">Open to Internships & Opportunities</span>
    </div>

    <h1 className="text-5xl font-bold tracking-tight text-[#F2F3F5] md:text-7xl">Hi, I'm Kirti</h1>
    <div className="mt-4 flex flex-col items-center">
        <p className="text-xl text-gray-400">I'm a </p>
        <h2 className="mt-2 bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-6xl font-extrabold text-transparent md:text-7xl">{roles[currentRole]}</h2>
    </div>
    <p className="mt-5 max-w-xl text-lg text-gray-300 leading-9"> I build modern, responsive, and interactive web applications with
  clean code, thoughtful user experiences, and a passion for learning
  new technologies.</p>
  <div className="flex items-center gap-4 mt-6"> 
    <Button text="Download Resume" icon={<FiDownload/>} variant="primary"/>
  <Button text="Contact Me" icon={<FiMail/>} variant="secondary"/></div>
 
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