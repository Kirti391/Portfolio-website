function AboutBackground() {
    return (
        <>
            {/* Aurora */}

            <div className="absolute inset-0 -z-20 overflow-hidden">

                <div
                    className="
                    absolute
                    left-0
                    top-20
                    h-[520px]
                    w-[520px]
                    rounded-full
                    bg-indigo-500/10
                    blur-[160px]
                "
                />
                <div
className="
absolute
inset-0
opacity-[0.02]
bg-[url('/noise.png')]
mix-blend-soft-light
"/>

                <div
                    className="
                    absolute
                    right-0
                    bottom-0
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-cyan-500/10
                    blur-[160px]
                "
                />

            </div>

            {/* Grid */}

            <div
                className="
                absolute
                inset-0
                -z-10
                bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                bg-[size:48px_48px]
                opacity-30
            "
            />

            {/* Noise */}

            <div
                className="
                absolute
                inset-0
                -z-10
                opacity-[0.03]
                mix-blend-soft-light
            "
            />

        </>
    );
}

export default AboutBackground;