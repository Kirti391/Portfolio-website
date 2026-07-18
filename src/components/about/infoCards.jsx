function InfoCard({ icon, title, value }) {
  return (
    <div className="rounded-lg border border-indigo-400/20 bg-[#111827]/70 px-4 py-4 transition-all duration-300 hover:border-indigo-300/40">
      <div className="flex  flex-col gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 text-indigo-300 text-sm">
          {icon}
        </div>

        <div className="leading-tight ">
          <p className="text-[12px] uppercase tracking-wide text-gray-500">
            {title}
          </p>
          
            <p className=" text-[6px]">&nbsp; </p>
          <p className="text-xs font-medium text-white">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
export default InfoCard;