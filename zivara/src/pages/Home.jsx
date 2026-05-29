function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-10 py-32 text-center">

        <div className="relative z-10 max-w-6xl mx-auto bg-white/20 backdrop-blur-md rounded-[40px] p-16 border border-white/30 shadow-2xl">

          <h1 className="text-6xl font-bold text-blue-950 max-w-5xl mx-auto leading-tight">
            Smarter Medical Billing.
            Stronger Revenue.
          </h1>

          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-8">
            Zivara Healthcare Solutions helps healthcare providers streamline
            billing, reduce denials, and maximize collections — without the
            high costs of traditional RCM companies.
          </p>

          <div className="mt-8 text-lg text-gray-800 space-y-2">
            <p>✔ Affordable pricing</p>
            <p>✔ Faster reimbursements</p>
            <p>✔ Complete transparency</p>
          </div>

          <a
            href="mailto:zivarahealthcaresolution@gmail.com"
            className="mt-10 inline-block bg-blue-800 text-white px-8 py-4 rounded-2xl text-lg hover:bg-blue-900 transition shadow-xl"
          >
            Start Growing Your Revenue
          </a>

        </div>

      </section>


      {/* Who We Are */}
      <section className="px-10 py-24">

        <div className="max-w-5xl mx-auto text-center bg-white/25 backdrop-blur-md rounded-[40px] p-16 border border-white/30 shadow-2xl">

          <h2 className="text-5xl font-bold text-blue-950">
            Who We Are
          </h2>

          <p className="mt-8 text-xl text-gray-700 leading-9">
            At Zivara Healthcare Solutions, we specialize in delivering
            reliable and efficient medical billing services for healthcare
            providers across the USA.
          </p>

          <p className="mt-6 text-xl text-gray-700 leading-9">
            Our team of experienced AR specialists and billing experts
            ensures that your revenue cycle runs smoothly from start to finish.
          </p>

          <p className="mt-6 text-xl text-gray-700 leading-9">
            We combine industry expertise with a client-first approach —
            helping practices improve cash flow, reduce administrative stress,
            and focus on patient care.
          </p>

        </div>

      </section>


      {/* Key Benefits */}
      <section className="px-10 py-24">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-blue-950">
            Key Benefits
          </h2>

          <p className="mt-4 text-gray-700 text-xl">
            Why healthcare providers trust Zivara Healthcare Solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">

          <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-2xl">
            <h3 className="text-2xl font-bold text-blue-900">
              Cost-Effective Solutions
            </h3>

            <p className="mt-4 text-gray-700">
              Flexible pricing starting at just $1–$2 per patient,
              making services accessible for practices of all sizes.
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-2xl">
            <h3 className="text-2xl font-bold text-blue-900">
              Faster Claim Processing
            </h3>

            <p className="mt-4 text-gray-700">
              Accurate claim submissions and quick turnaround times
              to reduce delays and accelerate payments.
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-2xl">
            <h3 className="text-2xl font-bold text-blue-900">
              Reduced Denials
            </h3>

            <p className="mt-4 text-gray-700">
              Proactive denial management and appeal processes help
              recover lost revenue and minimize write-offs.
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-2xl">
            <h3 className="text-2xl font-bold text-blue-900">
              Improved Revenue Cycle
            </h3>

            <p className="mt-4 text-gray-700">
              From claim creation to final payment, we optimize every
              step to increase overall collections.
            </p>
          </div>

        </div>

      </section>


      {/* Call To Action */}
      <section className="px-10 py-24">

        <div className="max-w-5xl mx-auto text-center bg-blue-900/75 backdrop-blur-md rounded-[40px] p-16 border border-white/20 shadow-2xl text-white">

          <h2 className="text-5xl font-bold">
            Ready to Maximize Your Revenue?
          </h2>

          <p className="mt-6 text-xl max-w-3xl mx-auto leading-8">
            Partner with Zivara Healthcare Solutions and experience
            hassle-free medical billing.
          </p>

          <a
            href="mailto:zivarahealthcaresolution@gmail.com"
            className="mt-10 inline-block bg-gray-50 text-blue-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition shadow-xl"
          >
            Contact Us
          </a>

        </div>

      </section>

    </div>
  );
}

export default Home;