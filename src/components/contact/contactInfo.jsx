import { LuMail, LuMapPin, LuBriefcaseBusiness } from "react-icons/lu";

function ContactInfo() {
    return (
        <div className="space-y-10">

            {/* description */}
            <div>
                <h3 className="max-w-xl text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-white">
                    Let's build something <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent" >exceptional </span>together.
                </h3>

                <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">
                    I'm currently exploring new opportunities, collaborations, and exciting projects. Have an idea in mind? Drop me a message or connect with me on social media.
                </p>
            </div>
            {/* details */}

            <div className="space-y-8">
                <div className="flex items-start gap-6 cursor-pointer transition-all duration-300 group">
                    <div className="h-10 w-10 rounded-full bg-indigo-400/10 flex justify-center transition-all duration-300  ">
                    <LuMail className="text-indigo-400 text-xl mt-2 group-hover:-translate-y-1 group-hover:text-indigo-300   transition-all duration-300 " /></div>
                    <div>
                        <p className="text-xs uppercase font-medium tracking-[0.2em] text-indigo-300 group-hover:text-indigo-200
                          transition-colors duration-300">
                            Email
                        </p>
                        <p className="mt-1 text-base font-medium text-white transition-colors duration-300 group-hover:text-indigo-100">jainwarkirti8@gmail.com</p></div>
                </div>
                <div className="flex items-start gap-6 cursor-pointer transition-all duration-300 group">
                    <div className="h-10 w-10 rounded-full bg-indigo-400/10 flex justify-center transition-all duration-300 ">
                    <LuMapPin className="text-indigo-400 text-xl mt-2 group-hover:-translate-y-1 group-hover:text-indigo-300 transition-all duration-300" /></div>
                    <div>
                        <p className="text-xs uppercase font-medium tracking-[0.2em] text-indigo-300 group-hover:text-indigo-200
                            transition-colors duration-300">
                            Location
                        </p>
                        <p className="mt-1 text-base font-medium text-white transition-colors duration-300 group-hover:text-indigo-100">Haryana,India</p></div>
                </div>
                <div className="flex items-start gap-6 cursor-pointer transition-all duration-300 group">
                    <div className="h-10 w-10 rounded-full bg-indigo-400/10 flex justify-center transition-all duration-300 ">
                    <LuBriefcaseBusiness className="text-indigo-400 text-xl mt-2 group-hover:-translate-y-1 group-hover:text-indigo-300 transition-all duration-300" /></div>
                    <div>
                        <p className="text-xs uppercase font-medium tracking-[0.2em] text-indigo-300 group-hover:text-indigo-200
                          transition-colors duration-300">
                            Availability
                        </p>
                        <p className="mt-1 text-base font-medium text-white transition-colors duration-300 group-hover:text-indigo-100">Open to internships & collaborations</p></div>
                </div>


            </div>

        </div>
    );
}
export default ContactInfo;
