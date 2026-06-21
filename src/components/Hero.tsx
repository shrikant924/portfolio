import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-28 sm:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        {/* Profile Picture */}
        <motion.img
          src={profile} // Place image in public folder
          alt="Shrikant Lohar"
          className="w-36 h-36 sm:w-48 sm:h-48 rounded-full mx-auto mb-8 object-cover border-4 border-blue-500 shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <h1 className="text-4xl sm:text-6xl font-bold">
          Hi, I'm Shrikant Lohar
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 mt-4">
          Full Stack Developer
        </p>

        <p className="mt-3 text-slate-300 text-sm sm:text-base">
          Java • Spring Boot • React • AWS • Microservices
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Download Resume */}
          <a
            href="/Resume.pdf"
            download="Shrikant_Lohar_Resume.pdf"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 px-6 py-3 rounded-lg font-medium shadow-lg"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="border border-slate-500 hover:border-white hover:scale-105 transition duration-300 px-6 py-3 rounded-lg font-medium"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
