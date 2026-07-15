import { HiOutlineUser } from "react-icons/hi2";

function InfoCard({
    icon = <HiOutlineUser />,
    title,
    description,
    accent = "from-violet-500 to-cyan-400",
}) {
    return (
        <div
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-violet-400/30
            "
        >
            {/* Glow */}
            <div
                className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-violet-500/10
                    to-cyan-500/5
                "
            />

            <div className="relative z-10">

                <div
                    className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-violet-500/20
                        to-cyan-500/20
                        text-3xl
                        text-white
                    "
                >
                    {icon}
                </div>

                <h3 className="mt-6 text-3xl font-bold text-white">
                    {title}
                </h3>

                <div
                    className={`mt-3 h-1 w-16 rounded-full bg-gradient-to-r ${accent}`}
                />

                <p className="mt-6 text-gray-400 leading-8">
                    {description}
                </p>

            </div>
        </div>
    );
}

export default InfoCard;