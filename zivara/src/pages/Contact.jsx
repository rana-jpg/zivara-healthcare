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
      <div className="max-w-4xl mx-auto mt-16 md:mt-20 bg-white/30 backdrop-blur-md p-6 md:p-12 rounded-2xl md:rounded-3xl border border-white/40 shadow-2xl">

        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center">
          Get In Touch
        </h2>

        <p className="mt-4 md:mt-6 text-center text-sm md:text-lg text-gray-700">
          Contact us for enquiries, pricing, or healthcare billing support.
        </p>

        <div className="mt-8 md:mt-12 space-y-8 text-center">

          {/* Email */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-950">
              Email
            </h3>

            <a
              href="mailto:zivarahealthcaresolution@gmail.com"
              className="mt-4 inline-flex items-center justify-center text-center bg-blue-800 text-white px-4 md:px-6 py-3 rounded-2xl hover:bg-blue-900 transition shadow-lg break-all max-w-full"
            >
              zivarahealthcaresolution@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-950">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/company/zivara-healthcare-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-800 text-white px-6 py-3 rounded-2xl hover:bg-blue-900 transition shadow-lg"
            >
              Visit LinkedIn
            </a>
          </div>

          {/* Instagram */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-950">
              Instagram
            </h3>

            <a
              href="https://www.instagram.com/zivarahealthcaresolutions?igsh=YWZmYms2cjZmbnls"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-800 text-white px-6 py-3 rounded-2xl hover:bg-blue-900 transition shadow-lg"
            >
              Visit Instagram
            </a>
          </div>

          {/* Enquiry Form */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-950">
              Enquiry Form
            </h3>

            <a
              href="https://forms.gle/XoSZsotuEmqdvidU7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-800 text-white px-6 py-3 rounded-2xl hover:bg-blue-900 transition shadow-lg"
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