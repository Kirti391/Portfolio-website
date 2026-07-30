import React from "react";
import SkillsCanvas from "./SkillsCanvas";
import "./skills.css";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      {/* ambient background glow, consistent with the rest of the site */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
            Tech Stack
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            A living{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              constellation
            </span>{" "}
            of tools
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Every technology I reach for, mapped around the way I actually
            work — hover a star to see it connect.
          </p>
        </div>

        <SkillsCanvas />
      </div>
    </section>
  );
}