import { HiArrowDownTray } from "react-icons/hi2";

function ResumeButton() {
    return (
        <button
            className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-cyan-400/40
                bg-white/[0.03]
                px-8
                py-4
                text-lg
                font-medium
                text-white
                backdrop-blur-xl
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(56,189,248,.3)]
            "
        >
            <HiArrowDownTray
                className="
                    text-2xl
                    transition-transform
                    group-hover:translate-y-1
                "
            />

            Download Resume
        </button>
    );
}

export default ResumeButton;