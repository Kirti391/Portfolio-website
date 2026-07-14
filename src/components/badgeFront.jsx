import { FiBriefcase } from "react-icons/fi";

function BadgeFront({ image }) {
    return (
        <div
            className="
                absolute
                inset-0

                overflow-hidden

                rounded-[30px]

                border
                border-white/10

                bg-[#111318]/80

                backdrop-blur-xl

                [backface-visibility:hidden]
            "
        >
          <div
className="
absolute

inset-0

translate-x-[-120%]

bg-gradient-to-r

from-transparent

via-white/10

to-transparent

transition-all

duration-1000

group-hover:translate-x-[120%]
"/>
            {/* Image */}

            <div className="overflow-hidden p-4">

                <img
                    src={image}
                    alt="Kirti"
                    className="
                        h-[250px]
                        w-full

                        rounded-2xl

                        object-cover

                        transition-all
                        duration-700

                        group-hover:scale-105
                    "
                />

            </div>

            {/* Content */}

            <div className="px-6">

                <h3
                    className="
                        text-2xl
                        font-bold
                        text-white
                    "
                >
                    Kirti
                </h3>

                <p
                    className="
                        mt-1
                        text-indigo-300
                    "
                >
                    Full Stack Developer
                </p>
<div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">

<div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/>

<span>
Available for Internships
</span>

</div>

            </div>
        </div>
    );
}

export default BadgeFront;