// ProjectButton.jsx
// Two visual variants driven by a single component so both buttons share sizing/behavior:
//  - "filled"  → indigo Live Demo button, arrow slides right on hover
//  - "outline" → glass GitHub button, icon rotates slightly on hover

import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-xl " +
  "px-5 py-2.5 text-sm font-semibold overflow-hidden " +
  "transition-all duration-300 ease-out focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-[#030712]";

const variants = {
  filled:
    "bg-indigo-500 text-white shadow-[0_0_0_1px_rgba(99,102,241,0.4),0_8px_24px_-8px_rgba(99,102,241,0.55)] " +
    "hover:bg-indigo-400 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.6),0_10px_30px_-6px_rgba(99,102,241,0.7)]",
  outline:
    "border border-white/15 bg-white/[0.03] text-slate-200 backdrop-blur-sm " +
    "hover:border-white/25 hover:bg-white/[0.06] hover:text-white",
};

export default function ProjectButton({ href, label, variant = "filled" }) {
  const isDemo = variant === "filled";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={isDemo ? `View live demo: ${label}` : `View source on GitHub: ${label}`}
      className={`${base} ${variants[variant]}`}
    >
      {/* subtle ripple sheen on hover */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -translate-x-full
          bg-gradient-to-r from-transparent via-white/15 to-transparent
          transition-transform duration-700 ease-out
          group-hover/btn:translate-x-full
        "
      />
      <span className="relative z-10">{label}</span>

      {isDemo ? (
        <FiArrowUpRight
          aria-hidden="true"
          className="relative z-10 h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      ) : (
        <FiGithub
          aria-hidden="true"
          className="relative z-10 h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:rotate-12"
        />
      )}
    </a>
  );
}