function InfoCard({ icon, title, description }) {
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
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-indigo-400/30
                hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]
            "
        >
            {/* Hover Glow */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-indigo-500/10
                    via-transparent
                    to-cyan-500/10
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
            />

            {/* Icon */}
            <div
                className="
                    relative
                    z-10
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-indigo-500/10
                    text-xl
                    text-indigo-300
                    transition-transform
                    duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                "
            >
                {icon}
            </div>

            {/* Title */}
            <h3
                className="
                    relative
                    z-10
                    mt-6
                    text-xl
                    font-semibold
                    text-white
                "
            >
                {title}
            </h3>

            {/* Description */}
            <p
                className="
                    relative
                    z-10
                    mt-4
                    leading-7
                    text-gray-400
                "
            >
                {description}
            </p>
        </div>
    );
}

export default InfoCard;