// import AboutHeading from "./aboutHeading";
// import ProfileCard from "./profileCard";
import InfoCard from "./infoCards";
import { FaMapPin } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
// function About() {

//     return (
//         <section id="about" className=" relative px-6 py-4">
//             {/* <div className="relative"> */}
//             <AboutHeading />

//             {/*  Profile Card */}
//             <div className="flex flex-col lg:flex-row ml-30 items-center justify-between gap-0">

//                 {/* Left */}
//                 <div className="shrink-0">
//                     <ProfileCard />
//                 </div>

//                 {/* Right */}
//               <div className="flex flex-col mx-auto max-w-xl lg:self-start">
//                     {/* <p>I'm Kirti, a final year Computer Science & Engineering student at University Institute of Engineering & Technology, Kurukshetra with a strong interest in full-stack web development. I enjoy building web applications that are not only functional but also intuitive, responsive, and user-friendly.</p> */}
//                     <p className="text-lg leading-8 text-gray-300">
//                         I'm{" "}<span className="font-semibold text-white">Kirti</span>
//                         , a{" "}<span className="text-indigo-300 font-medium">
//                         final year Computer Science & Engineering
//                         </span>{" "}
//                         student at{" "}
//                         <span className="font-medium text-cyan-300">
//                            University Institute of Engineering & Technology, Kurukshetra
//                         </span>{" "}
//                         with a passion for{" "}
//                         <span className="font-medium text-indigo-300">
//                             Full Stack Web Development
//                         </span>
//                         . I enjoy building web applications that are{" "}
//                         <span className="text-white font-medium">
//                             functional
//                         </span>
//                         ,{" "}
//                         <span className="text-white font-medium">
//                             intuitive
//                         </span>
//                         , and{" "}
//                         <span className="text-white font-medium">
//                             user-friendly
//                         </span>
//                         .
//                     </p>
//                 </div>

//             </div>

//             {/* </div> */}
//         </section>
//     )
// }

// export default About;
import AboutHeading from "./aboutHeading";
import ProfileCard from "./profileCard";

function About() {
  return (
    <section id="about" className="relative px-6 py-8">
      <AboutHeading />

      <div className="relative mr-20 mt-14 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-20">

        {/* Left - Profile Card */}
        <div className="shrink-0 ">
          <ProfileCard />
        </div>

        {/* Right - About Content */}
        <div className="max-w-2xl lg:pt-6 mx-8 mt-5">
          <p className="text-[18px] leading-9 text-gray-300 text-justify">
  I'm{" "}
  <span className="font-semibold text-white">
    Kirti
  </span>
  , a final year{" "}
  <span className="font-semibold text-indigo-300">
    Computer Science & Engineering
  </span>{" "}
  student at{" "}
  <span className="font-semibold text-cyan-300">
    UIET Kurukshetra
  </span>
  . I enjoy building modern web applications with a strong focus on{" "}
  <span className="font-semibold text-white">
    clean code
  </span>
  ,{" "}
  <span className="font-semibold text-white">
    intuitive user experiences
  </span>
  , and{" "}
  <span className="font-semibold text-white">
    scalable solutions
  </span>
  .
</p>
<p className="mt-8 text-[18px] leading-9 text-gray-300 [text-align:justify]">
  Through academic projects and continuous learning, I've strengthened my skills
  in <span className="font-semibold text-indigo-300">React</span>,{" "}
  <span className="font-semibold text-indigo-300">Node.js</span>,{" "}
  <span className="font-semibold text-indigo-300">Express</span>, and{" "}
  <span className="font-semibold text-indigo-300">MongoDB</span>. I believe in collaborating effectively, and embracing new
  challenges that help me grow both technically and personally while delivering
  meaningful digital experiences.
</p>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
  <InfoCard
    icon={<FaMapPin size={15} />}
    title="Based In"
    value="Haryana, India"
  />

  <InfoCard
    icon={<FaBookOpen size={15} />}
    title="Currently Learning"
    value="Next.js & TypeScript"
  />

  <InfoCard
    icon={<FaBriefcase size={15} />}
    title="Looking For"
    value="Full Stack Internship"
  />
</div>
          {/* <p className="mt-6 text-lg leading-8 text-gray-300">
            Over time, I've developed experience with the MERN stack, building
            projects that have strengthened my understanding of both frontend
            and backend development. I enjoy writing clean, maintainable code
            and creating applications that solve real-world problems.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            I'm always eager to learn new technologies, improve my
            problem-solving skills, and collaborate on projects that challenge
            me to grow as a developer while creating meaningful digital
            experiences.
          </p> */}
        </div>
        

      </div>
    </section>
  );
}

export default About;
