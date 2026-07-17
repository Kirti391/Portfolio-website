function InfoCard({ icon, title, value }) {
  return (
    <div className="rounded-lg border border-cyan-400/20 bg-[#111827]/70 px-3 py-1.5 transition-all duration-300 hover:border-cyan-300/40">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-300 text-sm">
          {icon}
        </div>

        <div className="leading-tight">
          <p className="text-[10px] uppercase tracking-wide text-gray-500">
            {title}
          </p>

          <p className="text-xs font-medium text-white">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}