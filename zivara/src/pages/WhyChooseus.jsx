function WhyChooseUs() {
  return (
    <div className="min-h-screen px-4 md:px-10 py-16 md:py-24">

      {/* Header */}
      <div className="text-center">

        <h1 className="text-3xl md:text-6xl font-bold text-blue-950">
          Why Choose Us
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
          Reliable, scalable, and transparent medical billing solutions
          designed for healthcare providers across the USA.
        </p>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-20 max-w-6xl mx-auto">

        {[
          {
            title: "Experienced Team",
            desc: "Skilled AR specialists with deep knowledge of US healthcare billing."
          },
          {
            title: "High Accuracy",
            desc: "Minimized errors leading to fewer denials and faster payments."
          },
          {
            title: "Scalable Solutions",
            desc: "Flexible solutions for both small clinics and large healthcare practices."
          },
          {
            title: "Dedicated Support",
            desc: "Personalized attention and regular updates on revenue performance."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/30 backdrop-blur-md p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/40 shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition duration-300"
          >

            <h2 className="text-xl md:text-3xl font-bold text-blue-900">
              {item.title}
            </h2>

            <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-700 leading-7 md:leading-8">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default WhyChooseUs;