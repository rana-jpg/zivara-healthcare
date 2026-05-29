function About() {
  return (
    <div className="min-h-screen px-10 py-24">

      <div className="max-w-5xl mx-auto text-center bg-white/30 backdrop-blur-md rounded-3xl p-16 shadow-2xl border border-white/40">

        <h1 className="text-6xl font-bold text-blue-950">
          About Us
        </h1>

        <p className="mt-10 text-2xl text-blue-800 font-semibold">
          Our Mission
        </p>

        <p className="mt-4 text-xl text-gray-700 leading-9">
          To simplify medical billing and empower healthcare providers
          with efficient, transparent, and affordable revenue cycle solutions.
        </p>

        <div className="mt-16">

          <p className="text-2xl text-blue-800 font-semibold">
            Our Vision
          </p>

          <p className="mt-4 text-xl text-gray-700 leading-9">
            To become a trusted global partner in healthcare billing by
            delivering consistent results and innovative solutions.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;