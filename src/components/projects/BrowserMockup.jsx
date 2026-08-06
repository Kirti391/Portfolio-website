function BrowserMockup({ image }) {
    return (
        <div className="group relative mx-auto w-full max-w-2xl">

            {/* Background Glow */}
            <div
                className="
                    absolute
                    -inset-6
                    -z-10
                    rounded-[40px]
                    bg-gradient-to-r
                    from-indigo-500/20
                    via-violet-500/10
                    to-cyan-500/20
                    blur-3xl
                    opacity-60
                    transition-all
                    duration-500
                    group-hover:opacity-100
                "
            />

            {/* Browser */}
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-[#0f1117]/80
                    backdrop-blur-xl
                    shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                    transition-all
                    duration-500
                    rotate-[-2deg]
                    group-hover:rotate-0
                    group-hover:-translate-y-3
                    group-hover:border-indigo-400/30
                    group-hover:shadow-[0_35px_90px_rgba(99,102,241,0.22)]
                "
            >

                {/* Browser Toolbar */}

                <div className="flex items-center gap-4 border-b border-white/10 px-5 py-4">

                    {/* Traffic Lights */}

                    <div className="flex gap-2">

                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />

                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />

                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />

                    </div>

                    {/* Address Bar */}

                    <div
                        className="
                            flex-1
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-4
                            py-1.5
                            text-center
                            text-xs
                            tracking-wide
                            text-slate-400
                        "
                    >
                        portfolio.kirti.dev
                    </div>

                </div>

                {/* Screenshot Area */}

                <div className="relative overflow-hidden">

                    {/* Glass Reflection */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            z-10
                            bg-gradient-to-br
                            from-white/10
                            via-transparent
                            to-transparent
                        "
                    />

                    <img
                        src={image}
                        alt="Project Preview"
                        className="
                            w-full
                            aspect-video
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-105
                        "
                    />

                </div>

                {/* Browser Footer */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/10
                        px-5
                        py-3
                        text-xs
                        text-slate-500
                    "
                >
                    <span>Responsive Design</span>

                    <span>Built with React</span>
                </div>

            </div>

        </div>
    );
}

export default BrowserMockup;