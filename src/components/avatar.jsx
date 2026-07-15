function Avatar() {
    return (
        <div className="relative flex flex-col items-center">

            {/* Halo */}

            <div
                className="
                    absolute
                    top-4

                    h-56
                    w-56

                    rounded-full

                    bg-cyan-400/10

                    blur-3xl
                "
            />

            {/* Floating Avatar */}

            <div
                className="
                    relative
                    animate-float
                "
            >

                <svg
                    width="210"
                    height="240"
                    viewBox="0 0 210 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >

                    {/* Hair */}

                    <path
                        d="M63 62C63 32 84 18 105 18C126 18 147 32 147 62V84H63V62Z"
                        fill="#171717"
                    />

                    {/* Face */}

                    <circle
                        cx="105"
                        cy="82"
                        r="40"
                        fill="#FFD7B5"
                    />

                    {/* Eyes */}

                    <ellipse
                        className="animate-blink"
                        cx="92"
                        cy="82"
                        rx="3"
                        ry="4"
                        fill="#111"
                    />

                    <ellipse
                        className="animate-blink"
                        cx="118"
                        cy="82"
                        rx="3"
                        ry="4"
                        fill="#111"
                    />

                    {/* Smile */}

                    <path
                        d="M95 98C99 103 111 103 115 98"
                        stroke="#111"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />

                    {/* Hoodie */}

                    <path
                        d="M55 135
                        C65 115 145 115 155 135
                        V220
                        H55
                        Z"
                        fill="#312E81"
                    />

                    {/* Laptop */}

                    <rect
                        x="55"
                        y="155"
                        width="100"
                        height="50"
                        rx="8"
                        fill="#1E293B"
                    />

                </svg>

            </div>

            {/* Bubble */}

            <div
                className="
                    mt-8

                    rounded-full

                    border

                    border-cyan-400/30

                    bg-cyan-500/10

                    px-6

                    py-3

                    text-cyan-300
                "
            >
                Hi, I'm Kirti 👋
            </div>

        </div>
    );
}

export default Avatar;