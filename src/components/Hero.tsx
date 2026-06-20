const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-6xl font-bold">Hi, I'm Shrikant</h1>

        <p className="text-2xl text-slate-400 mt-4">Full Stack Developer</p>

        <p className="mt-2">Java • Spring Boot • React • AWS</p>

        <div className="mt-8 flex gap-4">
          <a href="/resume.pdf" className="bg-blue-600 px-6 py-3 rounded-lg">
            Resume
          </a>

          <a href="#contact" className="border px-6 py-3 rounded-lg">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
