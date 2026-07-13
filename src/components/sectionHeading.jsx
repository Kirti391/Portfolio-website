function SectionHeading({ title, subtitle }) {
    return (
        <div className="text-center">
            <h2 className="text-5xl font-bold tracking-tight text-white">
                {title}
            </h2>

            <p className="mt-4 text-lg text-gray-400">
                {subtitle}
            </p>

            {/* Accent Line */}
            <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"></div>
        </div>
    );
}

export default SectionHeading;