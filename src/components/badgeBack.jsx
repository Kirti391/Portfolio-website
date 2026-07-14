import avatar from "./assets/avatar.png";

function BadgeBack() {
    return (
        <div
            className="
                absolute
                inset-0

                flex

                flex-col

                items-center

                justify-center

                rounded-[30px]

                border
                border-white/10

                bg-[#111318]/90

                backdrop-blur-xl

                rotate-y-180

                [backface-visibility:hidden]
            "
        >
            {/* Glow */}

            <div
                className="
                    absolute

                    h-52
                    w-52

                    rounded-full

                    bg-indigo-500/20

                    blur-3xl
                "
            />

            {/* Avatar */}

            <img
                src={avatar}
                alt="Avatar"
                className="
                    relative

                    z-10

                    h-44
                    w-44

                    animate-float

                    rounded-full

                    object-cover
                "
            />

            {/* Bubble */}

            <div
                className="
                    mt-8

                    rounded-full

                    bg-white

                    px-5

                    py-2

                    text-sm

                    font-medium

                    text-black
                "
            >
                Hi 👋
            </div>

            <h3
                className="
                    mt-8

                    text-2xl

                    font-bold

                    text-white
                "
            >
                Kirti
            </h3>

            <p className="mt-2 text-indigo-300">
                Learning • Building • Growing
            </p>

        </div>
    );
}

export default BadgeBack;