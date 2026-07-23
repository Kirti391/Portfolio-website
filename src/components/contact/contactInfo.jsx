import { LuMail, LuMapPin, LuBriefcaseBusiness } from "react-icons/lu";

function ContactInfo() {
  return (
    <div className="space-y-10">

        {/* description */}

        {/* details */}
        <div >
            <p className="text-xs uppercase font-medium tracking-[0.2em] text-indigo-300">
                <LuMail className="text-indigo-400 text-xl" />
                Email
            </p>
            <p>jainwarkirti8@gmail.com</p>

            <p className="text-xs uppercase font-medium tracking-[0.2em] text-indigo-300">
                <LuMapPin className="text-indigo-400 text-xl"/>
                Location
            </p>
            <p>Haryana,India</p>
            
            <p className="text-xs uppercase font-medium tracking-[0.2em] text-indigo-300">
                <LuBriefcaseBusiness className="text-indigo-400 text-xl"/>
                Availability
            </p>
            <p>Open to internships</p>



        </div>
    
    </div>
  );
}
export default ContactInfo;
