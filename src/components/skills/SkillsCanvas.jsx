import React, { useMemo, useState } from "react";
import SkillNode from "./SkillNode";
import { SKILLS, CONNECTIONS, CENTER, CATEGORY_ACCENT } from "./skillsData";

// Deterministic pseudo-random star field (no Math.random so layout
// never shifts between renders/SSR passes)
const STARS = Array.from({ length: 42 }).map((_, i) => {
  const seed = i * 12.9898;
  const frac = (Math.sin(seed) * 43758.5453) % 1;
  const frac2 = (Math.sin(seed * 1.7) * 12543.233) % 1;
  return {
    id: i,
    x: Math.abs(frac) * 100,
    y: Math.abs(frac2) * 100,
    size: 1 + (i % 3),
    variant: i % 5,
  };
});

export default function SkillsCanvas() {
  const [activeId, setActiveId] = useState(null);

  // id -> skill lookup for connector line coordinates
  const byId = useMemo(() => {
    const map = {};
    SKILLS.forEach((s) => (map[s.id] = s));
    return map;
  }, []);

  const isLineActive = (a, b) =>
    activeId !== null && (activeId === a || activeId === b);

  return (
    // Deliberately inline: the CSS `aspect-ratio` property needs no
    // Tailwind config, no PostCSS pipeline, and no external stylesheet
    // to take effect — it cannot silently fail the way an unscanned
    // Tailwind arbitrary-value class or a misresolved CSS import can.
    // This is the one style prop in the file that's non-negotiable.
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "980px",
        margin: "0 auto",
        aspectRatio: "10 / 7",
      }}
    >
      <div className="absolute inset-0">
        {/* Star field */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {STARS.map((star) => (
            <span
              key={star.id}
              className={`star-twinkle absolute rounded-full bg-slate-400/70`}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.variant * 0.7}s`,
              }}
            />
          ))}
        </div>

        {/* SVG connector lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>

          {/* Center -> node lines */}
          {SKILLS.map((skill) => {
            const active = isLineActive(skill.id, skill.id);
            return (
              <line
                key={`center-${skill.id}`}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={skill.x}
                y2={skill.y}
                stroke="url(#lineGradient)"
                strokeWidth={active ? 0.35 : 0.15}
                opacity={active ? 0.9 : activeId ? 0.08 : 0.25}
                className="line-draw transition-all duration-500 ease-out"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}

          {/* Intra-category relationship lines */}
          {CONNECTIONS.map(([a, b]) => {
            const from = byId[a];
            const to = byId[b];
            if (!from || !to) return null;
            const active = isLineActive(a, b);
            const accent = CATEGORY_ACCENT[from.category];
            return (
              <line
                key={`${a}-${b}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={accent.stroke}
                strokeWidth={active ? 0.3 : 0.12}
                opacity={active ? 0.85 : activeId ? 0.08 : 0.3}
                className="transition-all duration-500 ease-out"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>

        {/* Center node */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%` }}
        >
          <span className="center-pulse absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 blur-2xl" />
          <span className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center bg-[#0B1220]/90 backdrop-blur-xl border border-slate-700 shadow-[0_0_40px_rgba(139,92,246,0.35)]">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              KS
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-wide mt-0.5">
              Developer
            </span>
          </span>
        </div>

        {/* Technology nodes */}
        {SKILLS.map((skill) => (
          <SkillNode
            key={skill.id}
            skill={skill}
            isActive={activeId === skill.id}
            isDimmed={activeId !== null && activeId !== skill.id}
            onHover={setActiveId}
            onLeave={() => setActiveId(null)}
          />
        ))}
      </div>
    </div>
  );
}