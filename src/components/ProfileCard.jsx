import { useState } from "react";
import profile from "../assets/Kirti.jpeg";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  HiOutlineEnvelope,
} from "react-icons/hi2";

function TechChip({ text }) {
  return (
    <span
      className="
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-500/10
        px-4
        py-2
        text-sm
        text-cyan-300
      "
    >
      {text}
    </span>
  );
}

function ProfileCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group relative mx-auto h-[560px] w-[350px] cursor-pointer [perspective:1800px]"
      onClick={() => setFlipped(!flipped)}
    >
      {/* Flip Container */}

      <div
        className={`
          relative
          h-full
          w-full
          preserve-3d
          transition-transform
          duration-700
          ${flipped ? "rotate-y-180" : ""}
        `}
      >
        {/* ================= FRONT ================= */}

        <div
          className="
            absolute
            inset-0
            backface-hidden
            rounded-[34px]
            border
            border-cyan-400/40
            bg-gradient-to-b
            from-[#17172B]
            via-[#111827]
            to-[#081018]
            p-8
            shadow-[0_0_70px_rgba(56,189,248,.18)]
          "
        >
          {/* Halo */}

          <div
            className="
              absolute
              left-1/2
              top-16
              h-60
              w-60
              -translate-x-1/2
              rounded-full
              border
              border-cyan-400/20
              shadow-[0_0_80px_rgba(56,189,248,.2)]
            "
          />

          {/* Image */}

          <div className="relative flex justify-center">

            <img
              src={profile}
              alt="Kirti"
              className="
                relative
                z-10
               h-60 w-60
                rounded-full
                border-[6px]
                border-[#111827]
                object-cover
              "
            />

          </div>

          <h2 className="mt-8 text-center text-4xl font-bold text-white">
            Kirti
          </h2>

          <p className="mt-2 text-center text-lg text-violet-300">
            Frontend Developer
          </p>

          <p className="text-center text-gray-400">
            Computer Science Student
          </p>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <div className="flex justify-center">

            <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">

              <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm text-green-300">
                Available for Internship
              </span>

            </div>

          </div>

          <div className="mt-10 flex justify-center gap-4">

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-cyan-400 hover:text-cyan-400">
              <FaGithub />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-cyan-400 hover:text-cyan-400">
              <FaLinkedinIn />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-cyan-400 hover:text-cyan-400">
              <HiOutlineEnvelope />
            </button>

          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Click to view developer profile →
          </p>

        </div>

        {/* ================= BACK ================= */}

        <div
          className="
            absolute
            inset-0
            rotate-y-180
            backface-hidden
            rounded-[34px]
            border
            border-cyan-400/40
            bg-gradient-to-b
            from-[#17172B]
            via-[#111827]
            to-[#081018]
            p-8
          "
        >
          <div className="flex h-full flex-col items-center justify-between">

            <div>

              <p className="text-center text-sm uppercase tracking-[0.35em] text-cyan-300">
                Developer Identity
              </p>

              <div className="mt-8 flex justify-center">

                {/* Placeholder Avatar */}

                <div className="flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-5xl">
                  👨‍💻
                </div>

              </div>

              <h2 className="mt-6 text-center text-3xl font-bold text-white">
                KIRTI
              </h2>

              <p className="mt-2 text-center text-cyan-300">
                DESIGN • BUILD • INNOVATE
              </p>

            </div>

            <blockquote className="text-center italic leading-8 text-gray-300">
              "Crafting elegant digital experiences with clean code and thoughtful design."
            </blockquote>

            <div className="flex flex-wrap justify-center gap-3">

              <TechChip text="React" />
              <TechChip text="Tailwind" />
              <TechChip text="Node.js" />
              <TechChip text="MongoDB" />

            </div>

            <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">

              <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm text-green-300">
                Available for Internship
              </span>

            </div>

            <div className="flex gap-4">

              <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-white transition hover:border-cyan-400">
                GitHub
              </button>

              <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-white transition hover:border-cyan-400">
                LinkedIn
              </button>

              <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-white transition hover:border-cyan-400">
                Email
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;