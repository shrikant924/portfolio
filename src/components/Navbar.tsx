const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <h1 className="font-bold text-lg sm:text-xl text-white">
          Mr. Shrikant Shivaji Lohar
        </h1>

        {/* Links */}
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

        {/* Mobile menu button (placeholder) */}
        <button className="sm:hidden text-slate-300">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
