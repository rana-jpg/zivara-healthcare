function Services() {
  return (
    <div className="min-h-screen px-4 md:px-10 py-16 md:py-24">

      {/* Header */}
      <div className="text-center">

        <h1 className="text-3xl md:text-6xl font-bold text-blue-950">
          Our Services
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
          Complete Revenue Cycle Management solutions designed to improve
          efficiency, reduce denials, and maximize collections.
        </p>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-20 max-w-6xl mx-auto">

        {[
          {
            title: "Front-End Services",
            desc: "Accurate patient registration, insurance verification, and eligibility checks to prevent billing errors."
          },
          {
            title: "Charge Capture & Coding",
            desc: "Precise documentation and coding to ensure maximum reimbursement and compliance."
          },
          {
            title: "Claims Submission",
            desc: "Timely and error-free claim submission to accelerate payment cycles."
          },
          {
            title: "Payment Posting",
            desc: "Quick and accurate posting of payments with proper reconciliation."
          },
          {
            title: "AR Management",
            desc: "Proactive follow-ups to reduce outstanding balances and improve cash flow."
          },
          {
            title: "Denial Management",
            desc: "Efficient correction and resubmission of denied claims to recover revenue."
          },
          {
            title: "Patient Billing & Collections",
            desc: "Clear patient communication and streamlined billing to ensure timely collections."
          },
          {
            title: "Reporting & Analytics",
            desc: "Detailed reports and insights to track performance and optimize revenue cycle efficiency."
          },
          {
            title: "Credentialing & Enrollment",
            desc: "Hassle-free provider enrollment with insurance payers for uninterrupted billing."
          },
          {
            title: "Compliance & Auditing",
            desc: "Regular audits and compliance checks to meet industry standards and avoid risks."
          },
          {
            title: "Others",
            desc: "Customized solutions tailored to meet your unique practice needs"
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/30 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/40 shadow-2xl"
          >
            <h2 className="text-lg md:text-2xl font-bold text-blue-900">
              {item.title}
            </h2>

            <p className="mt-3 md:mt-4 text-sm md:text-gray-700">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Services;