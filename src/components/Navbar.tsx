import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="font-bold text-lg sm:text-xl text-white">
            Mr. Shrikant Shivaji Lohar
          </h1>

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-6 text-sm md:text-base text-slate-300">
            <a className="hover:text-white transition" href="#about">
              About
            </a>
            <a className="hover:text-white transition" href="#skills">
              Skills
            </a>
            <a className="hover:text-white transition" href="#experience">
              Experience
            </a>
            <a className="hover:text-white transition" href="#projects">
              Projects
            </a>
            <a className="hover:text-white transition" href="#contact">
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-slate-300 text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col gap-4 mt-4 text-slate-300">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
            <a href="#experience" onClick={() => setIsOpen(false)}>
              Experience
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
