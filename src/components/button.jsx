function Button({ text, icon, variant }) {
  const btnStyle =
    variant === "primary"
      ? "flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]"
      : "flex items-center gap-2 rounded-xl border border-white/10 bg-[#111318]/70 px-6 py-3 font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20";

  return (
    <button className={btnStyle}>
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default Button;