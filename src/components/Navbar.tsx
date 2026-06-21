import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-lg sm:text-xl text-white">
            Shrikant Lohar
          </h1>

          <div className="hidden sm:flex gap-6 text-slate-300">
            {["about", "skills", "experience", "projects", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="hover:text-blue-400 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ),
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 mt-4">
                {["about", "skills", "experience", "projects", "contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={() => {
                        (setIsOpen(false), handleNavClick(item));
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  ),
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
