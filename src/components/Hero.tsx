const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm Shrikant
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mt-4">
          Full Stack Developer
        </p>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300">
          Java • Spring Boot • React • AWS
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/resume.pdf"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-medium"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="border border-slate-500 hover:border-white transition px-6 py-3 rounded-lg text-white font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
