function Pricing() {
  const pricingPlans = [
    {
      title: "Revenue Based Model",
      price: "2.49%",
      desc: "Revenue based pricing model.",
      featured: false,
    },
    {
      title: "Per Claim Fee Model",
      price: "$2",
      subtext: "Per Claim Submitted",
      desc: "Simple per claim pricing.",
      featured: true,
    },
    {
      title: "Flat Monthly Fee Model",
      price: "Starting at $499",
      desc: "Flat monthly pricing based on your practice requirements.",
      featured: false,
    },
    {
      title: "Free Trial",
      price: "2–6 Weeks",
      desc: "Free trial available for newly onboarded practices.",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="px-4 md:px-10 py-16 md:py-24">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-blue-950">
          Pricing
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-700">
          Affordable pricing models designed to suit every healthcare practice.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20 max-w-7xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={
              plan.featured
                ? "bg-blue-900/80 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl text-center text-white border border-white/20 shadow-2xl"
                : "bg-white/30 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl text-center border border-white/40 shadow-2xl"
            }
          >
            <h2
              className={
                plan.featured
                  ? "text-xl md:text-2xl font-bold"
                  : "text-xl md:text-2xl font-bold text-blue-900"
              }
            >
              {plan.title}
            </h2>

            <p
              className={
                plan.featured
                  ? "mt-5 text-3xl md:text-5xl font-bold"
                  : "mt-5 text-3xl md:text-5xl font-bold text-blue-950"
              }
            >
              {plan.price}
            </p>

            {plan.subtext && (
              <p className="mt-2 text-sm md:text-base">
                {plan.subtext}
              </p>
            )}

            <p
              className={
                plan.featured
                  ? "mt-4 text-blue-100"
                  : "mt-4 text-gray-700"
              }
            >
              {plan.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Cost Comparison */}
      <div className="mt-16 md:mt-24 max-w-5xl mx-auto bg-white/30 backdrop-blur-md rounded-3xl p-4 md:p-8 border border-white/40 shadow-2xl">

        <h2 className="text-2xl md:text-4xl font-bold text-blue-950 text-center mb-8">
          Cost Comparison
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full bg-white border border-gray-300 text-center">

            <tbody>

              <tr>
                <td
                  colSpan="2"
                  className="bg-gray-900 text-white font-bold text-lg md:text-2xl py-4"
                >
                  IN-HOUSE BILLING COSTS
                </td>
              </tr>

              <tr>
                <td
                  colSpan="2"
                  className="py-3 text-sm md:text-base text-gray-600"
                >
                  *calculations based on a medium-scale practice with $100,000 collections
                </td>
              </tr>

              <tr className="border">
                <td className="p-4 font-semibold">Annual Salary</td>
                <td className="p-4">$54,480</td>
              </tr>

              <tr className="border">
                <td className="p-4 font-semibold">Overheads</td>
                <td className="p-4">$15,000</td>
              </tr>

              <tr className="border">
                <td className="p-4 font-bold">Total</td>
                <td className="p-4 font-bold">$69,480</td>
              </tr>

              <tr>
                <td
                  colSpan="2"
                  className="bg-blue-900 text-white font-bold text-lg md:text-2xl py-4"
                >
                  ZIVARA FULL SERVICE MEDICAL BILLING COSTS
                </td>
              </tr>

              <tr>
                <td
                  colSpan="2"
                  className="py-3 text-sm md:text-base text-gray-600"
                >
                  *calculations based on a medium-scale practice with $100,000 collections
                </td>
              </tr>

              <tr className="border">
                <td className="p-4 font-semibold">
                  Billing Service Rates
                </td>
                <td className="p-4">
                  as low as 2.99% of the collections
                </td>
              </tr>

              <tr className="border">
                <td className="p-4 font-bold">Total</td>
                <td className="p-4 font-bold">$35,998</td>
              </tr>

              <tr>
                <td
                  colSpan="2"
                  className="bg-blue-900 text-white font-bold text-lg md:text-2xl py-4"
                >
                  ANNUAL SAVINGS WITH ZIVARA
                </td>
              </tr>

              <tr>
                <td
                  colSpan="2"
                  className="py-6 text-3xl md:text-5xl font-bold text-green-700"
                >
                  $33,482
                </td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
            {/* Our Experienced Team */}
      <div className="mt-16 md:mt-24">

        <h2 className="text-2xl md:text-4xl font-bold text-blue-950 text-center">
          Our Experienced Team
        </h2>

        <p className="mt-6 max-w-5xl mx-auto text-center text-gray-700 text-base md:text-xl leading-8">
          Zivara is backed by healthcare industry experts with over 11 years of
          experience in U.S. healthcare and end-to-end revenue cycle management
          services. Our dedicated team proudly serves more than 34 practices
          across the United States, achieving a 99% success rate in enhancing
          practice revenue while reducing operational costs through efficient
          and reliable service delivery.
        </p>

        <p className="mt-6 max-w-5xl mx-auto text-center text-gray-700 text-base md:text-xl leading-8">
          We blend deep industry expertise with a client-first approach to help
          practices enhance cash flow, ease administrative burden, and stay
          focused on delivering quality patient care.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">

          <div className="bg-white/30 backdrop-blur-md rounded-3xl p-6 text-center border border-white/40 shadow-xl">
            <h3 className="text-3xl md:text-5xl font-bold text-blue-900">
              11+
            </h3>
            <p className="mt-2 text-gray-700">
              Years Experience
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-md rounded-3xl p-6 text-center border border-white/40 shadow-xl">
            <h3 className="text-3xl md:text-5xl font-bold text-blue-900">
              34+
            </h3>
            <p className="mt-2 text-gray-700">
              Practices Served
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-md rounded-3xl p-6 text-center border border-white/40 shadow-xl">
            <h3 className="text-3xl md:text-5xl font-bold text-blue-900">
              99%
            </h3>
            <p className="mt-2 text-gray-700">
              Success Rate
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-md rounded-3xl p-6 text-center border border-white/40 shadow-xl">
            <h3 className="text-3xl md:text-5xl font-bold text-blue-900">
              99%
            </h3>
            <p className="mt-2 text-gray-700">
              First-Pass Claim Submission
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Pricing;