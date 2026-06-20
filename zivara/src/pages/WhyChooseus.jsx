function WhyChooseUs() {
  const benefits = [
    {
      title: "11+ Years Industry Expertise",
      desc: "Experienced Revenue Cycle Management professionals dedicated to improving financial performance and operational efficiency.",
    },
    {
      title: "99% Accuracy Rate",
      desc: "Highly accurate billing and coding processes that minimize errors and reduce claim denials.",
    },
    {
      title: "99% First-Pass Claim Rate",
      desc: "Clean claim submissions that improve acceptance rates and accelerate reimbursements.",
    },
    {
      title: "20–30% Revenue Increase",
      desc: "Proven strategies that help healthcare practices improve collections and reduce revenue leakage.",
    },
    {
      title: "100% Transparency",
      desc: "Complete visibility into billing activities, collections, claim status, and financial performance.",
    },
    {
      title: "24/7 Customer Support",
      desc: "Dedicated support team available to assist with billing, claims, and operational concerns.",
    },
    {
      title: "Proactive Auditing",
      desc: "Continuous monitoring and auditing processes that identify issues before they become costly problems.",
    },
    {
      title: "Cost-Effective Solutions",
      desc: "Affordable alternatives to maintaining an in-house billing department while achieving better results.",
    },
  ];

  return (
    <section
      id="whychooseus"
      className="px-4 sm:px-6 md:px-10 py-16 md:py-24"
    >
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-6xl font-bold text-blue-950">
          Why Choose Us
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-700 max-w-4xl mx-auto leading-7 md:leading-9">
          We combine expertise, technology, transparency, and personalized
          service to help healthcare providers achieve stronger financial
          performance and better operational outcomes.
        </p>

      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-20 max-w-7xl mx-auto">

        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="h-full bg-white/30 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/40 shadow-2xl hover:-translate-y-1 transition duration-300"
          >

            <h2 className="text-xl md:text-2xl font-bold text-blue-900">
              {benefit.title}
            </h2>

            <p className="mt-4 text-sm md:text-lg text-gray-700 leading-7 md:leading-8">
              {benefit.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default WhyChooseUs;