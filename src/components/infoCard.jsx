function InfoCard({title,description}){

    return(
    <div  className="
                rounded-2xl
                border border-white/10
                bg-[#111318]/70
                backdrop-blur-md
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-indigo-400/30
                hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]
            ">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="mt-3 text-gray-400 leading-7">{description}</p>
    
    </div>
    );
}

export default InfoCard;