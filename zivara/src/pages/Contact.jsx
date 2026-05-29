function Contact() {
  return (
    <div className="min-h-screen px-4 md:px-10 py-16 md:py-24">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-3xl md:text-6xl font-bold text-blue-950">
          Contact Us
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-700 leading-7 md:leading-8">
          Ready to maximize your revenue?
          Partner with Zivara Healthcare Solutions and experience
          hassle-free medical billing.
        </p>

      </div>


      {/* Contact Card */}
      <div className="max-w-4xl mx-auto mt-12 md:mt-16 bg-white/30 backdrop-blur-md p-6 md:p-12 rounded-2xl md:rounded-3xl border border-white/40 shadow-2xl">

        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center">
          Get In Touch
        </h2>

        <p className="mt-4 md:mt-6 text-center text-sm md:text-lg text-gray-700">
          Contact us for enquiries, pricing, or healthcare billing support.
        </p>


        <div className="mt-8 md:mt-12 space-y-6 md:space-y-8 text-center">

          {/* Email */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-950">
              Email
            </h3>

            <p className="mt-2 text-sm md:text-lg text-gray-800 break-all">
              zivarahealthcaresolution@gmail.com
            </p>
          </div>


          {/* Form */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-950">
              Enquiry Form
            </h3>

            <a
              href="https://forms.gle/XoSZsotuEmqdvidU7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-800 text-white px-5 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-xl md:rounded-2xl hover:bg-blue-900 transition shadow-lg"
            >
              Open Enquiry Form
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;