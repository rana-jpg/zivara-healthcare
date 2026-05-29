function Pricing() {
  return (
    <div className="min-h-screen px-10 py-24">

      <div className="text-center">

        <h1 className="text-6xl font-bold text-blue-950">
          Pricing
        </h1>

        <p className="mt-6 text-xl text-gray-700">
          Simple. Transparent. Affordable.
        </p>

        <p className="mt-4 text-lg text-gray-600">
          We believe in clear pricing with no hidden costs.
        </p>

      </div>


      <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">

        {/* Per Patient */}
        <div className="bg-white/30 backdrop-blur-md p-10 rounded-3xl text-center border border-white/40 shadow-2xl">

          <h2 className="text-3xl font-bold text-blue-900">
            Per Patient
          </h2>

          <p className="mt-6 text-5xl font-bold text-blue-950">
            $1 – $2
          </p>

          <p className="mt-4 text-gray-700">
            Per patient pricing model for flexible billing solutions.
          </p>

        </div>


        {/* Full Service */}
        <div className="bg-blue-900/80 backdrop-blur-md p-10 rounded-3xl text-center text-white border border-white/20 shadow-2xl">

          <h2 className="text-3xl font-bold">
            Full-Service Package
          </h2>

          <p className="mt-6 text-5xl font-bold">
            $495
          </p>

          <p className="mt-2 text-lg">
            per month
          </p>

          <p className="mt-4 text-blue-100">
            Complete end-to-end revenue cycle management.
          </p>

        </div>


        {/* Setup Fee */}
        <div className="bg-white/30 backdrop-blur-md p-10 rounded-3xl text-center border border-white/40 shadow-2xl">

          <h2 className="text-3xl font-bold text-blue-900">
            Setup Fee
          </h2>

          <p className="mt-6 text-5xl font-bold text-blue-950">
            $395
          </p>

          <p className="mt-4 text-gray-700">
            One-time onboarding and setup fee only.
          </p>

        </div>

      </div>


      {/* Included Services */}
      <div className="mt-24 text-center bg-white/20 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-auto border border-white/30 shadow-2xl">

        <h2 className="text-4xl font-bold text-blue-950">
          What’s Included
        </h2>

        <div className="mt-10 space-y-4 text-xl text-gray-800">

          <p>✔ End-to-end billing services</p>
          <p>✔ AR follow-ups & denial management</p>
          <p>✔ Dedicated support team</p>
          <p>✔ Regular performance reports</p>

        </div>

      </div>

    </div>
  );
}

export default Pricing;