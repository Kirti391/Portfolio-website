function SectionHeading({title, subtitle}){

    return(
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        
        </div>
    );

}

export default SectionHeading;