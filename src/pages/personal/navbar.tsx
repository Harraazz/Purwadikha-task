import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md border-2 border-[#92487A] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-[#92487A]">PERSONAL WEB</div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#About" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#Porto" className="text-gray-700 hover:text-blue-600">
              Portfolio
            </a>
            <a href="#Skill" className="text-gray-700 hover:text-blue-600">
              Skill
            </a>
            <a className="text-gray-700 hover:text-blue-600">
              <Link to="/company" className="text-gray-700 hover:text-blue-600">
                Company-profile
              </Link>
            </a>
          </div>

          {/* Burger Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a className="block text-gray-700 hover:text-blue-600">
            <Link to="/">Home</Link>
          </a>
          <a href="#about" className="block text-gray-700 hover:text-blue-600">
            About
          </a>
          <a
            href="#portfolio"
            className="block text-gray-700 hover:text-blue-600">
            Portfolio
          </a>
          <a href="#skill" className="block text-gray-700 hover:text-blue-600">
            Skill
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
