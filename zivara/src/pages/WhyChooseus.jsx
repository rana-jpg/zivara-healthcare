function WhyChooseUs() {
  return (
    <div className="min-h-screen px-10 py-24">

      <div className="text-center">

        <h1 className="text-6xl font-bold text-blue-950">
          Why Choose Us
        </h1>

        <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
          Reliable, scalable, and transparent medical billing solutions
          designed for healthcare providers across the USA.
        </p>

      </div>


      <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto">

        <div className="bg-white/30 backdrop-blur-md p-10 rounded-3xl border border-white/40 shadow-2xl hover:-translate-y-2 transition duration-300">

          <h2 className="text-3xl font-bold text-blue-900">
            Experienced Team
          </h2>

          <p className="mt-4 text-gray-700 text-lg leading-8">
            Skilled AR specialists with deep knowledge of
            US healthcare billing.
          </p>

        </div>


        <div className="bg-white/30 backdrop-blur-md p-10 rounded-3xl border border-white/40 shadow-2xl hover:-translate-y-2 transition duration-300">

          <h2 className="text-3xl font-bold text-blue-900">
            High Accuracy
          </h2>

          <p className="mt-4 text-gray-700 text-lg leading-8">
            Minimized errors leading to fewer denials
            and faster payments.
          </p>

        </div>


        <div className="bg-white/30 backdrop-blur-md p-10 rounded-3xl border border-white/40 shadow-2xl hover:-translate-y-2 transition duration-300">

          <h2 className="text-3xl font-bold text-blue-900">
            Scalable Solutions
          </h2>

          <p className="mt-4 text-gray-700 text-lg leading-8">
            Flexible solutions for both small clinics
            and large healthcare practices.
          </p>

        </div>


        <div className="bg-white/30 backdrop-blur-md p-10 rounded-3xl border border-white/40 shadow-2xl hover:-translate-y-2 transition duration-300">

          <h2 className="text-3xl font-bold text-blue-900">
            Dedicated Support
          </h2>

          <p className="mt-4 text-gray-700 text-lg leading-8">
            Personalized attention and regular updates
            on revenue performance.
          </p>

        </div>

      </div>

    </div>
  );
}

export default WhyChooseUs;