function Home() {
  return (
    <section
      id="home"
      className="px-4 md:px-10 py-10 md:py-24"
    >
      <div className="max-w-6xl mx-auto bg-white/20 backdrop-blur-md rounded-2xl md:rounded-[40px] p-5 md:p-16 border border-white/30 shadow-2xl text-center">

        <h1 className="text-3xl md:text-6xl font-bold text-blue-950 leading-tight">
          Empowering Healthcare Professionals & Practices
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-700 max-w-5xl mx-auto leading-7 md:leading-9">
          Empowering healthcare professional and practices with reliable,
          transparent, end-to-end revenue cycle operations.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-5 shadow-xl">
            <h3 className="text-xl font-semibold text-blue-900">
              ✔ Cost Effective Solutions
            </h3>
            <p className="mt-3 text-gray-700">
              Financial success with cost effective solutions.
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-5 shadow-xl">
            <h3 className="text-xl font-semibold text-blue-900">
              ✔ Revenue Growth
            </h3>
            <p className="mt-3 text-gray-700">
              Reduce operational cost and achieve upto 20-30% revenue boost.
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-5 shadow-xl">
            <h3 className="text-xl font-semibold text-blue-900">
              ✔ Trusted Support
            </h3>
            <p className="mt-3 text-gray-700">
              24/7 customer support with 100% transparency and detailed reporting.
            </p>
          </div>

        </div>

        <a
          href="mailto:zivarahealthcaresolution@gmail.com"
          className="mt-8 inline-block bg-blue-800 text-white px-8 py-4 rounded-2xl text-lg hover:bg-blue-900 transition shadow-xl"
        >
          Schedule a Free Consultation
        </a>

        <p className="mt-5 text-blue-900 font-semibold text-lg">
          Get connected in 2 Hours
        </p>

      </div>
    </section>
  );
}

export default Home;