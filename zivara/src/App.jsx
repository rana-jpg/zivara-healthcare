import background from "./assets/bg.jpg";
import logo from "./assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import WhyChooseUs from "./pages/WhyChooseus";


function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Overlay */}
      <div className="min-h-screen backdrop-blur-[2px] bg-white/20">

        {/* Navbar */}
        <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 md:py-6 backdrop-blur-xl bg-white/40 sticky top-0 z-50 border-b border-white/30 shadow-lg">

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Zivara Logo"
              className="h-14 md:h-20 object-contain"
            />
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 text-sm md:text-lg font-semibold mt-3 md:mt-0">

            <a
              href="#home"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              About Us
            </a>

            <a
              href="#services"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Services
            </a>

            <a
              href="#whychooseus"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Why Choose Us
            </a>

            <a
              href="#pricing"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Pricing
            </a>

            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Contact Us
            </a>

            {/* Phone Button */}
            <a
              href="tel:+919099888336"
              className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-900 transition shadow-lg"
            >
              <FaPhoneAlt />
              +91 90998 88336
            </a>

          </div>

        </nav>

        {/* One Page Layout */}
        <Home />
        <About />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <Contact />

      </div>
    </div>
  );
}

export default App;