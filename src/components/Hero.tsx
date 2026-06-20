import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl sm:text-6xl font-bold">Hi, I'm Shrikant</h1>

        <p className="text-xl sm:text-2xl text-slate-400 mt-4">
          Full Stack Developer
        </p>

        <p className="mt-3 text-slate-300">Java • Spring Boot • React • AWS</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Resume.pdf"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition px-6 py-3 rounded-lg"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="border border-slate-500 hover:border-white hover:scale-105 transition px-6 py-3 rounded-lg"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
