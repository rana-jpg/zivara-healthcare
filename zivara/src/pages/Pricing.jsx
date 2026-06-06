function Pricing() {
  return (
    <div className="min-h-screen px-4 md:px-10 py-16 md:py-24">

      {/* Header */}
      <div className="text-center">

        <h1 className="text-3xl md:text-6xl font-bold text-blue-950">
          Pricing
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-700">
          Simple. Transparent. Affordable.
        </p>

        <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-600">
          We believe in clear pricing with no hidden costs.
        </p>

      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20 max-w-6xl mx-auto">

        {/* Collection-Based Model */}
        <div className="bg-white/30 backdrop-blur-md p-6 md:p-10 rounded-2xl md:rounded-3xl text-center border border-white/40 shadow-2xl">

          <h2 className="text-xl md:text-3xl font-bold text-blue-900">
            Collection-Based Model
          </h2>

          <p className="mt-4 md:mt-6 text-3xl md:text-5xl font-bold text-blue-950">
            2.99%
          </p>

          <p className="mt-3 md:mt-4 text-sm md:text-gray-700">
            Competitive pricing starting at just 2.99% of collections.
          </p>

        </div>


        {/* Claim-Based Model */}
        <div className="bg-blue-900/80 backdrop-blur-md p-6 md:p-10 rounded-2xl md:rounded-3xl text-center text-white border border-white/20 shadow-2xl">

          <h2 className="text-xl md:text-3xl font-bold">
            Claim-Based Model
          </h2>

          <p className="mt-4 md:mt-6 text-3xl md:text-5xl font-bold">
            $2 – $3
          </p>

          <p className="mt-2 text-sm md:text-lg">
            per claim
          </p>

          <p className="mt-3 md:mt-4 text-blue-100 text-sm md:text-base">
            Competitive and affordable claim-based pricing for practices of all sizes.
          </p>

        </div>


        {/* Full-Service Package */}
        <div className="bg-white/30 backdrop-blur-md p-6 md:p-10 rounded-2xl md:rounded-3xl text-center border border-white/40 shadow-2xl">

          <h2 className="text-xl md:text-3xl font-bold text-blue-900">
            Full-Service Package
          </h2>

          <p className="mt-4 md:mt-6 text-3xl md:text-5xl font-bold text-blue-950">
            $499+
          </p>

          <p className="mt-3 md:mt-4 text-sm md:text-gray-700">
            Full-service package pricing starts at $499 based on practice scale.
          </p>

        </div>

      </div>


      {/* Included Services */}
      <div className="mt-16 md:mt-24 text-center bg-white/20 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-12 max-w-4xl mx-auto border border-white/30 shadow-2xl">

        <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
          What’s Included
        </h2>

        <div className="mt-6 md:mt-10 space-y-3 md:space-y-4 text-base md:text-xl text-gray-800">

          <p>✔ End-to-end revenue cycle management</p>
          <p>✔ Medical coding & claims submission</p>
          <p>✔ AR follow-ups & denial management</p>
          <p>✔ Reporting & analytics support</p>

        </div>

      </div>

    </div>
  );
}

export default Pricing;