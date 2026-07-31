import React from "react";
import { CATEGORY_ACCENT } from "./skillsData";

/**
 * A single technology node in the constellation.
 * `skill.x` / `skill.y` are literal pixel coordinates inside the fixed
 * design canvas (see skillsData.js) — the only inline style here is
 * that positioning, which is unavoidable since it's per-node computed
 * data. Everything visual is a Tailwind class.
 */
export default function SkillNode({ skill, isActive, isDimmed, onHover, onLeave }) {
  const accent = CATEGORY_ACCENT[skill.category];
  const Icon = skill.Icon;

  return (
    <button
      type="button"
      onMouseEnter={() => onHover(skill.id)}
      onFocus={() => onHover(skill.id)}
      onMouseLeave={onLeave}
      onBlur={onLeave}
      className={[
        "group absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",
        "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded-full",
        "bg-transparent border-0 p-0 m-0 cursor-pointer",
        `skill-float-${skill.floatVariant}`,
      ].join(" ")}
      style={{ left: `${skill.x}px`, top: `${skill.y}px` }}
      aria-label={skill.name}
    >
      <div className={`skill-float-${skill.floatVariant}`}>
      <span
        className={[
          "relative flex items-center justify-center",
          "w-16 h-16 rounded-full",
          "bg-white/5 backdrop-blur-md border transition-all duration-500 ease-out",
          isActive
            ? `border-white/40 scale-125 ${accent.activeShadow}`
            : isDimmed
            ? "border-slate-800 opacity-30 scale-95"
            : `border-slate-700/70 ${accent.ring} opacity-90 hover:scale-110`,
        ].join(" ")}
      >
        <span
          className={[
            "absolute inset-0 rounded-full blur-md transition-opacity duration-500",
            accent.bgGlow,
            isActive ? "opacity-70" : "opacity-0 group-hover:opacity-40",
          ].join(" ")}
        />
        <Icon
          className={[
            "relative transition-transform duration-500 ease-out text-2xl",
            accent.text,
            isActive ? "scale-125" : "scale-100",
          ].join(" ")}
        />
      </span>

      <span
        className={[
          "mt-2 text-xs font-medium tracking-wide whitespace-nowrap",
          "transition-all duration-300",
          isActive
            ? "text-white opacity-100 translate-y-0"
            : "text-slate-400 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0",
        ].join(" ")}
      >
        {skill.name}
      </span>
      </div>
    </button>
  );
}