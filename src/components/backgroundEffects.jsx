function BackgroundEffects() {
  return (
    <>
      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Purple Glow */}

      <div
        className="
          absolute
          left-1/2
          top-64
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/10
          blur-[180px]
        "
      />

      {/* Blue Glow */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

    </>
  );
}

export default BackgroundEffects;