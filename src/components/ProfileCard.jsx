import profile from "../assets/Kirti.jpeg";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { HiOutlineEnvelope } from "react-icons/hi2";

function ProfileCard() {
  return (
    <div
      className="
        relative
        w-[430px]
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
          border-cyan-400/30
          shadow-[0_0_80px_rgba(56,189,248,.25)]
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
            h-72
            w-72
            object-cover
          "
        />

      </div>

      {/* Name */}

      <h2
        className="
          mt-8
          text-center
          text-5xl
          font-bold
          text-white
        "
      >
        Kirti
      </h2>

      {/* Role */}

      <p
        className="
          mt-2
          text-center
          text-xl
          font-medium
          bg-gradient-to-r
          from-violet-400
          to-cyan-400
          bg-clip-text
          text-transparent
        "
      >
        Full Stack Developer
      </p>

      {/* Status */}

      <div className="mt-6 flex justify-center">

        <div
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-green-500/20
            bg-green-500/10
            px-5
            py-2
          "
        >
          <span
            className="
              h-3
              w-3
              rounded-full
              bg-green-400
              animate-pulse
            "
          />

          <span className="text-green-300">
            Open to Internship
          </span>

        </div>

      </div>

      {/* Social */}

      <div
        className="
          mt-10
          flex
          justify-center
          gap-5
        "
      >

        <button className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400">
          <FaGithub />
        </button>

        <button className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400">
          <FaLinkedinIn />
        </button>

        <button className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400">
          <HiOutlineEnvelope />
        </button>

      </div>

    </div>
  );
}

export default ProfileCard;