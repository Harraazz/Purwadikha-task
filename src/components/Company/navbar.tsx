import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 text-sm font-medium transition duration-300 ${
      isActive ? "text-white" : "text-slate-300 hover:text-white"
    }`;

  return (
    <nav className="bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white text-2xl font-bold tracking-wide flex items-center gap-2">
            <img src="/img/logo1.png" className="h-15 W-15" alt="" />
            Dreamable
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/teams" className={navLinkClass}>
              Teams
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              Blog List
            </NavLink>
            <NavLink to="/create-blog" className={navLinkClass}>
              Create Blog
            </NavLink>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-6 py-4 space-y-3">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/teams" className={navLinkClass}>
            Teams
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            Blog List
          </NavLink>
          <NavLink to="/create-blog" className={navLinkClass}>
            Create Blog
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
