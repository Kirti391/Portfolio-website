function BrowserMockup({ image }) {
    return (
       <div
    className="
    group
        relative
        transition-all
        duration-500
        rotate-[-2deg]
        group-hover:rotate-0
        group-hover:-translate-y-3
    "
>

    {/* Glow */}

    <div
        className="
            absolute
            -inset-4
            rounded-[36px]
            bg-gradient-to-r
            from-indigo-500/20
            via-violet-500/10
            to-cyan-500/20
            blur-3xl
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
        "
    />

    {/* Browser */}


        <div
            className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[#111318]/80
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_30px_80px_rgba(99,102,241,0.18)]
                hover:border-indigo-400/30
            "
        >
            {/* Browser Top */}

           <div className="flex items-center gap-3">

    <div className="flex gap-2">

        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />

        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />

        <span className="h-3 w-3 rounded-full bg-[#28C840]" />

    </div>

</div>

<div
    className="
        flex-1
        mx-6
        rounded-full
        border border-white/10
hover:border-indigo-400/30
        bg-white/5
        px-4
        py-1
        text-center
        text-xs
        text-slate-500
    "
>
    https://kirti.dev
</div>

            {/* Screenshot */}

            <div className="overflow-hidden">
                <div
    className="
        pointer-events-none
        absolute
        inset-0
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
aspect-video
object-cover
transition-all
duration-700
ease-out
group-hover:scale-110
"
                />

            </div>

        </div>
        </div>
    );
}

export default BrowserMockup;