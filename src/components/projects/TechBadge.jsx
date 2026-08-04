// function TechBadge({ title }) {
//     return (
//         <span>{title}</span>
//     );
// }
function TechBadge({ title }) {
    return (
        <span
            className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                font-medium
                text-slate-300
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-indigo-400/40
                hover:bg-indigo-500/10
                hover:text-white
            "
        >
            {title}
        </span>
    );
}

export default TechBadge;