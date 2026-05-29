function Contact() {
  return (
    <div className="min-h-screen px-10 py-24">

      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-6xl font-bold text-blue-950">
          Contact Us
        </h1>

        <p className="mt-6 text-xl text-gray-700 leading-8">
          Ready to maximize your revenue?
          Partner with Zivara Healthcare Solutions and experience
          hassle-free medical billing.
        </p>

      </div>


      {/* Contact Card */}
      <div className="max-w-4xl mx-auto mt-16 bg-white/30 backdrop-blur-md p-12 rounded-3xl border border-white/40 shadow-2xl">

        <h2 className="text-3xl font-bold text-blue-900 text-center">
          Get In Touch
        </h2>

        <p className="mt-6 text-center text-gray-700 text-lg">
          Contact us for enquiries, pricing, or healthcare billing support.
        </p>


        <div className="mt-12 space-y-8 text-center">

          <div>
            <h3 className="text-2xl font-semibold text-blue-950">
              Email
            </h3>

            <p className="mt-2 text-gray-800 text-lg">
              zivarahealthcaresolution@gmail.com
            </p>
          </div>


          <div>
            <h3 className="text-2xl font-semibold text-blue-950">
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