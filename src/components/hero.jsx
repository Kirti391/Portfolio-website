import Button from "./button";

function Hero(){
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6">
{/* Background */}
<div className="absolute inset-0">
    <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
    <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl"></div>
    <div className="absolute top-1/3 left-1/2 h-80 w-80 rounded-full -translate-x-1/2 bg-violet-500/15 blur-3xl"></div>
</div>

{/* Hero Content */}
<div className="relative z-10 max-w-4xl flex flex-col items-center text-center">
    
</div>

{/* <h1>Hi 👋</h1>
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