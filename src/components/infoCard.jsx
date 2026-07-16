import { HiOutlineUser } from "react-icons/hi2";

function InfoCard({ title, description, icon }) {
    return (
        <div
           className="
group
relative
min-h-[220px]
overflow-hidden
rounded-3xl
border
border-white/10
bg-[#111827]/60
backdrop-blur-xl
px-7
py-6
transition-all
duration-500
hover:-translate-y-2
hover:border-cyan-400/40
hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)]
"
        >
            {/* Hover Glow */}
            <div
                className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-cyan-500/5
                    via-transparent
                    to-violet-500/5
                "
            />

            {/* Content */}
            <div className="relative z-10">

                {/* Icon */}
                {icon && (
                    <div
                        className="
                            mb-4
                            flex
                           h-12 w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            from-cyan-500/20
                            to-violet-500/20
                           text-xl
                            text-cyan-300
                        "
                    >
                        {icon}
                    </div>
                )}

                {/* Accent Bar */}
                <div
                    className="
                        mb-3
                        h-1
                        w-14
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-400
                        to-violet-400
                    "
                />

                {/* Title */}
                <h3
                    className="
                        text-xl
                        font-semibold
                        tracking-tight
                        text-white
                    "
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className="
                        mt-3
                        leading-7 text-[15px]
                        text-gray-400
                    "
                >
                    {description}
                </p>

            </div>
        </div>
    );
}

export default InfoCard;