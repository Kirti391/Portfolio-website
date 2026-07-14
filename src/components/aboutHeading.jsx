function AboutHeading({ title, subtitle }) {
    return (
        <div className="flex flex-col items-center text-center">

            <span
                className="
                mb-4
                rounded-full
                border
                border-indigo-400/20
                bg-indigo-500/10
                px-4
                py-2
                text-sm
                tracking-[0.2em]
                uppercase
                text-indigo-300
            "
            >
                {title}
            </span>

            <h2
                className="
                text-5xl
                font-bold
                tracking-tight
                text-white
            "
            >
                Designing Experiences,
                <br />
                Not Just Interfaces.
            </h2>

            <p
                className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-gray-400
            "
            >
                {subtitle}
            </p>

        </div>
    );
}

export default AboutHeading;