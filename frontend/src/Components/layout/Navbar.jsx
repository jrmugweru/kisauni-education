import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSchool, FaUserShield, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#003366] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <FaSchool className="text-4xl text-yellow-400" />

          <div>
            <h1 className="text-xl font-bold">
              Kisauni Education
            </h1>

            <p className="text-sm text-gray-300">
              Management System
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>

          <Link to="/schools" className="hover:text-yellow-400">
            Schools
          </Link>

          <Link to="/contact" className="hover:text-yellow-400">
            Contact
          </Link>

          <Link
            to="/admin-login"
            className="flex items-center gap-2 bg-yellow-400 text-[#003366] px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300"
          >
            <FaUserShield />
            Admin Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#003366] px-6 pb-6 flex flex-col gap-5">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/schools" onClick={() => setMenuOpen(false)}>
            Schools
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <Link
            to="/admin-login"
            onClick={() => setMenuOpen(false)}
            className="bg-yellow-400 text-[#003366] px-4 py-2 rounded-lg font-semibold text-center"
          >
            Admin Login
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;