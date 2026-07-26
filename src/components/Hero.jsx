function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build & Discover
            <span className="text-blue-500">
              {" "}Amazing Startups
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            Explore innovative startups, discover new ideas,
            and learn about the companies shaping the future.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Explore Startups
            </button>

            <button className="border border-zinc-700 px-6 py-3 rounded-xl hover:border-blue-500 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold">
            🚀 Startup Lab
          </h2>

          <p className="mt-4 text-gray-400">
            Where ideas meet innovation.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;