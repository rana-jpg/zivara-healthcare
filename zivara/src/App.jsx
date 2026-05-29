import background from "./assets/bg.jpg";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import WhyChooseUs from "./pages/WhyChooseus";

import logo from "./assets/logo.jpg";

function App() {
  return (
    <BrowserRouter>

      <div
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >

        {/* Overlay */}
        <div className="min-h-screen backdrop-blur-[2px] bg-white/20">

          {/* Navbar */}
          <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-xl bg-white/40 sticky top-0 z-50 border-b border-white/30 shadow-lg">

            <div>
              <img
                src={logo}
                alt="Zivara Logo"
                className="h-20"
              />
            </div>

            <div className="flex gap-8 text-lg font-semibold">

  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? "text-blue-900 border-b-2 border-blue-900 pb-1"
        : "text-gray-700 hover:text-blue-900 transition"
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive
        ? "text-blue-900 border-b-2 border-blue-900 pb-1"
        : "text-gray-700 hover:text-blue-900 transition"
    }
  >
    About Us
  </NavLink>

  <NavLink
    to="/services"
    className={({ isActive }) =>
      isActive
        ? "text-blue-900 border-b-2 border-blue-900 pb-1"
        : "text-gray-700 hover:text-blue-900 transition"
    }
  >
    Services
  </NavLink>

  <NavLink
    to="/pricing"
    className={({ isActive }) =>
      isActive
        ? "text-blue-900 border-b-2 border-blue-900 pb-1"
        : "text-gray-700 hover:text-blue-900 transition"
    }
  >
    Pricing
  </NavLink>

  <NavLink
    to="/whychooseus"
    className={({ isActive }) =>
      isActive
        ? "text-blue-900 border-b-2 border-blue-900 pb-1"
        : "text-gray-700 hover:text-blue-900 transition"
    }
  >
    Why Choose Us
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive
        ? "text-blue-900 border-b-2 border-blue-900 pb-1"
        : "text-gray-700 hover:text-blue-900 transition"
    }
  >
    Contact Us
  </NavLink>

</div>

          </nav>

          {/* Routes */}
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/pricing" element={<Pricing />} />

            <Route path="/whychooseus" element={<WhyChooseUs />} />

            <Route path="/contact" element={<Contact />} />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;