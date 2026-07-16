function AboutHeading() {
  return (
    <div className="text-center">

      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/5
          px-6
          py-2
          text-sm
          uppercase
          tracking-[0.35em]
          text-gray-300
        "
      >
        Get To Know Me
      </div>

      <h2
        className="
          mt-8
          text-6xl
          md:text-7xl
          font-black
          tracking-tight
        "
      >
        <span className="text-white">
          About 
        </span>

        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          {"  "}Me
        </span>

      </h2>

      <p
        className="
          mt-6
          max-w-2xl
          mx-auto
          text-lg
          leading-8
          text-gray-400
        "
      >
        Curious mind. Passionate developer.
        Lifelong learner. Let's build something
        incredible together.
      </p>

    </div>
  );
}

export default AboutHeading;