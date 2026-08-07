import { useRef, useState } from "react";

function BrowserMockup({ image }) {
    const cardRef = useRef(null);

    const [transform, setTransform] = useState(
        "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)"
    );

    const [spotlight, setSpotlight] = useState({
        x: 50,
        y: 50,
    });
    const handleMouseMove = (e) => {
        const card = cardRef.current;

        if (!card) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setSpotlight({

            x: (x / rect.width) * 100,

            y: (y / rect.height) * 100,

        });
        const rotateY = ((x - rect.width / 2) / rect.width) * 10;
        const rotateX = -((y - rect.height / 2) / rect.height) * 10;

        setTransform(`
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.02)
        `);
    };

    const handleMouseLeave = () => {
        setTransform(
            "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)"
        );

        setSpotlight({
            x: 50,
            y: 50,
        });
    };

    return (
        
        <div className="group relative mx-auto w-full max-w-2xl">

            {/* Background Glow */}

            <div
                className="
                    browser-glow
                    absolute
                    -inset-6
                    -z-10
                    rounded-[40px]
                    bg-gradient-to-r
                    from-indigo-500/20
                    via-violet-500/10
                    to-cyan-500/20
                    blur-3xl
                "
            />

            {/* Browser */}

            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transform }}
                className="
                    float-browser
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-[#0f1117]/80
                    backdrop-blur-xl
                    shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                    transition-all
                    duration-300
                    will-change-transform
                    group-hover:border-indigo-400/30
                    group-hover:shadow-[0_35px_90px_rgba(99,102,241,0.25)]
                "
            >

                {/* Browser Toolbar */}

                <div className="flex items-center gap-4 border-b border-white/10 px-5 py-4">

                    <div className="flex gap-2">

                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />

                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />

                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />

                    </div>

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

                {/* Screenshot */}

                <div
                    className="
        relative
        h-[520px]
        overflow-hidden
    "
                >

                    {/* Glass Reflection */}
                    <div
                        className="
        pointer-events-none
        absolute
        inset-0
        z-20
        transition-all
        duration-150
    "
                        style={{
                            background: `
        radial-gradient(
            circle at ${spotlight.x}% ${spotlight.y}%,
            rgba(255,255,255,.14),
            transparent 35%
        )
        `,
                        }}
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            z-10
                            bg-gradient-to-br
                           from-white/5
                            via-transparent
                            to-transparent
                            
                        "
                    />

                    <img
                        src={image}
                        alt="Project Preview"
                        className="
w-full
object-cover
object-top
transition-transform
duration-[7000ms]
ease-linear
group-hover:-translate-y-[45%]
"
                    />

                </div>

                {/* Footer */}

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